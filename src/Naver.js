import React from 'react';
import CrawlingComponent from './components/CrawlingComponent';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Naver = () => {
  return (
    <div>
      <h1>Naver</h1>
      <br/>
      <img src="https://crawling-bucket1.s3.ap-northeast-2.amazonaws.com/main"/>
      <br/>
      <ul class="category">
            <li><h3>정치</h3> <br/> <Link to ="/Politic"><img src="https://crawling-bucket1.s3.ap-northeast-2.amazonaws.com/politic"/></Link></li>
            <li><h3>경제</h3> <br/> <Link to ="/Economy"><img src="https://crawling-bucket1.s3.ap-northeast-2.amazonaws.com/economy"/></Link></li>
            <li><h3>사회</h3> <br/> <Link to ="/Social"><img src="https://crawling-bucket1.s3.ap-northeast-2.amazonaws.com/social"/></Link></li>
            <li><h3>생활&문화</h3> <br/> <Link to ="/Life"><img src="https://crawling-bucket1.s3.ap-northeast-2.amazonaws.com/itScience"/></Link></li>
            <li><h3>IT&과학</h3> <br/> <Link to ="/IT"><img src="https://crawling-bucket1.s3.ap-northeast-2.amazonaws.com/itScience"/></Link></li>
            <li><h3>세계</h3> <br/> <Link to ="/World"><img src="https://crawling-bucket1.s3.ap-northeast-2.amazonaws.com/world"/></Link></li>
          </ul>
          <div class="table_title">
            <h2 >빈도수 높은 단어 top 100</h2>
           <div class="table"><CrawlingComponent /></div>
          </div>

    </div>
    
  );
};

export default Naver;