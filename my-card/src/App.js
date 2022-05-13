import React from "react";
import Card from "./components/card";

const products = [
  {
    id : 1,
    Title : "titleOne",
    Price : "numRs",
    Quantity : 2,
    Size : "size",
    Description : "Description in detail",
    image : "Url"
  },

  {
    id : 1,
    Title : "titleTwo",
    Price : "numRs",
    Quantity : 3,
    Size : "sizePlus",
    Description : "Description in detail",
    image : "Url"
  },

  {
    id : 1,
    Title : "titleThree",
    Price : "numRs",
    Quantity : 2,
    Size : "sizeLarge",
    Description : "Description in detail",
    image : "Url"
  }

]

function App() {
  return (<>

      {products.map((prod) => {
        return <Card  key={prod.id}/>
      })};

  </>
  )
}

export default App;
