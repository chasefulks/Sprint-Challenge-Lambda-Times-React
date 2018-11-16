import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tab, index) => (
          <Tab
            key={index}
            selectTabHandler={props.selectTabHandler}
            selectTab={props.selectedTab}
            tab={tab}
          />
        ))}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.PropTypes = {
  tabs: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};
export default Tabs;
