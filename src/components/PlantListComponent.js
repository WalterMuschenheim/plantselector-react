import React from 'react';
import PlantCard from './PlantCardComponent';

function PlantList(props) {
    return(
        <div className="container">

            {/* plant cards */}
            <div className="container" id="plantlist">
                <div className="row row-content">
                    <div className="" id="plantlist-inner">
                        <div className='card-columns'>
                            {props.plants.map(function(plant) {return(<PlantCard plantfilter={props.plantfilter()} criteria={props.criteria} plant={plant}/>)})}
                        </div>
                    </div>
                </div>
            </div>
            {/* end of plant cards */}

        </div>
    )
}

export default PlantList;