/**
 *  Bu Uygulamada json datasindaki verileri kullanarak bir word-quiz yapilacaktir.
 *  Ekrana random olarak Almanca bir kelime ve 4 tane secenek gelecek. 
 * (Seceneklerden biri Almanca kelimenin dogru Türkce karsiligidir). 
 * Sorularin cevaplanmasiyla diger soruya gecilecek ve her soruya gecildiginde skor güncellenecek.
 * 
 * 1)Öncelikle bir json dosyasi olsuturulur. olsuturulan Dosyada soru alacak kelime ve cevaplar yer alir.Secenegin dogru olup oladigi boolean olarak belirlenir.
 * 2)test.js adinda oyunun caliscagi bir kisim olsuturulur. Burada oyun oynafigi zaman verilen cevaplarin dogru olup olmadigi state ile tutulur.
 * 3) Oyunun tamamlanip tamalanmadigi ilk olarak degerlendirilir.Eger oyunda Sorularin uzunluguna ulasilmasisa oyun devam eder (baslagic sorusu degeri ilk olarak satatüs ile 0 olarak tanimlandi.)
 * 4) Eger oyun tamamlanmamissa (soru sayisina ulasilmamisa) map ile sorularda dönülerek sira ile sorular getirilir.
 * 5) Soru sayisi, json uzunluguna ulasirsa oyun sona erer ve scor ekrna yansitilir.
 */
import './App.css';
import Test from './components/test-game'
import questions from './components/question.json'

function App() {
  
  return (
    <div className="App">
	  	<Test list={questions}/>
    </div>
  );
}

export default App;
