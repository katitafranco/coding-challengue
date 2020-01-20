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

  constructor(props) {
    super(props);
    this.state = {
      data: {pages:[]},
      idSelectSearch: "TODAS"
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchFilterList = this.searchFilterList.bind(this);
  }


  async componentDidMount() {
    const data = await getNewsList(url);
    this.setState(
      {
        data
      }
    );
  }


  handleChange(event) {  
    const listado = this.searchFilterList(this.state.data, event.target.value); 
    console.log(listado,"lsitado");
        
    this.setState({
      idSelectSearch: event.target.value,
      data: { pages:listado}
    });   
    
  }

  searchFilterList(listado, selectSection) {    

    if (listado != null && listado.pages.length > 0) {
    
      let arrayNews = [];
        try {         

          
          listado.pages.map(item => { 
                          
            const searchfind = item.sections.some(element => element === selectSection);
          
            if (selectSection == "TODAS" || searchfind == true) {
              if (item.stats.article > 0) {
                var objNews = {}
                objNews["title"] = item.title;
                objNews["visits"] = item.stats.visits;
                objNews["path"] = item.path;
                arrayNews.push(objNews);    
              }
            }
          })

        } catch (error) {
          console.log(error);
        }
        
        //ordenando arreglo
        if(arrayNews.length>1){
          arrayNews.sort(function (a, b) {
            if (a.visits > b.visits) {
              return 1;
            }
            if (a.visits < b.visits) {
              return -1;
            }
            return 0;
          });
        }
        
        
        return arrayNews     
      } else {
        return []
      }
    }
    
  
  render() {
   
    return (
      <Layout>
        <Header title="LO MÁS LEÍDO"></Header>
        <SelectSearch value={this.state.idSelectSearch} handleChange={this.handleChange} ></SelectSearch>
        <NewsList>
        {
          this.state.data.pages.length > 0 ?
          this.state.data.pages.slice(0,5).map((item,index) => <NewsItem key={index} number={index+1} path={item.path} title={item.title}/>):
          <p>No hay noticias..</p>
        }
        </NewsList>
      </Layout>
    );
  }

}

export default App;

