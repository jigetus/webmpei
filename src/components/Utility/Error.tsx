import React from "react";

const MyError = (props: any) => {
  return (
    <div className={"loadercontainer"}>
      <span style={{ fontSize: "100px" }}>&#128533;</span>
      <h4>{props.errormessage}</h4>
    </div>
  );
};

export default MyError;
