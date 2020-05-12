import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = (props) => {
  const { additionalPrice, car, additionalFeatures } = props;
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  //values pulled here from store into state
  const { additionalPrice, car, additionalFeatures } = state;
  return { additionalPrice, car, additionalFeatures };
};

//values passed from store into App props
export default connect(mapStateToProps, {})(App);
