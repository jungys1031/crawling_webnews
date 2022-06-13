import axios from 'axios';

const LIFECULTURE_API_BASE_URL = 'http://ec2-3-39-167-169.ap-northeast-2.compute.amazonaws.com:8080/lifeCulture';

class LifeCultureService {

  getLifeCulture(){
    return axios.get(LIFECULTURE_API_BASE_URL);
  }
}

export default new LifeCultureService();
