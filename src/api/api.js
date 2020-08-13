import Axios from "axios";
import cu from "./cu";
import gs from "./gs";
import seven from "./seven";
import emart from "./emart";

const api = Axios.create();
let domparser = new DOMParser();
let doc;
let mergeList = [];
let prodList;

const getConvenience = (brand) => {
  if (brand === "cu")
    return async () => await cu(api, domparser, doc, mergeList, prodList);
  if (brand === "gs") return async () => await gs(api);
  if (brand === "seven")
    return async () => await seven(api, domparser, doc, mergeList, prodList);
  if (brand === "emart")
    return () => emart(api, domparser, doc, mergeList, prodList);
};

export default getConvenience;
