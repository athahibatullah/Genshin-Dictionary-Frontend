import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeAPIData } from "../Redux/DataSlice";

const Read = () => {
  const [APIdata, setAPIdata] = useState([]);
  const [bool, setBool] = useState(false);
  const [empty, setEmpty] = useState(false);
  const dispatch = useDispatch();
  const wait = () => {
    if (APIdata.length === 0 && !empty) {
      setTimeout(function () {
        if (bool) {
          setBool(false);
        } else {
          setBool(true);
        }
      }, 1);
    } else {
      setTimeout(function () {
        if (bool) {
          setBool(false);
        } else {
          setBool(true);
        }
      }, 500);
    }
  };
  const getAPIdata = async () => {
    // await axios.get(`http://localhost:9000/api/character`).then((response) => {
    //   setAPIdata(response.data);
    // });
    // const response = await axios.get(`http://localhost:9000/api/character`);
    const response = await axios.get(
      `http://localhost:8181/SpringJenkinsTest/api/character`
    );
    const sortedData = response.data.sort(function (a, b) {
      a = a.characterName.toLowerCase();
      b = b.characterName.toLowerCase();
      return a < b ? -1 : a > b ? 1 : 0;
    });
    return sortedData;
    // setAPIdata(response.data);
    // if (APIdata.length === 0) {
    //   setEmpty(true);
    // } else {
    //   setEmpty(false);
    // }
    // wait();
  };
  const { isLoading, isError, data, error } = useQuery(["todos"], getAPIdata);
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  dispatch(storeAPIData(data));

  //   useEffect(() => {
  //     getAPIdata();
  //     wait();
  //     dispatch(storeAPIData(APIdata));
  //   }, [bool]);
};

export default Read;
