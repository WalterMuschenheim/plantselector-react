import React from 'react';


/*function FilterToast(props) {
    const ToastItems = props.criteria.map((criterium) =>  {
        return(
            <p className="toast-p" id={test} data-critval={test}><a className="text-decoration-none">{test}</a></p>
            )
    })
    

    return(
        <div role="alert" aria-live="assertive" aria-atomic="true" className="toast hide" id="toast-height" data-autohide="false" data-critclear="height">
            <div className="toast-header">
                <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="bisque"></rect></svg>
                <strong className="mr-auto">Height</strong>
                <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="toast-body" id="toast-body-height">
            {ToastItems}
            </div>
        </div>
    )
}*/

function Toasts(props) {
    /*return(
                <div className="d-none d-lg-flex" style="max-width: 200px;">
                    <div id="toastcontainer">
                        
                       { function() {
                            crittype = '';
                            if (criteria.find(function(criterium) {return (criterium[0] == crittype)}).length != 0) {
                                return(
                                    <FilterToast criteria={critera.filter(function(criterium) {return (criterium[0] == crittype)})}/>
                                )
                                }
                            }
                       }
                    </div>
                </div>
    )*/
    return(<div>empty</div>)
}

export default Toasts;