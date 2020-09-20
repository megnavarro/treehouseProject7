import React, { Component } from 'react';
import './index.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import axios from 'axios';

import apiKey from './config';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import Error404 from './Components/Error404';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos: [],
      cats: [],
      dogs: [],
      birds: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch();
    this.getCatPics();
    this.getDogPics();
    this.getBirdPics();
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  getCatPics = (query = 'cat') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          cats: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  getDogPics = (query = 'dog') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          dogs: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  getBirdPics = (query = 'bird') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          birds: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() { 
    return (
      <BrowserRouter>
      <div>
        <SearchForm onSearch={this.performSearch} />
        <Nav />            
        <div>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/cats" />}/>
            <Route exact path={'/search/:query'} render={()=>(<PhotoContainer data={this.state.photos} loading={this.state.loading}/> )}/>
            <Route exact path="/cats" render={ () => (<PhotoContainer data={this.state.cats} loading={this.state.loading}/> )}/>
            <Route exact path="/dogs" render={ () => (<PhotoContainer data={this.state.dogs} loading={this.state.loading}/> )}/>
            <Route exact path="/birds" render={ () => (<PhotoContainer data={this.state.birds} loading={this.state.loading}/> )}/>
            <Route component={Error404} />
          </Switch>
        </div>
      </div>

      </BrowserRouter>
    );
  }

}
