import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import axios from "axios";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    const response = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
    });
  };

  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry
  };
  return (
    <>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
