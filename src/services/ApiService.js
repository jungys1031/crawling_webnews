import axios from 'axios';

const CRAWLING_API_BASE_URL = 'http://ec2-3-39-167-169.ap-northeast-2.compute.amazonaws.com:8080/crawling';

class ApiService {

  getCrawling(){
    return axios.get(CRAWLING_API_BASE_URL);
  }
}

export default new ApiService();