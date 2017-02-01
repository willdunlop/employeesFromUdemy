import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return(
    <div>Hello</div>
  );
};

//After meteor loads in the browser, render app to dom
Meteor.startup(() => {
  //React render call
  ReactDOM.render(<App />, document.querySelector('.container'));
});
