import axios from 'axios';

const CRAWLING_API_BASE_URL = 'http://localhost:8080/crawling';

class ApiService {

  getCrawling(){
    return axios.get(CRAWLING_API_BASE_URL);
  }
}

export default new ApiService();