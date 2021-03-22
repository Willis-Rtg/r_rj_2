import React from "react";
import styled from "styled-components";
import Product from "../Product";
import Loader from "../Loader";

const Container = styled.div`
  display: flex;
  flex-wrap: row;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
  width: 100%;
  padding-top: 20px;
`;
const ShowHide = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AdminBtns = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.div`
  cursor: pointer;
  padding: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const ProductListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const ProductList = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const SortedBrnad = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: space-around;
  max-height: 600px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  border: 1px dotted
    ${(props) =>
      props.selectedBrand === "cu"
        ? "#0be881"
        : props.selectedBrand === "gs"
        ? "#18dcff"
        : props.selectedBrand === "seven"
        ? "#ff4d4d"
        : props.selectedBrand === "emart"
        ? "#ffd32a"
        : null};
  border-radius: 10px;
`;
const SortedBrandTitle = styled.div`
  font-size: 0.75rem;
  width: 100%;
  text-align: center;
  color: ${(props) =>
    props.selectedBrand === "cu"
      ? "#0be881"
      : props.selectedBrand === "gs"
      ? "#18dcff"
      : props.selectedBrand === "seven"
      ? "#ff4d4d"
      : props.selectedBrand === "emart"
      ? "#ffd32a"
      : null};
`;
const SetCategory = styled.div`
  display: flex;
  flex-direction: column;
`;
const CategorySelect = styled.select`
  &:focus {
    border: 1px solid skyblue;
  }
`;
const ProductClass = styled.div``;
const ApiDatas = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

export default ({
  selectedBrands,
  insertData,
  deleteHandler,
  mode,
  apiData,
  products,
  sortedProd,
  productsLoading,
  edit,
  setEdit,
  editProducts,
}) => {
  let prodProps;
  const setProdProps = (name, img, event, price) => {
    prodProps = { name, img, event, price };
  };
  return (
    <Container>
      <ShowHide>
        {mode !== "USER" && (
          <AdminBtns>
            <div style={{ display: "flex" }}>
              <Button onClick={() => insertData()}>insert</Button>
            </div>
            <Button onClick={() => setEdit(!edit)}>
              {edit ? "edit mode" : "no eidt mode"}
            </Button>
            {edit && <Button onClick={() => editProducts()}> Edit </Button>}
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <p>Delete : </p>
              <Button onClick={() => deleteHandler()}>All</Button>
              <Button onClick={() => deleteHandler("cu")}>Cu</Button>
              <Button onClick={() => deleteHandler("gs")}>Gs</Button>
              <Button onClick={() => deleteHandler("seven")}>Seven</Button>
              <Button onClick={() => deleteHandler("emart")}>emart</Button>
            </div>
          </AdminBtns>
        )}
        {apiData?.loading && <Loader />}
      </ShowHide>
      <ProductListWrapper>
        <ProductList>
          {mode === "USER" &&
            selectedBrands.map((selectedBrand, index) => {
              return (
                <SortedBrnad key={index} selectedBrand={selectedBrand}>
                  <SortedBrandTitle selectedBrand={selectedBrand}>
                    {selectedBrand}
                  </SortedBrandTitle>
                  {products?.products
                    ?.filter((product) => product.brand === selectedBrand)
                    ?.map((product, index) => {
                      return (
                        <ProductClass className="product">
                          <Product {...product} key={index} />
                        </ProductClass>
                      );
                    })}
                </SortedBrnad>
              );
            })}
          {mode === "ADMIN" &&
            edit &&
            selectedBrands.map((selectedBrand, index) => {
              return (
                <SortedBrnad key={index} selectedBrand={selectedBrand}>
                  <SortedBrandTitle selectedBrand={selectedBrand}>
                    {selectedBrand}
                  </SortedBrandTitle>
                  {products?.products
                    ?.filter((product) => product.brand === selectedBrand)
                    ?.map((product, index) => {
                      return (
                        <SetCategory className="product">
                          <Product {...product} key={index} />
                          <CategorySelect className="category" tabIndex={0}>
                            <option value="FOOD">FOOD</option>
                            <option value="ICECREAM">ICECREAM</option>
                            <option value="COOKIE">COOKIE</option>
                            <option value="DRINK">DRINK</option>
                            <option value="WARSH">WARSH</option>
                            <option value="CLEAN">CLEAN</option>
                            <option value="CANDY">CANDY</option>
                            <option value="ETC">ETC</option>
                          </CategorySelect>
                        </SetCategory>
                      );
                    })}
                </SortedBrnad>
              );
            })}
          {mode === "ADMIN" && (
            <ApiDatas>
              {apiData?.data?.map((item, index) => {
                apiData.brand === "gs" &&
                  setProdProps(
                    item.goodsNm,
                    item.attFileNm,
                    item.eventTypeNm,
                    item.price
                  );
                apiData.brand === "cu" &&
                  setProdProps(
                    item.querySelector(".prodName a")?.textContent,
                    item.querySelector("img")?.getAttribute("src"),
                    item.querySelector("ul li")?.textContent,
                    item.querySelector(".prodPrice")?.textContent
                  );
                apiData.brand === "seven" &&
                  setProdProps(
                    item.querySelector(".name")?.textContent,
                    "https://7-eleven.co.kr" +
                      item.querySelector("img")?.getAttribute("src"),
                    item.querySelector(".tag_list_01")?.textContent,
                    item.querySelector(".price")?.textContent
                  );
                apiData.brand === "emart" &&
                  setProdProps(
                    item.querySelector(".productDiv")?.textContent,
                    "https://www.emart24.co.kr/" +
                      item
                        .querySelector(".productImg img")
                        ?.getAttribute("src"),
                    item
                      .querySelector(".lable img")
                      ?.getAttribute("alt")
                      .substr(0, 5),
                    item.querySelector(".price")?.textContent
                  );
                return (
                  <ProductClass className="product">
                    <Product key={index} {...prodProps} />
                  </ProductClass>
                );
              })}
            </ApiDatas>
          )}
        </ProductList>
      </ProductListWrapper>
    </Container>
  );
};
