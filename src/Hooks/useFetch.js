import React, { useState, useCallback } from 'react'

const useFetch = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const request = useCallback(async (url, options) => {
    let res;
    let json;
    try{
      setError(null);
      setLoading(true);
      res = await fetch(url, options);
      json = await res.json();
      if (!res.ok) 
        throw new Error(json.message);
    }catch(error){
      json = null;
      setError(error.message);
    }finally{
      setData(json)
      setLoading(false);
      return {res, json}
    }
  },[])
  



  return {data, loading, error, request}
}

export default useFetch