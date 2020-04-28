import Axios from "axios";

const api = Axios.create();
let domparser = new DOMParser();
let mergeProducts = new Array();

const getCu = async (pageIndex = 1) => {
  await Axios.get("http://cu.bgfretail.com/event/plusAjax.do", {
    params: { pageIndex, listType: 1 },
  }).then(({ data }) => {
    let doc = domparser.parseFromString(data, "text/html");
    let products = doc.querySelectorAll("body li");
    mergeProducts = [...mergeProducts, ...products];
    console.log("getCu -> products", mergeProducts);
    if (!products.length) {
      console.log("done");
    }
    // console.log("getCu -> pageIndex", pageIndex);
    getCu(++pageIndex);
  });
  return mergeProducts;
};

const getGs = async () => {
  const { data } = await api.get(
    "http://gs25.gsretail.com/gscvs/ko/products/event-goods-search",
    {
      params: {
        pageSize: 2000,
      },
    }
  );
  console.log("getGs -> gsProducts", JSON.parse(data));
  const { results } = JSON.parse(data);
  return results;

  // await Axios.get(
  //   "http://gs25.gsretail.com/gscvs/ko/products/event-goods-search",
  //   {
  //     params: {
  //       pageSize: 2000,
  //     },
  //   }
  // ).then(({ data }) => {
  //   const { results } = JSON.parse(data);
  //   console.log("getGs -> results", results);
  //   return results;
  // });
};

const getConvenience = {
  getCu,
  getGs,
};

export default getConvenience;
