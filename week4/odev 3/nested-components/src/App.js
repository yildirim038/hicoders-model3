/**
 * bir cok kisi bilgisini iceren bir JSON dokümani var. Bu dokümandaki bilgileri, REACT componentleri kullanarak ekranda uygun formatta göstermenizi istiyoruz.
 * Bunun icin;
 * 1) liste App.js de alinarak Peronal fonksiyonuna gönderilir.
 * 2) Personal gelen veriler icinde map ile dönerek olusnan person bilgisi alinir ve Item fonsiyonuna gönderilir.
 * 3) Kisiler bilgiler Item fonsiyonun icinde olusturulur.
 * 4) Arkadas ve Cocuk bilgileri ise Friends ve Childrens Fonsiyonuna gönderilir.
 * 5) Gelen bilgiler map ile dönülerek  arkadas ve cocuk kartlari olusturulur.
 * 6) Item kisminda okusturlan kartlar bir araya getirilir ve sayfa olusturulur.
 */
import data from './components/foreigners.json'
import {Personal} from './components/profil'
import './App.css';

function App() {
  return (
    <div className="App">
  <Personal list={data}/>
    </div>
  );
}

export default App;
