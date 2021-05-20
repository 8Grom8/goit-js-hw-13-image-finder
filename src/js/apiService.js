const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '21693185-7bffd421bcba5faf5a7443ece';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchPictures() {
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
    const response = await fetch(url);
    const pictures = await response.json();
    const { hits } = await pictures;
    this.incrementPage();
    return hits;
  }

  incrementPage() {
    this.page ++;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
