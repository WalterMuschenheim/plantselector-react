import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import React from 'react';


function PlantCard(props) {

    const MaybeImg = () => {
        if(props.plant.imageURL) {return(<CardImg src={props.plant.imageURL}/>)} else {return null}}

    if(props.plantFilter(props.plant)) {
        return(
            <Link to={`/${props.plant.name}`}>
                <Card className={!props.plant.imageURL ? "explainer" : ""} onClick={() => {if (!props.collapse) {
                props.collapseHandler();
            }}}>
                    <MaybeImg/>
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
        } else {
            return null;
        }
}

export default PlantCard;