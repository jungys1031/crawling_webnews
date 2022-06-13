import React from 'react';
import PoliticComponent from './components/PoliticComponent'
const Politic = () => {
  return (
    <div>
      <h1>Politic</h1>
      <br/>
      <img src="https://crawling-bucket1.s3.ap-northeast-2.amazonaws.com/politic"/>
      <br/>
      <div class="table_title">
            <h2 >빈도수 높은 단어 top 100</h2>
           <div class="table"> <PoliticComponent/></div>
          </div>
    </div>
  );
};

export default Politic;