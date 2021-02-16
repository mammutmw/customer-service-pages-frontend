// Modules
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Headline from "../../components/headline/Headline";
import BCrumb from "../../components/Bcrumb/BCrumb";
import { selectPages } from "../../store/selectors";
import { ROUTE_GET_HELP } from "../../constants/routes";
const Home = () => {
  const pages = useSelector(selectPages);
  return (
    <Layout>
      <BCrumb />

      <Headline
        title="We are here to help"
        description="Choose a topic and we'll find you the best solution. Connect by phone, chat, email, and more."
      />

      {pages.map((topic) => (
        <div key={topic.id}>
          <h4>
            <Link to={`${ROUTE_GET_HELP}?topic=${topic.id}`}>
              {topic.topicHeadline}
            </Link>
          </h4>
          <p>{topic.topicBody}</p>
        </div>
      ))}

      <br />
      <br />
      <br />
      <a href="/nl/nl/customer-service/contact-us/get-help">
        <p>Contact us component</p>
      </a>
    </Layout>
  );
};
export default Home;
