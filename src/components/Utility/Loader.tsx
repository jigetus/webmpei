import Loader from "react-loader-spinner";
import React from "react";

const MyLoader = () => (
  <div className={"loadercontainer"}>
    <Loader type="Audio" color="#e2022e" height={200} width={200} />
    Загрузка...
  </div>
);

export default MyLoader;
