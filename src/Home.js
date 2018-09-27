import React, { Component } from 'react'

import { BrowserRouter, Link} from 'react-router-dom'

import api from './Api';

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      genres: []
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    api.loadGenres()
       .then(res => this.setState({ genres: res.data, isLoading: false}))
  }

  renderGenreLink(genre) {
    return (<Link to={'/'+genre}><span>&nbsp;{genre}&nbsp;</span></Link>);
  }

  render() {
    return (
      <div>
        <section id="intro" className="intro-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1><img src="images/logo.png" /></h1>
                <p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Para assistir</h1>
                <div id="series" className="row list-group">
                  <div className="item  col-xs-4 col-lg-4">
                    <div className="thumbnail">
                      <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                      <div className="caption">
                        <h4 className="group inner list-group-item-heading">
                          How I met your mother</h4>
                        <div className="row">
                          <div className="col-xs-12 col-md-6">
                            <p className="lead">
                              AÇÃO</p>
                          </div>
                          <div className="col-xs-12 col-md-6">
                            <a className="btn btn-success" href="">Gerenciar</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item  col-xs-4 col-lg-4">
                    <div className="thumbnail">
                      <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                      <div className="caption">
                        <h4 className="group inner list-group-item-heading">
                          How I met your mother</h4>
                          <div className="row">
                          <div className="col-xs-12 col-md-6">
                            <p className="lead">
                              AÇÃO</p>
                          </div>
                          <div className="col-xs-12 col-md-6">
                            <a className="btn btn-success" href="http://www.jquery2dotnet.com">Gerenciar</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          {
            this.state.isLoading &&
              <span>Aguarde, carregando...</span>
          }
          {
            !this.state.isLoading &&
              <div>
                Ver séries do genêro:
                {this.state.genres.map(genre => this.renderGenreLink(genre))}
              </div>
          }
        </section>
      </div>
    );
  }
}

export default Home;
