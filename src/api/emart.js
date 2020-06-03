export default async (api, domparser, doc, mergeList, prodList) => {
  const cpage = 1;
  const axiosGet = async (cpage) => {
    const { data } = await api.get(
      "https://www.emart24.co.kr/product/eventProduct.asp",
      {
        params: { cpage },
      }
    );
    doc = domparser.parseFromString(data, "text/html");
    prodList = doc.querySelectorAll(".categoryListNew > li");
    mergeList = [...mergeList, ...prodList];
    if (prodList[0].getAttribute("class") === "nodata") {
      return mergeList;
    } else await axiosGet(++cpage);
  };
  await axiosGet(cpage);
  return mergeList;
};
