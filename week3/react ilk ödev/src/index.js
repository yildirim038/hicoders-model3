/**
 * REACT kullanarak basit bir web sayfasi olusturmanizi istiyoruz.
 * 1)Bunun icin verilen metin dosyasini html gibi App.js icinde olusturacagiz.
 * 2)Olusturulan foksiyonu index.js import edecegiz
 * 3)Programi calistirmak icin `npm start` kullanacagiz.
 * 4)Görüntülenme ise http://localhost:3000 gerceklesecek.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);