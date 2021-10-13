import React from "react";

import './App.scss';
import Header from "../Header";
import AdminPanel from "../Pages/AdminPanel";
import Homepage from "../Pages/Homepage";
import ItemPage from "../Pages/ItemPage";
import Catalogue from "../Pages/Catalogue";

const  App = () => {
  return (
    <>
      <Header />
      <AdminPanel />
      <Homepage />
      <ItemPage />
      <Catalogue />
    </>
  )
};

export default App;
