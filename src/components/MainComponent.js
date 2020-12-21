import { Component } from 'react';
import PlantList from './PlantListComponent';
/*import FilterNav from './FilterNavComponent';*/
/*import Guide from './GuideComponent';*/
import PlantSingle from './PlantSingleComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { PLANTS } from '../shared/plants';
import { EXPLAINERS } from '../shared/explainers';
import FilterNav from './FilterNavComponent';


class Main extends Component {
  constructor(props) {
    super(props);
        
        EXPLAINERS.forEach(function(explainer, index){
          console.log(explainer);
          PLANTS.splice((Math.floor((Math.random() * PLANTS.length)) + index*3), 0, explainer)
        });
    this.state = {
        plants: PLANTS,
        criteria: [],
    };
    this.plantFilter = this.plantFilter.bind(this);
    this.updateCriteria = this.updateCriteria.bind(this);
  }

  plantFilter(criteria, plant) {
    /*var searchvalue = document.getElementById("plantsearch").val().toLowerCase();*/
    var cardheight = true;
    var cardlight = true;
    var cardcare = true;
    
  
    for (let i = 0; i < criteria.length; i++) {
        if (criteria[i][0] == "height" && plant.height.indexOf(criteria[i][1]) > -1) {
            cardheight = true;
            break
        } else if (criteria[i][0] == "height" && plant.height.indexOf(criteria[i][1]) == -1) {
            cardheight = false;
        };
    }

    for (let i = 0; i < criteria.length; i++) {
        if (criteria[i][0] == "light" && plant.light.text().toLowerCase().indexOf(criteria[i][1]) > -1) {
            cardlight = true;
            break
        } else if (criteria[i][0] == "light" && plant.light.text().toLowerCase().indexOf(criteria[i][1]) == -1) {
            cardlight = false;
        };
    }

    for (let i = 0; i < criteria.length; i++) {
        if (criteria[i][0] == "care" && plant.care.text().toLowerCase().indexOf(criteria[i][1]) > -1) {
            cardcare = true;
            break
        } else if (criteria[i][0] == "care" && plant.care.text().toLowerCase().indexOf(criteria[i][1]) == -1) {
            cardcare = false;
        };
    }
    //var cardValue = plant.keywords.text().toLowerCase();
    //cardValue += plant.keywords.text().toLowerCase();
    return(cardheight && cardlight && cardcare /*&& cardValue.indexOf(searchvalue) > -1*/);
  };

  /* functions to edit criteria list and to update toasts and navbar links according to that list */

  updateCriteria(ev) {
    var criterium = [];
    var test = ev.target.dataset.critval;
    if (this.state.criteria.find(function(currentVal) {return currentVal[1] == test;}) == undefined){
        criterium.push(ev.target.dataset.crittype);
        criterium.push(ev.target.dataset.critval);
        let criteria = this.state.criteria;
        criteria.push(criterium);
        this.setState({criteria : criteria});
    } else {
        var clear = ev.target.dataset.critval;
        var i = "";
        while (this.state.criteria.find(function(currentVal, index) {
            i = index;
            return currentVal[1] == clear;
        }) != undefined) {
          let criteria = this.state.criteria;
          criteria.splice(i, 1);
          this.setState({criteria : criteria});
        }
      }
  };
  
  /*valCheck() {
    thisVal = this.val('critval');
    return (
      criteria.find(function(value) {value == this}, thisVal) > 0
      )
    };*/

  /* this one needs to be applied to the nav lis every time the view is rerendered; somehting like < active={valCheck()} */
  /* not sure about 'this' tho */

  /*editCriteria() {
    this.on(click, function() {
      if (valCheck()) {

      }
    });
  }*/
  
  
  
  
  render() {
   

    const PlantWithName = ({match}) => {
      return (
        <PlantSingle plant={this.props.dishes.filter((dish) => dish.id === match.params.plantName)[0]} />
      )
    }

    const HomePage =() => {
      return(
        <div>
          <FilterNav criteria={this.state.criteria} clickFunction={this.updateCriteria}/>
          <PlantList criteria={this.state.criteria} plants={this.state.plants} plantFilter={this.plantFilter}/>
        </div>
      )
    }
  
    /*return (
      <div className="App">
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/:plantName" component={PlantWithName}/>
          <Redirect to="/home" />
        </Switch>
      </div>
    );*/

    return (
      <div className="App">
        <HomePage/>
      </div>
    );
  }
}

export default Main;