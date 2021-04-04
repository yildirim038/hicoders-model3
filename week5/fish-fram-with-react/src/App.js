/**
 * Bu ödevce amacimiz verilen data yapisini state kullanarak web sayfasina yazdirmak
 * Bunun icin öncelikli olarak json yapsinini App.js den import edilecek.
 * Burdan gelen json listesi  FishListe gönderilecek
 * FishLite gelen liste önce state kullanilarak kaydi yapilacak ve burdan dosyanin olusturulacagi item kismina kaydedilen yapi gönderilecek.
 * propstan veriler alinarak veri ekrana yazdirilacak.
 */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FishList from './components/fishList'
import fishList from './components/fishFarm'
function App() {
  return (
    <div className="App">
        <FishList list ={fishList}/>
    </div>
  );
}

export default App;
