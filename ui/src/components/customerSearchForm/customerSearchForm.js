import React from "react";
import { Box, Button, Paragraph } from "@telusdigital/tds";
import { Field } from "redux-form"
import InputTextField from "../reduxFormFields/inputTextField";

class CustomerSearchForm extends React.PureComponent {

  onSubmit(values) {
    console.log("Values", values);
  }
  
  renderInputForm() {
    const { handleSubmit, reset } = this.props;
    return(
      <form className="form-horizontal" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          id="username"
          name="Username"
          label="username"
          component={InputTextField}
        />
        <Box between={3}>
          <Button
            id="saveLogin"
            type="submit"
          >
            Submit
          </Button>
          <Button
            variant="secondary"
            id="clearLogin"
            type="button"
            onClick={reset}
          >
            Clear
          </Button>
        </Box>
      </form>
    );
  }
  
  render() {
    return(
      <div>
      <Paragraph>To get started, please enter your login credentials below</Paragraph>
        {
          this.renderInputForm()
        }
      </div>
    );
  }
}

export const validate = (values, props) => {
  const errors = {};
  const errorMessage = "Required";

  // returning no errors for now
  return [];
}

export default CustomerSearchForm;