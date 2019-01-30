import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import CustomerSearchForm, { validate } from "./customerSearchForm";

const CustomerSearchReduxForm = reduxForm({
  validate,
  form: "CustomerSearchForm",
  destroyOnUnmount: true
})(CustomerSearchForm);

const mapStateToProps = (state) => {
  return {
    hello: state.booksReducer,
  };
}

export default connect(mapStateToProps, null)(CustomerSearchReduxForm);