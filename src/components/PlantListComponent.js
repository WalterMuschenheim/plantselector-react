import React from "react";
import PlantCard from "./PlantCardComponent";

function PlantList(props) {
  return (
    <div className="container" style={{ marginTop: props.navHeight }}>
      <div className="container" id="plantlist">
        <div className="row row-content">
          <div className="" id="plantlist-inner">
            <div className="card-columns">
              {props.plants.map(function (plant) {
                return (
                  <PlantCard
                    plant={plant}
                    collapseHandler={props.collapseHandler}
                    collapse={props.collapse}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantList;
