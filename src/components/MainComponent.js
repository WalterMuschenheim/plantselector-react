import React, { Component } from 'react';
import PlantList from './PlantListComponent';
import FilterNav from './FilterNavComponent';
import Guide from './GuideComponent';
import { PLANTS } from '../shared/plants';
import { EXPLAINERS } from '../shared/explainers';
import ReactDOM from 'react-dom'

EXPLAINERS.forEach(function(explainer, index){
  PLANTS.splice((Math.floor((Math.random() * PLANTS.length)) + index*3), 0, explainer)
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
    this.updateSticky = this.updateSticky.bind(this)
  }

  /* function to filter grid of plants based on current criteria */

  plantFilter(plant) {
    var searchValue = this.state.searchValue;
    var cardheight = true;
    var cardlight = true;
    var cardcare = true;
    for (let i = 0; i < this.state.criteria.length; i++) {
        if (this.state.criteria[i][0] == "height" && plant.height && plant.height.indexOf(this.state.criteria[i][1]) > -1) {
            cardheight = true;
            break
        } else if (this.state.criteria[i][0] == "height" && plant.height && plant.height.indexOf(this.state.criteria[i][1]) == -1) {
            cardheight = false;
        };
    }
    for (let i = 0; i < this.state.criteria.length; i++) {
        if (this.state.criteria[i][0] == "light" && plant.light && plant.light.indexOf(this.state.criteria[i][1]) > -1) {
            cardlight = true;
            break
        } else if (this.state.criteria[i][0] == "light" && plant.light && plant.light.indexOf(this.state.criteria[i][1]) == -1) {
            cardlight = false;
        };
    }
    for (let i = 0; i < this.state.criteria.length; i++) {
        if (this.state.criteria[i][0] == "care" && plant.care && plant.care.indexOf(this.state.criteria[i][1]) > -1) {
            cardcare = true;
            break
        } else if (this.state.criteria[i][0] == "care" && plant.care && plant.care.indexOf(this.state.criteria[i][1]) == -1) {
            cardcare = false;
        };
    }
    var cardValue
    if(plant.keywords) {cardValue = plant.keywords.toLowerCase()};
    cardValue += plant.name.toLowerCase();
    return(cardheight && cardlight && cardcare && cardValue.indexOf(searchValue) > -1);
  };

  /* functions to edit criteria list and to update toasts and navbar links according to that list */

  updateCriteria(type, val) {
    var criterium = [];
    if (this.state.criteria.find(function(currentVal) {return currentVal[1] == val;}) == undefined){
        criterium.push(type);
        criterium.push(val);
        let criteria = this.state.criteria;
        criteria.push(criterium);
        this.setState({criteria : criteria});
    } else {
        var i = "";
        while (this.state.criteria.find(function(currentVal, index) {
            i = index;
            return currentVal[1] == val;
        }) != undefined) {
          let criteria = this.state.criteria;
          criteria.splice(i, 1);
          this.setState({criteria: criteria});
        }
      }
  };

  formControll(ev) {
    this.setState({searchValue: ev.target.value});
  }

  clearCriteria(clear) {
    var i = "";
    while (this.state.criteria.find(function(currentVal, index) {
        i = index;
          return currentVal[0] == clear;
    }) != undefined) {
        let criteria = this.state.criteria
        criteria.splice(i, 1);
        this.setState({criteria : criteria})
    }
  }
  
  valCheck(item) {
    var check = item.dataset.critval;
    return this.state.criteria.find(function(value) {return value[1] == check;}) !== undefined
  };

  /* functions to expand or collapse the guide and pass information to make the nav bar sticky on scroll */

  collapseHandler() {
    let collapse = !this.state.collapse;
    this.setState({collapse : collapse});
  }

  updateGuideHeight(rectHeight) {
    this.setState({guideHeight : rectHeight});
  }

  updateNavHeight(rectHeight) {
    this.setState({navHeight : rectHeight});
  }

  updateSticky(isSticky) {
    this.setState({sticky : isSticky});
  }
  
  
  render() {

    return (
      <div className="App">
          <Guide collapseHandler={this.collapseHandler} updateGuideHeight={this.updateGuideHeight} updateNavHeight={this.updateNavHeight} collapse={this.state.collapse} guideHeight={this.state.guideHeight} plants={this.state.plants}/>
          <FilterNav updateCriteria={this.updateCriteria} clearCriteria={this.clearCriteria} valCheck={this.valCheck} formControll={this.formControll} collapseHandler={this.collapseHandler} updateNavHeight={this.updateNavHeight} updateSticky={this.updateSticky} criteria={this.state.criteria} formValue={this.state.searchValue} collapse={this.state.collapse} guideHeight={this.state.guideHeight} sticky={this.state.sticky}/>
          <PlantList plants={this.state.plants} plantFilter={this.plantFilter} navHeight={this.state.navHeight} collapseHandler={this.collapseHandler} collapse={this.state.collapse}/>
      </div>
    );
  }
}

export default Main;