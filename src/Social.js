import React from 'react';
import SocialComponent from './components/SocialComponent'
const Social = () => {
  return (
    <div>
      <h1>Social</h1>
      <br/>
      <img src="https://crawling-bucket1.s3.ap-northeast-2.amazonaws.com/social"/>
      <br/>
      <div class="table_title">
            <h2 >빈도수 높은 단어 top 100</h2>
           <div class="table"> <SocialComponent/></div>
          </div>
    </div>
  );
};

export default Social;