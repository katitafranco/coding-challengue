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
      idSelectSearch: "TODAS",
      SelectedList: []
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
    // alert('Your favorite flavor is: ' + value);
    this.setState({
      idSelectSearch: event.target.value
    });
    this.searchFilterList(this.state.data, event.target.value);

    // alert('Your favorite flavor is: ' + value);
  }

  searchFilterList(listado, selectSection) {

    console.log("listado", listado);

    if (listado != null) {

      if (listado.pages.length > 0) {
        var obj = {
          length: 0,
          addElem: function addElem(elem) {
            // obj.length is automatically incremented 
            // every time an element is added.
            [].push.call(this, elem);
          }
        };
        try {
          // this.state.data.pages.map

          var vegetable = [];

          console.log("this.state.data.pages.map", this.state.data);
          this.state.data.pages.map(item => {

            // let section = false;
            // const result = item.sections.filter(word => word = "entretenimiento");
            // console.log("Presentando resultado del filter;", result);                   
            let searchfind = false;

            var obj={}
            obj["title"]= item.title;
            obj["title"]= item.title;
            obj["visits"]= item.stats.visits;
            obj["path"]= item.path;
            vegetable.push(obj);
            // for (const key in item.sections) {
            //   console.log(key,"key");
            //   const element = item.sections[key];
            //   console.log(element,"element")

            // }

            item.sections.forEach(element => {
              // console.log("item.sections.forEach",element);
              if (element == selectSection) {
                searchfind = true;
              }

            });
            // (item=> searchfind = item=="gente"?true: false);
            console.log("searchfind", searchfind);
            // console.log("selectSection***",selectSection);

            if (selectSection == "TODAS" || searchfind == true) {
              if (item.stats.article > 0) {
                obj.addElem({
                  "sections": item.sections,
                  "title": item.title,
                  "visits": item.stats.visits,
                  "path": item.path,

                });
              }

              // Let's add some empty objects just to illustrate.

            }

          })

          // for (const key in obj) {
          //   if (obj.hasOwnProperty(key)) {
          //     const element = obj[key];
          //     console.log("element:", element);
          //   }
          // }
          obj.forEach(element => {
            console.log("element:", element);
          }); 
        } catch (error) {
          console.log(error);

        }

        // this.setState({
        //   SelectedList: obj          
        // })
        vegetable.map(value => console.log(value.title,"vegetableeeeeeeeee"))
        console.log(vegetable,"*****************vegetable");
        
        return obj
        // console.log("Presentando el idSelectSearch", this.state.idSelectSearch);
        // console.log("Presentando la data en el estado", this.state.data);

      } else {
        return {}
      }
    }
    else {
      return {};
    }
    console.log(Date.now(), obj);

  }
  render() {
    console.log("this.state.data", this.state.data);

    const listado = this.searchFilterList(this.state.data, this.state.idSelectSearch);
    console.log("Imprimiendo listado:", listado);
    return (
      <Layout>

        <Header title="LO MÁS LEÍDO"></Header>
        <SelectSearch value={this.state.idSelectSearch} handleChange={this.handleChange} ></SelectSearch>
      
      </Layout>
      
        //console.log(listado,"listado en newlist , lentg",listado.length)
        //do.length != undefined && listado.length > 0) && 
        
      
        
      


      
    );
  }

}

export default App;
{/* 
   for (const key in listado) {
          if (listado.hasOwnProperty(key)) {
            const element = listado[key];
            console.log("element:", element);
          }
        }
  
  
  listado.length>0 &&
        listado.forEach(element =>
            console.log(element)
        ) */}

{/* console.log("Presentando el this.state.SelectedList",typeof(listado) ) */ }

///* for (const prop in obj) {
//console.log(`obj.${prop} = ${obj[prop]}`)}}
//     */}
{/* listado.map((item,index) => <NewsItem number={index} title={item.title}/>) */ }

{/* this.state.SelectedList.forEach(element =>
            Console.log(element);
              {/* <NewsItem number="5" 
              element={element} 
              title="Que hay" /> */}


// console.log("Presentando los items en el array;", item);
//             console.log("Presentando item.stats en el array;", item.stats.article);
//             console.log("Presentando la section en el array;", item.sections);



// getnewsListFilter = () => {

//   console.log("nada");

//   const array = this.state.data;
//   for (let index = 0; index < array.length; index++) {
//     let element = array[index];
//     console.log(element);
//     console.log("otra vez");

//   }
//   // const myData = [].concat(this.state.data)
//   //   .sort((a, b) => a.pages.stats.visits > b.pages.stats.visits)
//   //   .map((item, i) => console.log("probando a", item.pages, i)

//   //   );
//   // console.log("myData",myData);
// }