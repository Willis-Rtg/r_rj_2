export default async (api) => {
  console.log("start api");
  const { data } = await api.get(
    "http://gs25.gsretail.com/gscvs/ko/products/event-goods-search",
    {
      params: {
        pageSize: 3000,
      },
    }
  );
  // console.log("getGs -> gsProducts", JSON.parse(data));
  const { results } = JSON.parse(data);
  return results;
};
