import React from 'react';
import DaumComponent from './components/DaumComponent'

const Daum = () => {
  return (
    <div>
      <h1>Daum</h1>
      <br/>
      <img src="https://crawling-bucket1.s3.ap-northeast-2.amazonaws.com/daum"/>
      <br/>
      <div class="table_title">
            <h2 >빈도수 높은 단어 top 100</h2>
           <div class="table"><DaumComponent /></div>
          </div>
    </div>
    
  );
};

export default Daum;