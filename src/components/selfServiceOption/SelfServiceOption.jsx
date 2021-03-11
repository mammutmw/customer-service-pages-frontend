import React from "react";
import ContactCard from "../contactCard/ContactCard";
import "./SelfServiceOption.scss";
import imgSVG from "../../../public/assets/img/rectangle.svg";

const SelfServiceOption = ({
  selfServiceHeadline,
  selfServiceContent0,
  selfServiceContent10,
  selfServiceContent11,
  selfServiceContent12,
  selfServiceButton,
  selfServiceID
}) => {
  return (
    <div className="extra-styles">
      <ContactCard
        img={imgSVG}
        selfServiceHeadline={selfServiceHeadline}
        selfServiceContent0={selfServiceContent0}
        selfServiceContent10={selfServiceContent10}
        selfServiceContent11={selfServiceContent11}
        selfServiceContent12={selfServiceContent12}
        selfServiceButton={selfServiceButton}
        selfServiceID={selfServiceID}
      />
    </div>
  );
};

export default SelfServiceOption;
