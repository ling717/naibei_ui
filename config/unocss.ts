import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const color = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];
const iconlist = [
    "search",
    "edit",
    "check",
    "message",
    "star-off",
    "delete",
    "add",
    "share",
]
const safelist = [
    ...color.map((v)=>`bg-${v}-500`),
    ...color.map((v)=>`hover:bg-${v}-700`),
     ...iconlist.map((v)=>`i-ic-baseline-${v}`)
    
]
export default()=>
    Unocss({
        safelist,
        presets :[presetAttributify(),presetUno(),presetIcons()]
    })
