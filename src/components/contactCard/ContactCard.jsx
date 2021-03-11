import React, { Fragment, useState, useEffect } from "react";
import "./ContactCard.scss";

//Button
import "@ingka/svg-icon/style.scss";
import "@ingka/button/style.scss";
import "@ingka/focus/style.scss";
import Button from "@ingka/button";
import Recommended from "../recommended/Recommended";

const ContactCard = ({
  callUsTitle,
  callUsDescription,
  callUsEstimatedTime,
  CallUsAvailable,
  orderNumber,
  callUsOpenToday,
  callUsNote,
  img,
  contactType,
  index,
  selfServiceHeadline,
  selfServiceContent0,
  selfServiceContent10,
  selfServiceContent11,
  selfServiceContent12,
  selfServiceButton,
  selfServiceID
}) => {
  // Hooks
  const [showNumber, setShowNumber] = useState("Show phone number");

  useEffect(() => {}, [selfServiceContent0]);

  return (
    <Fragment>
      <div className="card">
        {/* Recommended label on tablet and mobile */}
        <div className="card__label-small">
          {index === 0 && <Recommended />}
        </div>
        {/* h2 for tablet and mobile */}
        <h2 className="card__title-small">{callUsTitle}</h2>
        <img src={img} alt="img" />
        {/* selfServiceOption TITLE for Mobile */}
        {typeof index !== "number" && (
          <>
            <h2 className="card__title-small">{selfServiceHeadline}</h2>
          </>
        )}
        <div className="card__right-side">
          {/* Recommended label on Desktop */}
          <div className="card__label">{index === 0 && <Recommended />}</div>
          {/* h2 for desktop */}
          <h2 className="card__title">{callUsTitle}</h2>
          {/* selfServiceOption TITLE and Descriptions for Desktop */}
          {typeof index !== "number" && (
            <>
              <h2 className="card__title">{selfServiceHeadline}</h2>
              <p className="card__description">{`${selfServiceContent0}`}</p>
              <p className="card__description">{`${
                selfServiceContent10 +
                selfServiceContent11 +
                selfServiceContent12
              }`}</p>
            </>
          )}
          {/* These details should only appear on the contact method cards and no the selfServiceOption */}
          {typeof index === "number" && (
            <p className="card__description">
              {`${callUsDescription}`}{" "}
              <span className="card__order-number">{orderNumber}</span>{" "}
              {`${CallUsAvailable}`}
            </p>
          )}

          <p className="card__estimated-time">{callUsEstimatedTime}</p>
          {/* Button for Desktop and Tablet */}
          {index === 0 ? (
            <Button
              className="card__button-desktablet"
              type="primary"
              onClick={() => setShowNumber("1-800-555-444")}
            >
              {contactType === "telephone" ? (
                <a
                  href={`tel:${showNumber}`}
                  style={{ textDecoration: "none" }}
                >
                  {showNumber}
                </a>
              ) : (
                contactType
              )}
            </Button>
          ) : (
            <Button
              className="card__button-desktablet"
              type="secondary"
              onClick={() => setShowNumber("1-800-555-444")}
            >
              {contactType === "telephone" ? (
                <a
                  href={`tel:${showNumber}`}
                  style={{ textDecoration: "none" }}
                >
                  {showNumber}
                </a>
              ) : (
                contactType
              )}
            </Button>
          )}
          {/* Button for Mobile */}
          {index === 0 ? (
            <Button className="card__button-mobile" type="primary">
              {/* Right now phone number 1-800-555-444 is DUMMY data */}
              {contactType === "telephone" ? (
                <a href="tel:1-800-555-444" style={{ textDecoration: "none" }}>
                  1-800-555-444
                </a>
              ) : (
                contactType
              )}
            </Button>
          ) : (
            <Button className="card__button-mobile" type="secondary">
              {/* Right now phone number 1-800-555-444 is DUMMY data */}
              {contactType === "telephone" ? (
                <a href="tel:1-800-555-444" style={{ textDecoration: "none" }}>
                  1-800-555-444
                </a>
              ) : (
                contactType
              )}
            </Button>
          )}
          {/* Button for selfServiceOption */}
          {typeof index !== "number" && selfServiceButton && (
            <Button className="card__button-desktop" type="primary">
              {selfServiceButton}
            </Button>
          )}

          <p className="card__openToday">{callUsOpenToday}</p>
          <p className="card__note">{callUsNote}</p>
        </div>
      </div>
      <div className="separator" />
    </Fragment>
  );
};

export default ContactCard;
