import React from 'react';
import EconomyComponent from './components/EconomyComponent'
const Economy = () => {
  return (
    <div>
      <h1>Economy</h1>
      <br/>
      <img src="https://crawling-bucket1.s3.ap-northeast-2.amazonaws.com/economy"/>
      <br/>
      <div class="table_title">
            <h2 >빈도수 높은 단어 top 100</h2>
           <div class="table"> <EconomyComponent/></div>
          </div>
    </div>
  );
};

export default Economy;