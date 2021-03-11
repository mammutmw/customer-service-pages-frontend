import React, { Fragment } from 'react';
import Angry from "../../../public/assets/img/smiley_angry_gray.svg"
import Annoyed from "../../../public/assets/img/smiley_annoyed_gray.svg"
import Happy from "../../../public/assets/img/smiley_happy_gray.svg"
import Neutral from "../../../public/assets/img/smiley_neutral_gray.svg"
import VeryHappy from "../../../public/assets/img/smiley_very_happy_gray.svg"


//styles
import "./Survey.scss";

const Survey = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="container__title">
                    <h4>How was your experience today?</h4>
                </div>
                <div className="container__images">
                    <img src={Angry} alt="Angry" className="container__images__angry" />
                    <img src={Annoyed} alt="Annoyed" className="container__images__annoyed" />
                    <img src={Neutral} alt="Neutral" className="container__images__neutral" />
                    <img src={Happy} alt="Happy" className="container__images__happy" />
                    <img src={VeryHappy} alt="Very Happy" className="container__images__very-happy" />
                </div>
            </div>
        </Fragment>
    )


}

export default Survey;
