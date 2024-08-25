import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import Header from './components/Header';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode를 제거하여 두 번 렌더링되는 문제를 피합니다.
  <>
    <Header />
    <Footer />
  </>
);

reportWebVitals();
