import axios from 'axios';

const ITSCIENCE_API_BASE_URL = 'http://ec2-3-39-167-169.ap-northeast-2.compute.amazonaws.com:8080/itScience';

class ItScienceService {

  getItScience(){
    return axios.get(ITSCIENCE_API_BASE_URL);
  }
}

export default new ItScienceService();
