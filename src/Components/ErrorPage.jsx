import React from "react";

class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <h1>Error 404: page not found</h1>
        <p>
          Please check the URL is correct or follow the link to go back to the
          homepage
        </p>
      </div>
    );
  }
}

export default ErrorPage;
