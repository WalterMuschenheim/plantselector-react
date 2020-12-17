import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import React from 'react';

function PlantCard(props) {
    if(props.plantfilter(props.criteria, props.plant)) {
        return(
            <Link to={`/${props.plant.name}`}>
                <Card>
                    {
                        function() {if(props.plant.imageURL) {return(
                            <CardImg src={props.plant.imageURL}/>
                        )}}
                    }
                    <CardBody>
                        <CardTitle>
                            {props.plant.name}
                        </CardTitle>
                        <CardText>
                            {props.plant.description}
                        </CardText>
                    </CardBody>
                </Card>
            </Link>
            );
        }
}

export default PlantCard;