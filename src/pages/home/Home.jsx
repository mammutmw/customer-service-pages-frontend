// Modules
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Headline from "../../components/headline/Headline";
import BCrumb from "../../components/Bcrumb/BCrumb";
import { selectPages } from "../../store/selectors";
import { ROUTE_GET_HELP } from "../../constants/routes";
import Topic from "../../components/topic/Topic";

//styles
import "./Home.scss"

const Home = () => {
  //raw data - Need to remove headline data
  const pages = useSelector(selectPages);

  //Just "headline" data (This data is used in Headline component)
  const headlineData = pages.filter(element => element.id === "2vO2HX5P3SmKPBXyhBuOCl")
  //Discarding Other"
  const topicsData = pages.filter(element => element.id !== "2vO2HX5P3SmKPBXyhBuOCl" && element.headline !== "Other")
 //just "Other" card
  const lastItem = pages.filter(element => element.headline === "Other")
  //Pushing the "Other" card at the end
  topicsData.push(...lastItem)
  return (
    <Layout>
      <BCrumb />

      <Headline
        title={headlineData[0].headline}
        description={headlineData[0].body}
      />
      {/* If the container has 5,6 or 9 topics then the container structure should be different */}
      {
        (topicsData.length !== 5) &&
        (topicsData.length !== 6) &&
        (topicsData.length !== 9) ? 
        // container for topics starts here
        <div className="topics-container">
        {topicsData.map((topic) => (
          <div key={topic.id}>
            <Link to={`${ROUTE_GET_HELP}?topic=${topic.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }} >
              {
                <Topic
                  label={topic.topicHeadline}
                  caption={topic.topicBody}

                />
              }

            </Link>
          </div>
        ))}
      </div>
      :
      <div className="topics-container-additional">
      {topicsData.map((topic) => (
        <div key={topic.id}>
          <Link to={`${ROUTE_GET_HELP}?topic=${topic.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }} >
            {
              <Topic
                label={topic.topicHeadline} 
                caption={topic.topicBody}
              />
            }

          </Link>
        </div>
      ))}
    </div>
      }

      <br />
      <br />
      <br />
    </Layout>
  );
};
export default Home;
