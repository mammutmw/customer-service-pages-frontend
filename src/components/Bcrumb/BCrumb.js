// Modules
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_CURRENT_URL } from "../../store/actions/bcrumb";
import Hyperlink from "@ingka/hyperlink";
import { selectPathName } from "../../store/selectors";
import "./BCrumb.scss";

//@ingka
import Breadcrumb from "@ingka/breadcrumb";
import "@ingka/hyperlink/style.scss";
import "@ingka/focus/style.scss";
import "@ingka/breadcrumb/style.scss";

const BCrumb = ({ location }) => {
  const dispatch = useDispatch();
  const bcrumbPathName = useSelector(selectPathName);
  useEffect(() => {
    dispatch({ type: SET_CURRENT_URL, payload: location.pathname });
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Breadcrumb className="breadcrumb">
      {bcrumbPathName.map((item, index) => (
        <Hyperlink url={item.url} key={index}>
          <span className="breadcrumb__item">{item.location}</span>
        </Hyperlink>
      ))}
    </Breadcrumb>
  );
};

export default withRouter(BCrumb);
