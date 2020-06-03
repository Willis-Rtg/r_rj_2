import React, { useState } from "react";
import AdminPresenter from "./AdminPresenter";
import getConvenience from "../../api/api";

export default () => {
  const [data, setData] = useState({ list: [], brand: "" });

  const callApi = async (brand) => {
    console.log("App -> brand", brand);
    if (brand === 0) setData({ list: await getConvenience.cu(), brand: "cu" });
    if (brand === 1) setData({ list: await getConvenience.gs(), brand: "gs" });
    if (brand === 2)
      setData({ list: await getConvenience.seven(), brand: "seven" });
    if (brand === 3)
      setData({ list: await getConvenience.emart(), brand: "emart" });
  };

  return <AdminPresenter data={data} callApi={callApi} />;
};
