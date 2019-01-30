import React from "react";
import { Heading } from "@telusdigital/tds";
import CustomerSearchFormContainer from "../customerSearchForm/customerSearchFormContainer";

class LoginPage extends React.PureComponent {
  render() {
    return (
      <div className="container bg-div bg-div-grey pt-3 ">
        <div className="row">
          <div className="col-3">
            <div className="pb-3">
              <Heading level="h2">Welcome To Shashank's Library</Heading>
            </div>
            <CustomerSearchFormContainer />
          </div>
        </div>
      </div>
    );
  }
};

export default LoginPage;