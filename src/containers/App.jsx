import React from 'react';
import Header from '../components/Header';
import useChartBeatApi from '../hooks/useChartBeatApi';
import '../assets/styles/App.scss';

const API_KEY = '489ca5d5c6e07f057ec7d9a6a69be9d8'
const API = `http://api.chartbeat.com/live/toppages/v3/?apikey=${API_KEY}&host=eluniverso.com&limit= NUM`;
const App = () => {
  console.log("API_KEY",API_KEY);

console.log("API", API);
const initialState = useChartBeatApi(API);


  return initialState.length === 0 ? <h1>Loading...</h1> : (
    
      <Header/>
     
  );
}

export default App;
