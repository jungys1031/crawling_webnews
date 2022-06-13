import axios from 'axios';

const ECONOMY_API_BASE_URL = 'http://ec2-3-39-167-169.ap-northeast-2.compute.amazonaws.com:8080/economy';

class ApiService {

  getEconomy(){
    return axios.get(ECONOMY_API_BASE_URL);
  }
}

export default new ApiService();