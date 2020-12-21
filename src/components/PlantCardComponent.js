import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import React from 'react';

function PlantCard(props) {

    if(props.plantFilter(props.criteria, props.plant)) {
        return(
            <Link to={`/${props.plant.name}`}>
                <Card>
                    {
                        //function() {if(props.plant.imageURL != "undefined") {return(
                    }<CardImg src={props.plant.imageURL}/>{
                        //)}}
                    }
                    <CardBody>
                        <CardTitle>
                            {props.plant.name}
                        </CardTitle>
                        <CardText>
                            {props.plant.description}
                            {props.plant.height}
                            {props.plant.light}
                            {props.plant.care}
                            {props.criteria.toString()}
                        </CardText>
                    </CardBody>
                </Card>
            </Link>
            );
        } else {
            return null;
        }
}

export default PlantCard;