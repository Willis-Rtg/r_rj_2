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

const BrandList = ({ BrandLogos, callApi }) => (
  <Container>
    {
      BrandLogos?.map((Brand, index) => 
      <Brand key={index} onClick={() => callApi(index)} />)
     }
  </Container>
);

BrandList.propTypes = {
  BrandLogos: PropTypes.array
};

export default BrandList;
