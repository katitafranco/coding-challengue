import { useEffect, useState } from 'react';

const useChartBeatApi = url => {
  const [topPages, setTopPages] = useState([]);
  useEffect(() => {
    console.log("url",url);
    window
      .fetch(url)
      .then(response => response.json())
      .then(data => setTopPages(data));
  }, []);

  console.log(topPages);
  return topPages;
};

export default useChartBeatApi;
