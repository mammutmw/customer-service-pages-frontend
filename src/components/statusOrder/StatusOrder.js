//Modules
import "./StatusOrder.scss";
import React from 'react';
//Button 
import "@ingka/svg-icon/style.scss";
import "@ingka/button/style.scss";
import "@ingka/focus/style.scss";
import Button from "@ingka/button";
import Recommended from "../recommended/Recommended";

const StatusOrder = ({heading, orderDescription}) => {
    return (
        <div className="status-order">
            <Recommended />
            <h2 className="status-order__heading">{heading}</h2>
            <p className="status-order__description">{orderDescription}</p>
            <Button type="primary" className="status-order__btn">Track and manage order</Button>
        </div>

    )   
}

export default StatusOrder;
