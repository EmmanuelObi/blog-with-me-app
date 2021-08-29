import axios from 'axios'
import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [loading, setLoading] = useState(false);
    const [data, setdata] = useState(null);

    useEffect(() => {
      setLoading(true);
      axios.get(url).then((response) => {
          const allData = response.data;
          setdata(allData);
      }).catch(error => console.error(`Error: ${error}`));
      setLoading(false)

    }, [url])

    return {data, loading}
}

export default useFetch


// function fetchPosts() {
//     let url = "https://jsonplaceholder.typicode.com/"
//     axios.get(`${url}posts`).then((response) => {
//         const allData = response.data;
//         setdata(allData);
//     }).catch(error => console.error(`Error: ${error}`));
// }