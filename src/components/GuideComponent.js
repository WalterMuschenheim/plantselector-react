import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Alert from 'react-bootstrap/Alert';
import { Collapse, Button } from 'reactstrap';





function Guide(props) {
    const [status, setStatus] = useState('Closed');
  
    const onEntering = () => setStatus('Opening...');
  
    const onEntered = () => setStatus('Opened');
  
    const onExiting = () => setStatus('Closing...');
  
    const onExited = () => setStatus('Closed');

    const guideRef = useRef(null);
  
    useEffect(() => {
        //get the height of the guide and make that the offset value
        let guideRect = guideRef.current.getBoundingClientRect();
        props.guideHeightHandler(guideRect.height)
        
     }, [status])
    

    function GuideContent(props) {
      
        return (
            <div className="container mt-3">
                <div className="row row-content">
                    <div className="container" id="plant-carousel">
                        <div>
                            {props.plant.name}
                        </div>
                        <div>
                            <img src={props.plant.imageURL}/>
                        </div>
                        <div>
                            {props.plant.longDescription}
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    return(
        <Collapse isOpen={props.collapse} onEntering={onEntering} onEntered={onEntered} onExiting={onExiting} onExited={onExited}>
            <div ref={guideRef}>
                <GuideContent plant={props.plant}/>
            </div> 
        </Collapse>);
}

export default Guide;