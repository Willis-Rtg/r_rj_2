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
  gs: () => gs(api),
  seven: () => seven(api, domparser, doc, mergeList, prodList),
  emart: () => emart(api, domparser, doc, mergeList, prodList),
};

export default getConvenience;
