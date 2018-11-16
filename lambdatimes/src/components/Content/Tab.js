import React from 'react';
import PropTypes from 'prop-types';
const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <ChildTab notClassName={props.tab === props.selectedTab ? true : false} onClick={() => 
      props.selectTabHandler(props.tab)}>
       {props.tab.toUpperCase()}
       </ChildTab>
       );
      };
// Make sure you include PropTypes on your props.
Tab.Proptypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
}

export default Tab;
