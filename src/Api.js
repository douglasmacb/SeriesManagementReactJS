import axios from 'axios';

const api = axios.create ({
  baseURL: 'http://localhost:3001/'
})

const loadGenres = () => api.get('genres')

const saveGenres = (genre) => api.post('series', genre)

const apis = {
    loadGenres: loadGenres,
    saveGenres: saveGenres
}

export default apis
