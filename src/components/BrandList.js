import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 18.5px;
`;

const BrandList = ({ Brands }) => (
  <Container>
    {Brands?.length > 0
      ? Brands.map((Brand, index) => <Brand key={index}></Brand>)
      : null}
  </Container>
);

BrandList.propTypes = {
  Brands: PropTypes.array
};

export default BrandList;
