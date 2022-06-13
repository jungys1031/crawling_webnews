import React from 'react';
import WorldComponent from './components/WorldComponent'
const World= () => {
  return (
    <div>
      <h1>World</h1>
      <br/>
      <img src="https://crawling-bucket1.s3.ap-northeast-2.amazonaws.com/world"/>
      <br/>
      <div class="table_title">
            <h2 >빈도수 높은 단어 top 100</h2>
           <div class="table"> <WorldComponent/></div>
          </div>
    </div>
  );
};

export default World;