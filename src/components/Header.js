import React from "react";
import styled from "styled-components";

const Conatiner = styled.div``;
const Text = styled.h3`
  marign:10px;
`;

const Header = () =>{
  return(
    <Conatiner>
      <Text>알뜰.편</Text>
    </Conatiner>
  )
}

export default Header;