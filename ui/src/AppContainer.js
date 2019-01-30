import { connect } from "react-redux";

import App from "./App";

const mapStateToProps = (state) => {
  return {
    // hello: state.booksReducer
  };
}

export default connect(mapStateToProps, null)(App);