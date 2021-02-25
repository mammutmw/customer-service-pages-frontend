import React from 'react';
import ContactCard from '../contactCard/ContactCard';
import "./ContactCardExtra.scss"
import imgSVG from "../../../public/assets/img/rectangle.svg"

const ContactCardExtra = () => {
    const dummyData = {
        callUsTitle1: "Availability in store",
        callUsDescriptionA: "Go to the product you are interested either by searching for the article number or browsing the categories",
        callUsDescriptionB: "Select Check in-store stock to select your favorite store, or select any other store to see if it's available there. Remember a product can be in stock but still not available for you to purchase, for instance if a product is picked by another customer but yet not sold.",
        callUsDescriptionC: "The stock availability is updated every 8 minutes.",
        callUsTitle2: "Availability for purchasing online",
        callUsDescription: "to check online availability go the product page of the product you are interested in. To see if that product is available for Home delivery, add the product to your cart and enter your zipcode."
    }
    return (
        <div className="extra-styles">
            <ContactCard
                img={imgSVG}
                callUsTitle1={dummyData.callUsTitle1}
                callUsTitle2={dummyData.callUsTitle2}
                callUsDescriptionA={dummyData.callUsDescriptionA}
                callUsDescriptionB={dummyData.callUsDescriptionB}
                callUsDescriptionC={dummyData.callUsDescriptionC}
                CallUsAvailable=""
                callUsDescription={dummyData.callUsDescription}
            />
        </div>

    )
}

export default ContactCardExtra;
