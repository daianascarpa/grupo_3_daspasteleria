import React from 'react';
//import PropTypes from 'prop-types';

function SmallCard(props){
    return(
        <div className="s-row shadow">
             <div> 
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className= 's'> {props.title}</div>
                            <div className="h">{props.quantity}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${props.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

// SmallCard.defaultProps = {
//     title: 'No Title',
//     color: 'success',
//     cuantity: 'No cuatity',
//     icon: 'fa-clipboard-list'
// }

/* PROPTYPES */

// SmallCard.propTypes = {
//     atritutes: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         color: PropTypes.string.isRequired,
//         cuantity: PropTypes.oneOfType([
//             PropTypes.string,
//             PropTypes.number
//         ]).isRequired,
//         icon: PropTypes.string.isRequired
//     })
// }



export default SmallCard;