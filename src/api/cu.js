export default async (api, domparser, doc, mergeList, prodList) => {
  const pageIndex = 1;
  const axiosGet = async (pageIndex) => {
    const { data } = await api.get(
      "http://cu.bgfretail.com/event/plusAjax.do",
      {
        params: { pageIndex, listType: 1 },
      }
    );
    doc = domparser.parseFromString(data, "text/html");
    prodList = doc.querySelectorAll("body li");
    mergeList = [...mergeList, ...prodList];
    if (!prodList.length) {
      return mergeList;
    } else {
      await axiosGet(++pageIndex);
    }
  };
  await axiosGet(pageIndex);
  return mergeList;
};
