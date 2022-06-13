import axios from 'axios';

const Social_API_BASE_URL = 'http://ec2-3-39-167-169.ap-northeast-2.compute.amazonaws.com:8080/social';

class SocialService {

  getSocial(){
    return axios.get(Social_API_BASE_URL);
  }
}

export default new SocialService();