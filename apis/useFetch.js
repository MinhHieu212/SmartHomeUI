import { useState, useEffect } from "react";
import baseAPI from "./baseAPI";

// data dependence by url (url are path)
// using socket io 
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await baseAPI.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refresh = () => {
    fetchData();
  };

  return { data, isLoading, error, refresh };
};

export default useFetch;
