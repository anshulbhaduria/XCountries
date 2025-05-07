import React, { useEffect, useState } from "react";
import styles from "./Countries.module.css";
import axios from "axios";
import Cards from "../Cards/Cards";

function Countries() {
  const ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(ENDPOINT);
        const data = response.data;
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.mainContainer}>
      {data.map(({ name, flag, abbr }) => {
        return <Cards key={abbr} name={name} flag={flag} />;
      })}
    </div>
  );
}

export default Countries;
