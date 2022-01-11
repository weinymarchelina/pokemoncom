import { useState, useEffect } from "react";
import axios from "axios";

// using axios in react instead of fetch in order to obtain some extra features of axios

const useAxios = (baseUrl, path = "", options = "") => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();

    const axiosInstance = axios.create({
      signal: abortController.signal,
      timeout: 5000,
      baseURL: baseUrl,
      options,
    });

    axiosInstance
      .get(path)
      .then((res) => {
        return res.data;
      })
      .then((dataObj) => {
        setData(dataObj);
        setCount(dataObj.count);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          console.error(err);
          setError(err.message);
          setIsLoading(false);
        }
      });
    return () => {
      abortController.abort();
    };
  }, [baseUrl, path, options]);

  return { data, isLoading, error, count };
};

export default useAxios;
