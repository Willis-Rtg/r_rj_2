import React from "react";
import styled from "styled-components";
import Breakfast from "../assets/images/Breakfast";
import Icecream from "../assets/images/Icecream";
import Chip from "../assets/images/Chip";
import Lemonade from "../assets/images/Lemonade";
import Soap from "../assets/images/Soap";
import Tissue from "../assets/images/Tissue";
import Candy from "../assets/images/Candy";

const AllEtc = styled.div`
  font-size: 22px;
  text-align: center;
  width: 65px;
`;

export default [
  () => <AllEtc>All</AllEtc>,
  Breakfast,
  Icecream,
  Chip,
  Lemonade,
  Soap,
  Tissue,
  Candy,
  () => <AllEtc>Etc.</AllEtc>,
];
