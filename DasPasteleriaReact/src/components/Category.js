import React from 'react';

function Category(props){
    return(
        <React.Fragment>
            <div className="c-wrapper">
                <div className="c-title">
                    {props.title}
                </div>
                <div className="c-quantity">
                    {props.quantity}
                </div>
            </div>
        </React.Fragment>
    )
}
export default Category;