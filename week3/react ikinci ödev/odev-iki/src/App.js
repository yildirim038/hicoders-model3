import './App.js';
import {KisiselBilgiler,OzGecmis,OkulBilgileri,IsBilgileri ,Header, Hobiler} from './component/profil.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <KisiselBilgiler/>
      <OzGecmis/>
      <IsBilgileri/>
      <OkulBilgileri/>
      <Hobiler/>
    </div>
  );
}

export default App;
