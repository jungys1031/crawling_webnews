import axios from 'axios';

const DAUM_API_BASE_URL = 'http://ec2-3-39-167-169.ap-northeast-2.compute.amazonaws.com:8080/daum';

class DaumService {

  getDaum(){
    return axios.get(DAUM_API_BASE_URL);
  }
}

export default new DaumService();