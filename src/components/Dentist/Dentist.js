import React from 'react';
import './Dentist.css'

const Dentist = (props) => {
    console.log(props.dentist)
    const{name, img, Fraction} = props.dentist;
    return (
        <div>
            <div className ="col border gx-0 gy-5 dentist-part">
                    <div className="row align-items-center ">
                    <div className ="col-md-5">
                        <img src= {img} className ="img-fluid " alt="..."/>
                    </div>
                    <div className ="col-md-7  dentiat-body">
                        <div className ="card-body">
                            <h5 className ="card-title name-style">{name}</h5>
                            <p className ="card-text">{Fraction}</p>
                            
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Dentist;