import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Naver from './Naver';
import Daum from './Daum';
import Google from './Google';


const App = () => {
  return (
 <div>
    <div class="wrap">
      <div class="intro_bg">
        <div class="header">
          <ul class="nav">
            <li><Link to="/">홈</Link></li>
            <li><Link to = "/Naver">NAVER</Link></li>
            <li><Link to = "/Daum">Daum</Link></li>
            <li><Link to = "/Google">Google</Link></li>
         </ul>
        </div>
        <div class="intro_text">
          <Routes>
           <Route path="/" element={<Home />}/>
            <Route path="/Naver" element={<Naver/>}/>
            <Route path="/Daum" element={<Daum/>}/>
            <Route path="/Google" element={<Google/>}/>

          </Routes>
        </div>
      </div>
      </div>

      <br/>
      <div class="main_text1">
        <div class="service">
          <div class="contents1">
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
  );
};


export default App;