// Modules
import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { pickAll, pick } from "ramda";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import BCrumb from "../../components/Bcrumb/BCrumb";
import Headline from "../../components/headline/Headline";
import ContactCard from "../../components/contactCard/ContactCard";
import imgSVG from "../../../public/assets/img/rectangle.svg";
import { selectRecomendedTopics } from "../../store/selectors";
import { ROUTE_PLAYGROUND } from "../../constants/routes";

//styles
import "./GetSupport.scss";

const GetSupport = () => {
  const [recommendedTopic, setRecommendedTopic] = useState(null);
  const topicsData = useSelector(selectRecomendedTopics);

  useEffect(() => {
    if (!recommendedTopic) {
      setRecommendedTopic(topicsData);
    }
  }, [recommendedTopic, topicsData]);

  const fetchData = {
    recommended: "Recommended",
    chatEstimatedTime: "Estimated waiting time, less than 5 minutes.",
    callUsEstimatedTime: "Estimated waiting time. 20 minutes.",
    callUsOpenToday: "Open today, 08:00-22:00",
    callUsNote:
      "* You only pay your usual calling costs for this telephone number. The 0900 number cannot be reached from abroad. In that case, call: 0031 - 50 316 8772"
  };
  return (
    <Layout>
      <BCrumb />
      {recommendedTopic && (
        <Fragment>
          <Headline
            title={recommendedTopic.headline}
            description={recommendedTopic.body}
          />
          {/* SelfService Option*/}
          {recommendedTopic.selfServiceOption ? (
            <div className="extra-styles" key={recommendedTopic.selfServiceOption.id}>
            <ContactCard
              selfServiceHeadline={recommendedTopic.selfServiceOption.headline}
              selfServiceContent0={
                recommendedTopic.selfServiceOption.body.content[0].content[0]
                  .value
              }
              selfServiceContent10={
                recommendedTopic.selfServiceOption.body.content[1].content[0]
                  .value
              }
              selfServiceContent11={
                recommendedTopic.selfServiceOption.body.content[1].content[1]
                  .content[0].value
              }
              selfServiceContent12={
                recommendedTopic.selfServiceOption.body.content[1].content[2]
                  .value
              }
              selfServiceButton={
                recommendedTopic.selfServiceOption.callToActionText
              }
              buttonAvailable={true}
              img={imgSVG}
            />
            </div>
          ) : (
            ""
          )}

          {/* Contact Cards */}
          {recommendedTopic.contactMethods
            ? recommendedTopic.contactMethods.map((item, index) => (
              <div key={item.id}>
                <ContactCard
                  key={item.id}
                  callUsTitle={item.headline}
                  callUsDescription={item.body.content[0].content[0].value}
                  orderNumber={
                    item.body.content[0].content[1].content[0].value
                  }
                  CallUsAvailable={item.body.content[0].content[2].value}
                  contactType={item.type}
                  index={index}
                  //Dummy props below
                  callUsOpenToday={fetchData.callUsOpenToday}
                  callUsEstimatedTime={fetchData.chatEstimatedTime}
                  callUsNote={fetchData.callUsNote}
                  img={imgSVG}
                />
              </div>
            ))
            : ""}
        </Fragment>
      )}
      <Link to={ROUTE_PLAYGROUND}>Survey</Link>
    </Layout>
  );
};

export default GetSupport;
