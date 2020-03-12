import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  /* background-color: lightblue; */
`;
const Type = styled.div`
  justify-content: center;
  align-items: center;
  height: 42px;
  border-radius: 20px;
  /* border: 1px solid gray; */
`;

const Category = ({ Categories }) => (
  <Container>
    {Categories?.length > 0
      ? Categories.map((type, index) => <Type key={index}>{type}</Type>)
      : null}
  </Container>
);

Category.propTypes = {
  Categories: PropTypes.array
};

export default Category;
