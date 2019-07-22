import React from "react";

const ErrorPage = props => {
  console.log(props.location.state, "helawrkfjiaoegkmk");
  // console.log(this.state, this);
  console.log(props);

  return (
    <div>
      {" "}
      {props.location.state.err === 400 ? (
        <h1>Error 400: bad request, please enter a valid URL</h1>
      ) : (
        <h1>Error 404: page not found</h1>
      )}
      <p>
        Please check the URL is correct or follow the link to go back to the
        homepage
      </p>
    </div>
  );
};

export default ErrorPage;
