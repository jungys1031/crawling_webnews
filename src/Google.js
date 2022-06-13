import React from 'react';
import GoogleComponent from './components/GoogleComponent'
const Google = () => {
  return (
    <div>
      <h1>Google</h1>
      <br/>
      <img src="https://crawling-bucket1.s3.ap-northeast-2.amazonaws.com/google"/>
      <br/>
      <div class="table_title">
            <h2 >빈도수 높은 단어 top 100</h2>
           <div class="table"> <GoogleComponent/></div>
          </div>
    </div>
  );
};

export default Google;