import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/index.css'
import Header from './components/Header';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home'
import Semantic from './webStandards/html/1_semantic'
import InputText from './webStandards/html/2_input_text'
import OrderedList from './webStandards/html/3_ordered_list'
import Table from './webStandards/html/4_table'
import Media from './webStandards/html/5_media'
import Form from './webStandards/html/6_form'
import CssIntro from './webStandards/css/1_css_intro'
import Font from './webStandards/css/2_font'
import Text from './webStandards/css/3_text'
import List from './webStandards/css/4_list'
import BoxModel from './webStandards/css/5_box_model'
import Layout from './webStandards/css/6_layout'

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
             <Route path="/form" element={<Form />} />
             <Route path="/cssIntro" element={<CssIntro />} />
             <Route path="/font" element={<Font />} />
             <Route path="/text" element={<Text />} />
             <Route path="/list" element={<List />} />
             <Route path="/boxModel" element={<BoxModel />} />
             <Route path="/layout" element={<Layout />} />
          </Routes>
      </BrowserRouter>
    <Footer />
  </>
);

reportWebVitals();
