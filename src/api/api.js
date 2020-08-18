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

const getConvenience = {
  cu: async () => await cu(api, domparser, doc, mergeList, prodList),
  gs: async () => await gs(api),
  seven: async () => await seven(api, domparser, doc, mergeList, prodList),
  emart: async () => await emart(api, domparser, doc, mergeList, prodList),
};

export default getConvenience;
