import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/index.css'
import Header from './components/Header';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home'
import Semantic from './webStandards/html/1_semantic'
import InputText from './webStandards/html/2_inputText'
import OrderedList from './webStandards/html/3_orderedList'
import Table from './webStandards/html/4_table'
import Media from './webStandards/html/5_media'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode를 제거하여 두 번 렌더링되는 문제를 피합니다.
  <>
      <BrowserRouter>
        <Header />
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/semantic" element={<Semantic />} />
             <Route path="/inputText" element={<InputText />} />
             <Route path="/orderedList" element={<OrderedList />} />
             <Route path="/table" element={<Table />} />
             <Route path="/media" element={<Media />} />
          </Routes>
      </BrowserRouter>
    <Footer />
  </>
);

reportWebVitals();
