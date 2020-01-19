import React, { Component } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import NewsList from '../components/NewsList';
import NewsItem from '../components/NewsItem';
import SelectSearch from '../components/SelectSearch';
import { getNewsList } from '../api';

const API_KEY = '489ca5d5c6e07f057ec7d9a6a69be9d8'
const url = `http://api.chartbeat.com/live/toppages/v3/?apikey=${API_KEY}&host=eluniverso.com&limit=NUM`;


class App extends Component {
  state = {
    data: undefined,
    idSelectSearch: "TODAS"
  };

  async componentDidMount() {
    this.setState(
      {
        data: await getNewsList(url)

      }
    );
  }

  getnewsListFilter = () => {

    console.log("nada");

    const array = this.state.data;
    for (let index = 0; index < array.length; index++) {
      let element = array[index];
      console.log(element);
      console.log("otra vez");

    }
    // const myData = [].concat(this.state.data)
    //   .sort((a, b) => a.pages.stats.visits > b.pages.stats.visits)
    //   .map((item, i) => console.log("probando a", item.pages, i)

    //   );
    // console.log("myData",myData);
  }

  handleChange = (value) => {
    // alert('Your favorite flavor is: ' + value);
    this.setState({
      idSelectSearch: value
    });
    this.getnewsListFilter();
    value.preventDefault();
    // alert('Your favorite flavor is: ' + value);
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {


    let flag = false;
    let i = 0;
    var obj = {
      length: 0,

      addElem: function addElem(elem) {
        // obj.length is automatically incremented 
        // every time an element is added.
        [].push.call(this, elem);
      }
    };


    try {
      // const array = this.state.data;
      this.state.data.pages.map(item => {
        console.log("Presentando los items en el array;", item);
        console.log("Presentando item.stats en el array;", item.stats.article);
        console.log("Presentando la section en el array;", item.sections);

        // let section = false;
        const result = item.sections.filter(word => word="entretenimiento");
        console.log("Presentando resultado del filter;", result);
        

        // Let's add some empty objects just to illustrate.
        if(item.stats.article >0){ obj.addElem({ 
          "article": item.stats.article,
          "sections": item.sections,
          "visit":item.stats.visits });}
        // obj.addElem({ "sections": item.stats.sections });
        // obj.addElem({ "sections": item.stats.sections });}
       
        console.log(obj.length);
      })

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const element = obj[key];
        console.log("element:",element);
      }
    }

      
    } catch (error) {
      console.log(error);

    }

    console.log("Presentando el idSelectSearch", this.state.idSelectSearch);

    console.log("Presentando la data en el estado", this.state.data);

    return (
      <Layout>

        <Header title="LO MÁS LEÍDO"></Header>
        <SelectSearch value={this.state.idSelectSearch} handleChange={this.handleChange} ></SelectSearch>
        <NewsList>
          <NewsItem number="5" title="Que hay" />

        </NewsList>

      </Layout>
    );
  }

}

export default App;
