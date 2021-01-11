import React, { useState, useEffect, useRef } from 'react';
import { Collapse, Popover, UncontrolledPopover, PopoverBody, PopoverHeader } from 'reactstrap';
import { Router, Switch, Route, Redirect, useParams } from 'react-router-dom';





function Guide(props) {
    const [status, setStatus] = useState('Closed');

    const [currentPlant, setPlant] = useState(null);

    const onPlantChange = (plant) => setPlant(plant);
  
    const onEntering = () => setStatus('Opening...');
  
    const onEntered = () => setStatus('Opened');
  
    const onExiting = () => setStatus('Closing...');
  
    const onExited = () => setStatus('Closed');

    const guideRef = useRef(null);

    useEffect(() => {
            //get the height of the guide and make that the offset value
            let guideRect = guideRef.current.getBoundingClientRect();
            props.updateGuideHeight(guideRect.height);
        }, [status, currentPlant])
    

    function GuideContent(props) {

        useEffect(() => {
            onPlantChange(props.plant);
        }, [props.plant])

        const PopoverItem = (props) => {

            const { position, topic, plant } = props;

            const [popoverOpen, setPopoverOpen] = useState(false);

            const toggle = () => setPopoverOpen(!popoverOpen);

            return(
                <div class={"modal-popover " + position}>
                    <a id={"Popover-" + position} role="button" ></a>
                    <Popover trigger="hover" placement="right" isOpen={popoverOpen} target={"Popover-" + position} toggle={toggle}>
                        <PopoverHeader>{topic}</PopoverHeader>
                        <PopoverBody>{plant[`${topic}`]}</PopoverBody>
                    </Popover>
                </div>
            )
        }

        const popovers = [
            {
                position : "top",
                topic : "light"
            },
            {
                position : "middle",
                topic : "height"
            },
            {
                position : "bottom",
                topic : "care"
            }
        ]

        const InnerContent = () => {
                if (props.plant.imageURL) {
                    return(
                        <div className="row row-content">
                            <div className="col-md-4">
                                {popovers.map((popover) => {return(<PopoverItem position={popover.position} topic={popover.topic} plant={props.plant}/>)})}
                                <div id="modal-image-container">
                                    <img src={props.plant.imageURL}/>
                                </div>
                            </div>


                          
                            <div className="guide-text col-md-8">
                                {props.plant.longDescription}
                            </div>
                        </div>
                    )
                } else {
                    return(
                        <div className="row row-content">
                            <div className="guide-text col-12">
                                {props.plant.longDescription}
                            </div>
                        </div>
                )
            }
        }
      
        return (
                <div className="container guide" id="plant-guide">
                    <div className="container guide-item">
                            <div className="row">
                                <div className="col-12">
                                    <h4>{props.plant.name}</h4>
                                </div>
                            </div>
                            <InnerContent/>
                    </div>
                </div>
        )
    }

    function SinglePlantGuide(props) {
        let { plantName } = useParams();
        return(
                <GuideContent  updateGuideHeight={props.updateGuideHeight} collapse={props.collapse} plant={props.plants.filter((plant) => plant.name === `${plantName}`)[0]} />
        )
    }

    return(
            <Collapse isOpen={props.collapse} onEntering={onEntering} onEntered={onEntered} onExiting={onExiting} onExited={onExited}>
                <div ref={guideRef}>
                    <Switch>
                        <Route path="/:plantName">
                            <SinglePlantGuide updateGuideHeight={props.updateGuideHeight} collapse={props.collapse} plants={props.plants}/>
                        </Route>
                        <Redirect to="Light"/>
                    </Switch>
                </div>
            </Collapse>
        );
}

export default Guide;