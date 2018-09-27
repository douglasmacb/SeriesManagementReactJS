import React, { Component } from 'react'

import api from './Api'

const statuses = {
  "watching": "Assistindo",
  "watched": "Assistido",
  "toWatch": "Assistirei"
}

class NewSeries extends Component {

  constructor(props) {
    super(props)

    this.state = {
      genres: []
    }

    this.saveSeries = this.saveSeries.bind(this)
  }

  componentDidMount() {
    api.loadGenres().then(res => this.setState({ genres: res.data, isLoading: false }))
  }

  saveSeries(event) {
    let newSerie = {
      "name": this.refs.serieName.value,
      "status": this.refs.status.value,
      "genre": this.refs.genre.value,
      "comments": this.refs.comments.value
    }
    api.saveGenres(newSerie)
    return false
  }

  render() {
    return (
      <div>
        <section id='intro' className='intro-section'>
          <form id='formNewSeries'>
            <label>Nome da Série:</label>
            <input type='text' ref='serieName' id='serieName' className='form-control' />

            <label>Genêro:</label>
            <select ref='genre'>
              {this.state.genres.map(genre => <option key={genre}>{genre}</option>)}
            </select><br />

            <label>Status:</label>
            <select ref='status'>
              { Object
                .keys(statuses)
                .map(status => <option key={status}>{statuses[status]}</option>)
              }
            </select><br />

            <label>Comentários:</label>
            <textarea ref='comments' rows='5' cols='30'></textarea><br />
            <button onClick={this.saveSeries}>Criar</button>
          </form>
        </section>
      </div>
    );
  }
}

export default NewSeries
