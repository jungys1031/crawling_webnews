import axios from 'axios';

const CRAWLING_API_BASE_URL = 'http://3.39.167.169:8080/';

class ApiService {

  getCrawling(){
    return axios.get(CRAWLING_API_BASE_URL);
  }
}

export default new ApiService();