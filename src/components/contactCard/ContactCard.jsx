import React, { Fragment } from "react";
import "./ContactCard.scss";

//Button
import "@ingka/svg-icon/style.scss";
import "@ingka/button/style.scss";
import "@ingka/focus/style.scss";
import Button from "@ingka/button";

function ContactCad({
  callUsTitle,
  callUsDescription,
  callUsEstimatedTime,
  CallUsAvailable,
  orderNumber,
  callUsOpenToday,
  callUsNote,
  img
}) {
  return (
    <Fragment>
      <div className="card">
        {/* h2 for tablet and mobile */}
        <h2 className="card__title-small">{callUsTitle}</h2>
        <img src={img} alt="img" />

        <div className="card__right-side">
          {/* h2 for desktop */}
          <h2 className="card__title">{callUsTitle}</h2>
          <p className="card__description">
            {`${callUsDescription}`}{" "}
            <span className="card__order-number">{orderNumber}</span>{" "}
            {`${CallUsAvailable}`}
          </p>
          <p className="card__estimated-time">{callUsEstimatedTime}</p>
          <Button className="card__button" type="primary">
            Call us
          </Button>
          <p className="card__openToday">{callUsOpenToday}</p>
          <p className="card__note">{callUsNote}</p>
        </div>
      </div>
      <div className="separator" />
    </Fragment>
  );
}

export default ContactCad;
