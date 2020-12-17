import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Alert from 'react-bootstrap/Alert';
import { Collapse } from 'reactstrap';





function Guide(props) {
    function ControlledCarousel() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (
            <div className="container mt-3">

            
                <div className="row row-content">
                    <Collapse isOpen={isOpen}>
                        <div className="container" id="plant-carousel">
                            <Carousel>
                                <div className="carousel-inner">
                                    <Carousel.Item className="rounded-bottom active">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="carousel-text">Etiam id porttitor velit. Curabitur leo tellus, feugiat sed imperdiet sit amet, tincidunt vitae diam. Sed aliquet velit nibh, eu consectetur dui efficitur nec. Donec neque nisi, auctor sed sagittis quis, fermentum nec tortor. Cras vehicula nunc lacinia fermentum interdum. Suspendisse dui erat, mattis id sollicitudin eget <a className="text-decoration-none carousel-care-link">Care</a>, dapibus sed nulla. Praesent dolor nibh, elementum sed tellus vel, faucibus aliquet felis. Mauris ultricies molestie purus vel consequat <a className="text-decoration-none carousel-light-link">Light</a>. Phasellus in dolor elit. In lacinia eros ipsum, ut viverra sem iaculis vel. Phasellus laoreet eu mauris a placerat.</div>
                                            </div>
                                            <div className="col-md-5 plant-center">
                                                    <img src="img/clipart/houseplants.png" className="img-fluid float-md-right mr-md-3 mb-3 mb-md-0 mt-md-5 mt-lg-0" alt="bushy plant"/>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="rounded-bottom">
                                            <img src="img/clipart/plantcare.png" className="img-fluid float-sm-left align-middle ml-sm-3 mb-sm-5" alt="..."/>
                                            <div className="carousel-text-right">Duis blandit egestas eros, a eleifend ipsum blandit quis. Pellentesque rhoncus dui quam, id vestibulum orci tincidunt a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec orci urna. Suspendisse neque elit, aliquet at augue ultricies, ultrices faucibus velit. In convallis libero pretium, fringilla quam eget, cursus ipsum. Nam auctor porta ex sed mattis. <a className="text-decoration-none carousellinkhome">Back</a> Praesent sit amet nunc sagittis orci egestas tincidunt id a dui.</div>
                                    </Carousel.Item>
                                    <Carousel.Item className="rounded-bottom">
                                            <img src="img/clipart/plantlight.png" className="img-fluid float-sm-left align-middle ml-sm-3" alt="..."/>
                                            <div className="carousel-text-right">Duis blandit egestas eros, a eleifend ipsum blandit quis. Pellentesque rhoncus dui quam, id vestibulum orci tincidunt a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec orci urna. Suspendisse neque elit, aliquet at augue ultricies, ultrices faucibus velit. In convallis libero pretium, fringilla quam eget, cursus ipsum. Nam auctor porta ex sed mattis. <a className="text-decoration-none carousellinkhome">Back</a> Praesent sit amet nunc sagittis orci egestas tincidunt id a dui.</div>
                                    </Carousel.Item>
                                </div>
                            </Carousel>
                        </div>
                    </Collapse>
                </div>
            

            </div>
        )
    }
    return(<ControlledCarousel />);
}

export default Guide;