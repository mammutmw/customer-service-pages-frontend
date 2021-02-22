// Modules
import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import BCrumb from "../../components/Bcrumb/BCrumb";
import Headline from "../../components/headline/Headline";
import ContactCard from "../../components/contactCard/ContactCard";
import imgSVG from "../../../public/assets/img/rectangle.svg"

import { selectRecomendedTopics } from "./../../store/selectors";

const GetSupport = () => {
  const recomendedTopic = useSelector(selectRecomendedTopics);
  const fetchData = {
    recommended: "Recommended",
    chatTitle: "Chat with a Customer Service representative",
    chatDescription:
      "Chat with a Customer Service Representative. Please have your order number available",
    chatEstimatedTime: "Estimated waiting time, less than 5 minutes.",
    callUsTitle: "Call us",
    callUsDescription:
      "The best way for you to contact us is to call our Customer service and they will help you as fast as possible. To help us out please have your order number",
    orderNumber: "order number",
    CallUsAvailable: "available.",
    callUsEstimatedTime: "Estimated waiting time. 20 minutes.",
    callUsOpenToday: "Open today, 08:00-22:00",
    callUsNote:
      "* You only pay your usual calling costs for this telephone number. The 0900 number cannot be reached from abroad. In that case, call: 0031 - 50 316 8772"
  };
  return (
    <Layout>
      <BCrumb />

      <Headline
        title={recomendedTopic.headline}
        description={recomendedTopic.body}
      />
      {recomendedTopic.contactMethods
        ? recomendedTopic.contactMethods.map((item, index) => (
          <div key={item.id}>
            <ContactCard
              callUsTitle={item.headline}
              callUsDescription={item.body}
              contactType={item.type}
              index={index}
              callUsOpenToday={fetchData.callUsOpenToday}
              callUsEstimatedTime={fetchData.chatEstimatedTime}
              callUsNote={fetchData.callUsNote}
              orderNumber={fetchData.orderNumber}
              CallUsAvailable={fetchData.CallUsAvailable}
              img= {imgSVG}
            />
            </div>
          ))
        : ""}
    </Layout>
  );
};

export default GetSupport;
