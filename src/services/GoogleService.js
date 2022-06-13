import axios from 'axios';

const GOOGLE_API_BASE_URL = 'http://ec2-3-39-167-169.ap-northeast-2.compute.amazonaws.com:8080/google';

class GoogleService {

  getGoogle(){
    return axios.get(GOOGLE_API_BASE_URL);
  }
}

export default new GoogleService();