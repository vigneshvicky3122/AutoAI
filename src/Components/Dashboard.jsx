import React, { useEffect, useState } from "react";
import { URL } from "../App";
import axios from "axios";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import List from "./List";
function Dashboard() {
  const [Data, setData] = useState([]);
  const [SearchItems, setSearchItems] = useState("");
  const [Loader, setLoader] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get(URL);
      if (response.status === 200) {
        setData(response.data);
        setTimeout(() => {
          setLoader(false);
        }, 1000);
      } else {
        setLoader(true);
      }
    } catch (error) {
      setLoader(true);
      console.log(error);
    }
  }

  return (
    <>
      {Loader ? (
        <Spinner />
      ) : (
        <>
          <Navbar SearchItems={SearchItems} setSearchItems={setSearchItems} />
          <List SearchItems={SearchItems} Data={Data} />
        </>
      )}
    </>
  );
}

export default Dashboard;
