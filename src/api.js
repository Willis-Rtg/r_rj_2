import Axios from "axios";

const api = Axios.create();
let domparser = new DOMParser();
let doc;
let mergeList = [];
let prodList;

const getCu = async (pageIndex = 20) => {
  const { data } = await api.get("http://cu.bgfretail.com/event/plusAjax.do", {
    params: { pageIndex, listType: 1 },
  });
  doc = domparser.parseFromString(data, "text/html");
  prodList = doc.querySelectorAll("body li");
  console.log("doc", doc);
  console.log("prodList", prodList);
  console.log("prodList.length", prodList.length);
  mergeList = [...mergeList, ...prodList];
  if (!prodList.length) {
    console.log("done");
    console.log("mergeList", mergeList);
    return mergeList;
  } else {
    await getCu(++pageIndex);
  }
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
  const axiosGet = async () => {
    const { data } = await api.get(
      "https://www.emart24.co.kr/product/eventProduct.asp",
      {
        params: { productCategory: 1, cpage: 1 },
      }
    );
    doc = domparser.parseFromString(data, "text/html");
    const list = doc.querySelectorAll(".categoryListNew > li");
    console.log("getEmart -> doc", doc);
    console.log("getEmart -> list", list);
    return data;
  };
};

const getConvenience = {
  getCu,
  getGs,
  getSeven11,
  getEmart,
};

export default getConvenience;
