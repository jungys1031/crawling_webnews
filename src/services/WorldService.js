import axios from 'axios';

const World_API_BASE_URL = 'http://ec2-3-39-167-169.ap-northeast-2.compute.amazonaws.com:8080/world';

class ApiService {

  getWorld(){
    return axios.get(World_API_BASE_URL);
  }
}

export default new ApiService();