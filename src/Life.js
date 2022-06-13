import React from 'react';
import LifeCultureComponent from './components/LifeCultureComponent'
const Life = () => {
  return (
    <div>
      <h1>Life&Culture</h1>
      <br/>
      <img src="https://crawling-bucket1.s3.ap-northeast-2.amazonaws.com/itScience"/>
      <br/>
      <div class="table_title">
            <h2 >빈도수 높은 단어 top 100</h2>
           <div class="table"> <LifeCultureComponent/></div>
          </div>
    </div>
  );
};

export default Life;