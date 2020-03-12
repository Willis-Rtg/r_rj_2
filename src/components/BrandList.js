import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Cu from "../assets/images/Cu";
import Gs from "../assets/images/Gs";
import Seven from "../assets/images/Seven";
import Emart from "../assets/images/Emart";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 18.5px;
`;
const Brand = styled.div`
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;

const BrandList = ({ Brands }) => (
  <Container>
    {Brands?.length > 0
      ? Brands.map((Brand, index) => <Brand key={index}>{Brand}</Brand>)
      : null}
  </Container>
);

BrandList.propTypes = {
  Brands: PropTypes.array
};

export default BrandList;
