import { useState,useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isloading,setIsloading] = useState(false);
    const [errMsg,setErrMsg] = useState(null);


    useEffect(() => {
      setIsloading(true);
      setErrMsg(null);
      fetch(url)
      .then((res) => {
        if(!res.ok){
          throw Error (res.statusText ? res.statusText :"Erorr");
        }
        return res.json();
    })
    .then((data) => {
      // console.log(data);
      setData(data);
      setIsloading(false);
    })
    .catch ((err) => {
      setIsloading(false);
      setErrMsg(err.massage);
    });
  },[url]);
   return {data,isloading,errMsg, setData}
}
export default useFetch