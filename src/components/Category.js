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

const Category = ({ CategoryIcons }) => (
  <Container>
    {CategoryIcons?.length > 0
      ? CategoryIcons.map((Type, index) => <Type key={index}></Type>)
      : null}
  </Container>
);

Category.propTypes = {
  CategoryIcons: PropTypes.array
};

export default Category;
