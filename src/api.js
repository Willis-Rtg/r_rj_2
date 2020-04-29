import Axios from "axios";

const api = Axios.create();
let domparser = new DOMParser();
let mergeProducts = [];

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
};

const getSeven11 = async () => {
  let doc;
  let mergeList = [];
  let prodList;
  const eventCode = { one: 1, two: 2, present: 3, sale: 4 };

  const axiosGet = async (pTab, more = 1) => {
    const { data } = await api.get(
      "http://www.7-eleven.co.kr//product/listMoreAjax.asp",
      {
        params: { intPageSize: 2000, pTab, intCurrPage: more },
      }
    );
    doc = domparser.parseFromString(data, "text/html");
    prodList = doc.querySelectorAll("body > li:not(.btn_more)");
    mergeList = [...mergeList, ...prodList];
    if (more === 1) await axiosGet(pTab, null);
    return mergeList;
  };
  for (let event in eventCode) await axiosGet(eventCode[event]);
  return mergeList;
};

const getEmart = async () => {
  console.log("getEmart");
  let doc;
  const { data } = await api.get(
    "https://www.emart24.co.kr/product/eventProduct.asp",
    {
      params: { productCategory: null, cpage: 1 },
    }
  );
  doc = domparser.parseFromString(data, "text/html");
  const list = doc.querySelectorAll(".categoryListNew > li");
  console.log("getEmart -> list", list);
};

const getConvenience = {
  getCu,
  getGs,
  getSeven11,
  getEmart,
};

export default getConvenience;
