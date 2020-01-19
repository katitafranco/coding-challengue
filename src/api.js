
export function getNewsList(url) {
  return fetch(url)
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        return response.json();
      } else {
        return null;
      }
    }).catch((error) => {
      return undefined
    }
    );
}











// const API_KEY = '489ca5d5c6e07f057ec7d9a6a69be9d8'
// const API = `http://api.chartbeat.com/live/toppages/v3/?apikey=${API_KEY}&host=eluniverso.com&limit=NUM`;
// import { useEffect, useState } from 'react';

// const useChartBeatApi = url => {
//   const [topPages, setTopPages] = useState([]);
//   useEffect(() => {
//     console.log("url",url);
//     window
//       .fetch(url)
//       .then(response => response.json())
//       .then(data => setTopPages(data));
//   }, []);

//   console.log(topPages);
//   return topPages;
// };

// export default useChartBeatApi;


// constructor(props) {
//   super(props);
//   this.state = {value: 'coconut'};

//   this.handleChange = this.handleChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
// }

// handleChange(event) {
//   this.setState({value: event.target.value});
// }

// handleSubmit(event) {
//   alert('Your favorite flavor is: ' + this.state.value);
//   event.preventDefault();
// }