//Modules
import "./StatusOrder.scss"
import React from 'react'
//Button 
import "@ingka/svg-icon/style.scss";
import "@ingka/button/style.scss";
import "@ingka/focus/style.scss";
import Button from "@ingka/button";

function StatusOrder({recommended, heading, orderDescription}) {
    return (
        <div className="status-order">
            <p className="status-order__recommended">{recommended}</p>
            <h2 className="status-order__heading">{heading}</h2>
            <p className="status-order__description">{orderDescription}</p>
            <Button type="primary" className="status-order__btn">Track and manage order</Button>
        </div>

    )   
}

export default StatusOrder
