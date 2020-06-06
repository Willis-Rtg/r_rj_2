export default async (api, domparser, doc, mergeList, prodList) => {
  const eventCode = { one: 1, two: 2, present: 3, sale: 4 };
  console.log("seven 11");
  const axiosGet = async (pTab, more = 1) => {
    const { data } = await api.get(
      "http://www.7-eleven.co.kr/product/listMoreAjax.asp",
      {
        params: { intPageSize: 2000, pTab, intCurrPage: more },
      }
    );
    doc = domparser.parseFromString(data, "text/html");
    prodList = doc.querySelectorAll("body > li:not(.btn_more)");
    mergeList = [...mergeList, ...prodList];
    console.log("axiosGet -> mergeList", mergeList);
    if (more === 1) await axiosGet(pTab, null);
    return mergeList;
  };
  for (let event in eventCode) await axiosGet(eventCode[event]);
  console.log("mergeList", mergeList);
  return mergeList;
};
