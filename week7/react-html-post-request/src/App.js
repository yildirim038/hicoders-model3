/**
 * Bu haftaki ödevinizde bir kullanıcı kayıt formu hazırlamanızı istiyoruz. 
 * Kullanıcı formu içerisinde (Ad, Soyad, Cinsiyet, Dogum Tarihi, E-mail, Şifre, Hakkımda) kişi bilgilerinin bulunması gerekiyor. 
 * Size verdiğimiz url ("BACKEND-URL adresi bu alana daha sonra eklenecek") üzerinden bu formu veritabanımıza kayıt etmenizi istiyoruz.
 * 
 * Bunun icin bir formun olsuturuldu ve birde listenin ekrana basitirildigi iki kisimdan olusturdum.
 * Listenin ekrana bastirilmasinda get kullanilarak veri App.js de alindi ve props olarak creat-list.js gönderildi.
 * Liste ise Post kulanilarak form yolu ile olsuturulan liste göndrildi.
 * useEffect ile ekranin güncelenmesi saglandi.
 */
import React, {useState,useEffect} from 'react'
import './App.css';
import FormCreat from './comanent/creat-form'
import CreateList from './comanent/creat-list'

function App() {
  const API_URL= 'http://174.138.103.233/api/employees';
  const [list,setlist] = useState([]);
  useEffect(()=>{
    personalList();
  })

  const personalList = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setlist (data);
  }
  return (
    <main className="main-countainer">
       <FormCreat/>
       <CreateList recipes={list}/>
    </main>
  );
}
export default App;
