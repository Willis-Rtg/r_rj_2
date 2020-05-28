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
const AllEtc = styled.div`
  font-size: 22px;
  text-align: center;
  width: 65px;
`;

const Category = ({ CategoryIcons }) => (
  <Container>
    <AllEtc>All</AllEtc>
    {CategoryIcons?.length > 0
      ? CategoryIcons.map((Type, index) => <Type key={index}></Type>)
      : null}
    <AllEtc>Etc.</AllEtc>
  </Container>
);

Category.propTypes = {
  CategoryIcons: PropTypes.array,
};

export default Category;
