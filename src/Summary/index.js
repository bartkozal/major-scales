import React from "react";
import { connect } from "react-redux";
import Summary from "./Summary";

const SummaryContainer = ({ score }) => <Summary score={score} />;

const mapStateToProps = ({ score }) => ({ score });

export default connect(mapStateToProps)(SummaryContainer);
