import React, { Component } from "react";
import PlantList from "./PlantListComponent";
import FilterNav from "./FilterNavComponent";
import Guide from "./GuideComponent";
import { PLANTS } from "../shared/plants";
import { EXPLAINERS } from "../shared/explainers";
import ReactDOM from "react-dom";
import { filter } from "minimatch";

EXPLAINERS.forEach(function (explainer, index) {
  PLANTS.splice(
    Math.floor(Math.random() * PLANTS.length) + index * 3,
    0,
    explainer
  );
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: PLANTS,
      criteria: [],
      searchValue: "",
      collapse: true,
      guideHeight: "",
      navHeight: 0,
      sticky: false,
    };
    this.plantFilter = this.plantFilter.bind(this);
    this.updateCriteria = this.updateCriteria.bind(this);
    this.clearCriteria = this.clearCriteria.bind(this);
    this.valCheck = this.valCheck.bind(this);
    this.formControll = this.formControll.bind(this);
    this.collapseHandler = this.collapseHandler.bind(this);
    this.updateGuideHeight = this.updateGuideHeight.bind(this);
    this.updateNavHeight = this.updateNavHeight.bind(this);
    this.updateSticky = this.updateSticky.bind(this);
  }

  /* function to filter grid of plants based on current criteria */

  plantFilter(plants, criteria, searchValue) {
    const criteriaTypes = ["height", "light", "care"];
    //filter the plant array based on user-entered criteria
    const filteredPlants = plants.filter((plant) => {
      //for each plant, check each criteria type against user entered data
      const trueOrFalse = criteriaTypes.map((type) => {
        //get get all user entered criteria that correspond to each type and see if any of them match the plant's properties
        const filteredCriteria = criteria.filter(
          (criterium) => criterium[0] === type
        );
        //if there are any user-enetered criteria of a certain type, check if at least one of them matches plant and return true or false
        return filteredCriteria.length > 0
          ? filteredCriteria.some(
              (criterium) => plant[`${type}`] === criterium[1]
            )
          : true;
      });
      //for the array of reduced results for each type, reduce them all to false if any are false and true if all are true. If the array is empty, return true
      const reducedTrueOrFlase =
        trueOrFalse.length > 0
          ? trueOrFalse.reduce((truths, truth) =>
              truths === false || truth === false ? false : true
            )
          : true;
      //finally, the filter on the plant list array will return true if the criteria tests reduce to true and the keywords or name of the plant match any search terms entered. if there are no search terms, return true.
      return (
        reducedTrueOrFlase &&
        (searchValue !== undefined
          ? plant.name
              .concat(plant.keywords)
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase())
          : true)
      );
    });

    return filteredPlants;
  }

  /* functions to edit criteria list and to update toasts and navbar links according to that list */

  updateCriteria(type, val) {
    var criterium = [];
    if (
      this.state.criteria.find(function (currentVal) {
        return currentVal[1] == val;
      }) == undefined
    ) {
      criterium.push(type);
      criterium.push(val);
      let criteria = this.state.criteria;
      criteria.push(criterium);
      this.setState({ criteria: criteria });
    } else {
      var i = "";
      while (
        this.state.criteria.find(function (currentVal, index) {
          i = index;
          return currentVal[1] == val;
        }) != undefined
      ) {
        let criteria = this.state.criteria;
        criteria.splice(i, 1);
        this.setState({ criteria: criteria });
      }
    }
  }

  formControll(ev) {
    this.setState({ searchValue: ev.target.value });
  }

  clearCriteria(clear) {
    var i = "";
    while (
      this.state.criteria.find(function (currentVal, index) {
        i = index;
        return currentVal[0] == clear;
      }) != undefined
    ) {
      let criteria = this.state.criteria;
      criteria.splice(i, 1);
      this.setState({ criteria: criteria });
    }
  }

  valCheck(item) {
    var check = item.dataset.critval;
    return (
      this.state.criteria.find(function (value) {
        return value[1] == check;
      }) !== undefined
    );
  }

  /* functions to expand or collapse the guide and pass information to make the nav bar sticky on scroll */

  collapseHandler() {
    let collapse = !this.state.collapse;
    this.setState({ collapse: collapse });
  }

  updateGuideHeight(rectHeight) {
    this.setState({ guideHeight: rectHeight });
  }

  updateNavHeight(rectHeight) {
    this.setState({ navHeight: rectHeight });
  }

  updateSticky(isSticky) {
    this.setState({ sticky: isSticky });
  }

  render() {
    const filteredPlants = this.plantFilter(
      this.state.plants,
      this.state.criteria,
      this.state.searchValue
    );
    return (
      <div className="App">
        <Guide
          collapseHandler={this.collapseHandler}
          updateGuideHeight={this.updateGuideHeight}
          updateNavHeight={this.updateNavHeight}
          collapse={this.state.collapse}
          guideHeight={this.state.guideHeight}
          plants={this.state.plants}
        />
        <FilterNav
          updateCriteria={this.updateCriteria}
          clearCriteria={this.clearCriteria}
          valCheck={this.valCheck}
          formControll={this.formControll}
          collapseHandler={this.collapseHandler}
          updateNavHeight={this.updateNavHeight}
          updateSticky={this.updateSticky}
          criteria={this.state.criteria}
          formValue={this.state.searchValue}
          collapse={this.state.collapse}
          guideHeight={this.state.guideHeight}
          sticky={this.state.sticky}
        />
        <PlantList
          plants={filteredPlants}
          navHeight={this.state.navHeight}
          collapseHandler={this.collapseHandler}
          collapse={this.state.collapse}
        />
      </div>
    );
  }
}

export default Main;
