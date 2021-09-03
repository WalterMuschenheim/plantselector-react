import React, { Component } from "react";
import PlantList from "./PlantListComponent";
import FilterNav from "./FilterNavComponent";
import Guide from "./GuideComponent";
import ReactDOM from "react-dom";
import { filter } from "minimatch";
import { connect } from "react-redux";
import { HashRouter, withRouter } from "react-router-dom";
import {
  addCriteria,
  removeCriteria,
  clearCriteria,
  updateSearch,
  collapseHandler,
  updateGuideHeight,
  updateNavHeight,
  updateSticky,
} from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    header: state.header,
    plants: state.plants,
  };
};

const mapDispatchToProps = (dispatch) => ({
  /* functions to edit criteria list and to update toasts and navbar links according to that list */
  addCriteriaToStore: (type, criterium) =>
    dispatch(addCriteria(type, criterium)),
  removeCriteriaFromStore: (criterium) => dispatch(removeCriteria(criterium)),
  clearCriteria: (type) => dispatch(clearCriteria(type)),
  updateSearch: (searchTerms) => dispatch(updateSearch(searchTerms)),
  /* functions to expand or collapse the guide and pass information to make the nav bar sticky on scroll */
  collapseHandler: () => dispatch(collapseHandler()),
  updateGuideHeight: (rectHeight) => dispatch(updateGuideHeight(rectHeight)),
  updateNavHeight: (rectHeight) => dispatch(updateNavHeight(rectHeight)),
  updateSticky: (isSticky) => dispatch(updateSticky(isSticky)),
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.formControll = this.formControll.bind(this);
    this.updateCriteria = this.updateCriteria.bind(this);
  }

  /* function to filter grid of plants based on current criteria */

  plantFilter(plants, criteria, searchValue) {
    const criteriaTypes = ["height", "light", "care"];
    //filter the plant array based on user-entered criteria
    const filteredPlants = plants.filter((plant) => {
      //for each plant, check each criteria type against user entered data
      const trueOrFalse = criteriaTypes.map((type) => {
        //get get all user entered criteria that correspond to each type
        const filteredCriteria = criteria.filter(
          (criterium) => criterium[0] === type
        );
        //if there are any user-enetered criteria of a certain type, check if at least one of them matches plant's property for the same type and return true or false
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
    if (
      this.props.filters.criteria.find(function (currentVal) {
        return currentVal[1] === val;
      }) === undefined
    ) {
      this.props.addCriteriaToStore(type, val);
    } else {
      this.props.removeCriteriaFromStore(val);
    }
  }

  formControll(ev) {
    this.props.updateSearch(ev.target.value);
  }

  valCheck(item, criteria) {
    var check = item.dataset.critval;
    return (
      criteria.find(function (value) {
        return value[1] === check;
      }) !== undefined
    );
  }

  render() {
    const filteredPlants = this.plantFilter(
      this.props.plants,
      this.props.filters.criteria,
      this.props.filters.searchValue
    );
    return (
      <div className="App">
        <Guide
          collapseHandler={this.props.collapseHandler}
          updateGuideHeight={this.props.updateGuideHeight}
          updateNavHeight={this.props.updateNavHeight}
          collapse={this.props.header.collapse}
          guideHeight={this.props.header.guideHeight}
          plants={this.props.plants}
        />
        <FilterNav
          updateCriteria={this.updateCriteria}
          clearCriteria={this.props.clearCriteria}
          valCheck={this.valCheck}
          formControll={this.formControll}
          collapseHandler={this.props.collapseHandler}
          updateNavHeight={this.props.updateNavHeight}
          updateSticky={this.props.updateSticky}
          criteria={this.props.filters.criteria}
          formValue={this.props.filters.searchValue}
          collapse={this.props.header.collapse}
          guideHeight={this.props.header.guideHeight}
          sticky={this.props.header.sticky}
        />
        <PlantList
          plants={filteredPlants}
          navHeight={this.props.navHeight}
          collapseHandler={this.props.collapseHandler}
          collapse={this.props.header.collapse}
        />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
