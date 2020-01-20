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
      data: undefined,
      idSelectSearch: "TODAS"
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchFilterList = this.searchFilterList.bind(this);
  }


  async componentDidMount() {
    this.setState(
      {
        data: await getNewsList(url)

      }
    );
  }


  handleChange(event) {    
    this.setState({
      idSelectSearch: event.target.value
    });    
  }

  searchFilterList(listado, selectSection) {    

    if (listado != null) {
      if (listado.pages.length > 0) {

        try {         

          var arrayNews = [];

          console.log("this.state.data.pages.map", this.state.data);
          this.state.data.pages.map(item => {
                
            let searchfind = false;         

            item.sections.forEach(element => {
              if (element == selectSection) {
                searchfind = true;
              }
            });

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
    else {
      return [];
    }
  }
  render() {
    console.log("this.state.data", this.state.data);

    const listado = this.searchFilterList(this.state.data, this.state.idSelectSearch);
    console.log("Imprimiendo listado:", listado);
    return (
      <Layout>

        <Header title="LO MÁS LEÍDO"></Header>
        <SelectSearch value={this.state.idSelectSearch} handleChange={this.handleChange} ></SelectSearch>
        <NewsList>
        {
          listado.length > 0 &&
          listado.slice(0,5).map((item,index) => <NewsItem key={index} number={index+1} title={item.title}/>)
          }
        </NewsList>
      </Layout>
    );
  }

}

export default App;

