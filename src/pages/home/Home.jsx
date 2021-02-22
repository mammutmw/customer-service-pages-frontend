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

  //Just "headline" data
  const headlineData = pages.filter(element => element.id === "2vO2HX5P3SmKPBXyhBuOCl")
  //Discarding "headline" and "Other"
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
      <div className="container">
        {topicsData.map((topic) => (
          <>
            <Link to={`${ROUTE_GET_HELP}?topic=${topic.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }} >
              {
                <Topic key={topic.id}
                  label={topic.topicHeadline}
                  caption={topic.topicBody}

                />
              }

            </Link>

          </>
        ))}

      </div>
      <br />
      <br />
      <br />
    </Layout>
  );
};
export default Home;
