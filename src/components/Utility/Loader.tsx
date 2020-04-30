import Loader from "react-loader-spinner";
import React from "react";

const MyLoader = () => (
  <div className={"loadercontainer"}>
    <Loader type="Triangle" color="#e2022e" height={250} width={250} />
    Загрузка...
  </div>
);

export default MyLoader;
