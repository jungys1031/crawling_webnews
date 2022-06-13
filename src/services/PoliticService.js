import axios from 'axios';

const POLITIC_API_BASE_URL = 'http://ec2-3-39-167-169.ap-northeast-2.compute.amazonaws.com:8080/politic';

class PoliticService {

  getPolitic(){
    return axios.get(POLITIC_API_BASE_URL);
  }
}

export default new PoliticService();