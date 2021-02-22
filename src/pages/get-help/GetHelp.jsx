// Modules
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import BCrumb from "../../components/Bcrumb/BCrumb";
import Headline from "../../components/headline/Headline";
import StatusOrder from "../../components/statusOrder/StatusOrder";
import Topic from "../../components/topic/Topic";

import { selectPages, selectRecomendedTopics } from "./../../store/selectors";
import { ROUTE_GET_SUPPORT } from "../../constants/routes";
import { SET_RECOMENDED_TOPICS } from "../../store/actions";

//styles
import "./GetHelp.scss"

const GetHelp = ({ location }) => {
  const [selectedTopicDetails, setSelectedTopicDetails] = useState({});

  const dispatch = useDispatch();

  // TODO:Replace mock data with real data from CMS
  const fetchData = {
    title: "Get help with Services & delivery",
    description:
      "Choose a topic and we’ll find you the best solution. Connect by phone, chat, email, and more.",
    recommended: "Recommended",
    heading: "The status of your order directly on IKEA",
    orderDescription:
      "Did you know you can track your order status directly on IKEA web? Depending on the status of your order you can change delivery date, add services or cancel order."
  };

  const pages = useSelector(selectPages);
  // Recommended topics of the current selected topic
  const recomendedTopics = useSelector(selectRecomendedTopics);

  const suggestedTopicCheck = location.search.split("=")[0];
  let selectedTopicId = location.search.split("=")[1];

  useEffect(() => {
    // Check if the selected id is from a topic or a recomended topic
    // options: 1) topic  2) suggestedTopic
    const check = suggestedTopicCheck.includes("suggestedTopic");
    setSelectedTopicDetails(pages.find(({ id }) => id === selectedTopicId));
    const subTopics = selectedTopicDetails.hasOwnProperty("topics")
      ? selectedTopicDetails.topics
      : null;
    if (subTopics) {
      // Store topics of the current selected topic to redux store to reuse when
      // user clicks on the recomended topic
      dispatch({ type: SET_RECOMENDED_TOPICS, payload: subTopics[0] });
    } else {
      dispatch({ type: SET_RECOMENDED_TOPICS, payload: [] });
    }

    if (check) {
      setSelectedTopicDetails(recomendedTopics);
    }
  }, [selectedTopicDetails, location.search]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout>
      <BCrumb />
      <Headline
        title={selectedTopicDetails.headline}
        description={selectedTopicDetails.body}
      />
      <StatusOrder
        recommended={fetchData.recommended}
        heading={fetchData.heading}
        orderDescription={fetchData.orderDescription}
      />

      <br />
      <br />
      <br />
      {selectedTopicDetails.topics
        ? <div className="container">
          {
            selectedTopicDetails.topics.map((suggestedTopic) => (
              <div key={suggestedTopic.id}>

                <Link to={`${ROUTE_GET_SUPPORT}?suggestedTopic=${suggestedTopic.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }} >
                  {
                    <Topic
                      label={suggestedTopic.topicHeadline}
                      caption={suggestedTopic.topicBody}

                    />
                  }
                </Link>
              </div>
            ))
          }
        </div>
        : ""}
    </Layout>
  );
};
export default withRouter(GetHelp);
