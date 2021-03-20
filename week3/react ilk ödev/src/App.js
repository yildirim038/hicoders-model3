/**
 *  Html icinde olusturulacak metin bu kisimda yer alan App funtionun icinde olusturuldu.
 *  Css dosyasi import ile alindi.
 */
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Imput Format</h3>
      <p>
        First line contains <strong><em>N</em></strong>. <strong><em>N</em></strong> lines follow,each having a PAN number.
      </p>
      <h3>Constraints</h3>
      <ul>
        <li><strong><em>1 &le; N &le; 10</em></strong></li>
        <li>Each char is an uppercase letter i.e. <strong><em>char</em></strong> &isin; [<strong><em>'A','Z'</em></strong>].</li>
        <li>Each digit lies between 0 and 9 i.e. <strong><em>digit</em></strong> &isin; [<strong><em>0,9</em></strong>].</li>
        <li>The length of the PAN number is always 10 i.e <strong><em>length(PAN)=10</em></strong></li>
        <li>Every character in PAN is either char or digit satisfying the above constraints.</li>
      </ul>
      <h3>Output Format</h3>
      <p>For every PAN number listed, print YES if it is valid and NO if isn't.</p>
    </div>
  );
}

export default App;
