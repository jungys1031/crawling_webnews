import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Naver from './Naver';

const App = () => {
  return (
<Router>
 <div>
    <div class="wrap">
      <div class="intro_bg">
        <div class="header">
          <ul class="nav">
            <li><Link to="/">홈</Link></li>
            <li><Link to = "/Naver">NAVER</Link></li>
         </ul>
        </div>
        <div class="intro_text">
          <h1>WORDCLOUD</h1>
          <Routes>
           <Route path="/" element={<Home />}/>
            <Route path="/Naver" element={<Naver/>}/>
        </Routes>

        </div>
      </div>
      </div>
 
      <div class="main_text1">
        <h1>SERVICE</h1>
        <div class="contents1">WORDCLOUD 이미지를 서비스 하고 있습니다</div>
        <div class="service">
          <div class="food_photo">
            <img src=""/>
          </div>
          <div class="contents2">
              <h2>WORDCLOUD란?</h2>
              자료의 빈도를 시각적으로 나타내는 시각화 방법 중 하나
          </div>
        </div>
      </div>

      <div class="footer">
        <div>LOGO</div>
        <div>
          CEO. 기가막히조 <br/>
          Addr. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ <br/>
          XX - XXX - XXXX ~ 5 <br/>
          COPYRIGHT 2022. KSJ. WORDCLOUD.
        </div>
      </div>

    </div>
</Router>
  );
};

export default App;