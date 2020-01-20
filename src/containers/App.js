import React, { Component } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import NewsList from '../components/NewsList';
import NewsItem from '../components/NewsItem';
import SelectSearch from '../components/SelectSearch';
import Message from '../components/Message';
import { getNewsList } from '../api';

const API_KEY = '489ca5d5c6e07f057ec7d9a6a69be9d8';
const url = `http://api.chartbeat.com/live/toppages/v3/?apikey=${API_KEY}&host=eluniverso.com&limit=100`;

const itemsSections = [
  { value: 'TODAS', label: 'TODAS' },
  { value: 'noticias', label: 'Noticias' },
  { value: 'guayaquil', label: 'Guayaquil' },
  { value: 'deportes', label: 'Deportes' },
  { value: 'entretenimiento', label: 'Entretenimiento' },
  { value: 'la revista', label: 'La Revista' }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        pages: []
      },
      idSelectSearch: 'TODAS',
      isError: false,
      loading: false,
      filterList: {
        pages: []
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchFilterList = this.searchFilterList.bind(this);
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const data = await getNewsList(url);
      this.setState({ data, loading: false, filterList: data });
    } catch (err) {
      this.setState({ isError: true });
    }
  }

  handleChange(event) {
    const listado = this.searchFilterList(this.state.data, event.target.value);
    this.setState({
      idSelectSearch: event.target.value,
      filterList: { pages: listado }
    });
  }

  searchFilterList(listado, selectSection) {
    if (listado != null && listado.pages.length > 0) {
      let arrayNews = [];

      listado.pages.forEach(item => {
        const searchfind =
          item.sections &&
          item.sections.some(element => element === selectSection);

        if (selectSection === 'TODAS' || searchfind === true) {
          if (item.stats.article > 0) {
            arrayNews.push({
              title: item.title,
              visits: item.stats.visits,
              path: item.path
            });
          }
        }
      });

      if (arrayNews.length > 1) {
        arrayNews.sort(function(a, b) {
          if (a.visits > b.visits) {
            return 1;
          }
          if (a.visits < b.visits) {
            return -1;
          }
          return 0;
        });
      }
      return arrayNews;
    }
    return [];
  }

  render() {
    return (
      <Layout>
        {this.state.loading && <Message text="Espere por favor..."></Message>}
        {this.state.isError && <Message text="Ah ocurrido un error..."></Message>}
        {!this.state.loading && !this.state.isError && (
          <React.Fragment>
            <SelectSearch
              options={itemsSections}
              value={this.state.idSelectSearch}
              handleChange={this.handleChange}
            />
            <Header title="LO MÁS LEÍDO"></Header>
            <NewsList>
              {this.state.filterList.pages.length > 0 ? (
                this.state.filterList.pages
                  .slice(0, 5)
                  .map((item, index) => (
                    <NewsItem
                      key={index}
                      number={index + 1}
                      path={item.path}
                      title={item.title}
                    />
                  ))
              ) : (
                <Message text="No hay noticias.."></Message>
              )}
            </NewsList>
          </React.Fragment>
        )}
      </Layout>
    );
  }
}

export default App;
