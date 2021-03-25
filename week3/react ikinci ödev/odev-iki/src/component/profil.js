import '../style/profil.css'
import imgUrl from '../img/profil-resmi.jpeg'

export function Header(){
    return(
        <header><h1>Profil Sayfasi</h1></header>
    );
}


export function KisiselBilgiler (){
return(
    <section class="bilgi">
    <fieldset class="kisisel">
        <legend><strong>Kisisel Bilgiler</strong></legend>
        <div id="kisisel-bilgi">
            <div><img src={imgUrl} alt="resim"/></div>
            <div>
                <table id="table-kisisel" class="table table-striped">
                    <tr>
                        <th>Adi:</th>
                        <td>Ali Osman</td>
                    </tr>
                    <tr>
                        <th>Soyadi:</th>
                        <td>Yildirim</td>
                    </tr>
                      <tr>
                        <th>Yasi:</th>
                        <td>34</td>
                      </tr>
                      <tr>
                        <th>Cinsiyet:</th>
                        <td>Erkek</td>
                      </tr>
                  </table>
                  
            </div>
        </div>
    </fieldset>
</section>
);
}

export function OzGecmis(){
    return(
        <section class="bilgi">
        <fieldset id="oz">
            <legend><strong> Özgecmis</strong></legend>
            <p>
                Ilk Okul ,Orta okul ve Liseyi Kayseride okudum.
                Üniversiteyi Ankara Gazi Üniversitesin <strong>Fen Bilgisi Ögretmenligi</strong> Bölümünde
                okudum.
                2010 yilinda üniversiteden mezun oldum. 2010 yilinda <em>Samanyolu Egitim Kurumlarinda</em>
                <ins>Fen Bilgisi
                    Ögretmeni</ins> olarak meslek hayatima basladim. 2011 yilinda Yenimahalle Kaymakamliginda
                V.H.K.I.
                olarak atandim. 2015 yil kadar Yenimahalle Kaymakamliginda Tüketici Hakem Heyetinde Raportör
                olarak devam ettim. 2015 yilinda Diyarbakir ili Silvan ilcesine atandim. 2016 yili Agustos ayina
                kadar burda calistim. Daha sonra ozel sektorde calisma hayatima devam ettim.
            </p>
        </fieldset>
    </section>
    );
}

export function IsBilgileri(){
    return(
        <section class="bilgi">
        <fieldset>
            <legend><strong>Calisma Bilgileri</strong></legend>
            <table>
                <tr>
                    <th>Firma/Sirket</th>
                    <th>Sektör</th>
                    <th>Pozisyon</th>
                    <th>Giris Yili</th>
                    <th>Cikis Yili</th>
                    <th>Sehir</th>
                </tr>
                <tr>
                    <td>Samanyolu Egitim Kurumlari</td>
                    <td>Egitim</td>
                    <td>Ögretmen</td>
                    <td>2010</td>
                    <td>2011</td>
                    <td>Ankara</td>
                </tr>
                <tr>
                    <td>Ankara Valiligi</td>
                    <td>Devlet</td>
                    <td>V.H.K.I.</td>
                    <td>2011</td>
                    <td>2015</td>
                    <td>Ankara</td>
                </tr>
                <tr>
                    <td>Silvan Kaymakamligi</td>
                    <td>Devlet</td>
                    <td>V.H.K.I.</td>
                    <td>2015</td>
                    <td>2016</td>
                    <td>Diyarbakir</td>
                </tr>
                <tr>
                    <td>S-F Lounge</td>
                    <td>Hizmet</td>
                    <td>Alim-Satim ve Muhasebe</td>
                    <td>2017</td>
                    <td>2018</td>
                    <td>Diyarbakir</td>
                </tr>
            </table>
        </fieldset>
    </section>
    );
}

export function OkulBilgileri(){
    return(
        <section class="bilgi">
                <fieldset>
                    <legend><strong>Okul Bilgileri</strong></legend>
                    <table>
                        <tr>
                            <th>Okul Adi</th>
                            <th> Baslangic Tarihi</th>
                            <th> Bitis Tarihi</th>
                            <th>Diploma Notu</th>
                            <th>Sehir</th>
                        </tr>
                        <tr>
                            <td>Yahya Kemal Beyatli Ilkokulu</td>
                            <td>1992</td>
                            <td>1997</td>
                            <td>5.0</td>
                            <td>Kayseri</td>
                        </tr>
                        <tr>
                            <td>Saban Fazlioglu Orta Okulu</td>
                            <td>1997</td>
                            <td>2000</td>
                            <td>4.7</td>
                            <td>Kayseri</td>
                        </tr>
                        <tr>
                            <td>Sami Yangin Anadolu Lisesi</td>
                            <td>2000</td>
                            <td>2004</td>
                            <td>4.3</td>
                            <td>Kayseri</td>
                        </tr>
                        <tr>
                            <td>Gazi Universitesi Fen Bilgisi Ögretmenligi</td>
                            <td>2006</td>
                            <td>2010</td>
                            <td>3.2</td>
                            <td>Ankara</td>
                        </tr>
                    </table>
                </fieldset>
        </section>
    );
}
export function Hobiler (){
     return(
        <section class="bilgi">
                <fieldset>
                    <legend><strong>Hobiler</strong></legend>
                    <table>
                        <tr>
                            <th>Hobi Adi</th>
                            <th>Nerede Yapiyorum</th>
                            <th>Haftalik Olarak Süresi</th>
                            <th>Yillik Ort. Ödenen Ucret</th>
                        </tr>
                        <tr>
                            <td>Film Seyretmek</td>
                            <td>Evde</td>
                            <td>8 Saat</td>
                            <td>120,00 Frank</td>
                        </tr>
                        <tr>
                            <td>Bisiklet Sürmek</td>
                            <td>Ev civari</td>
                            <td>6 Saat</td>
                            <td>0 Frank</td>
                        </tr>
                        <tr>
                            <td>Kitap Okumak</td>
                            <td>Evde</td>
                            <td>2 Saat</td>
                            <td>100,00 Frank</td>
                        </tr>
                        <tr>
                            <td>Yuruyus Yapmak</td>
                            <td>Göl kenari</td>
                            <td>6 Saat</td>
                            <td>0 Frank</td>
                        </tr>
                    </table>
                </fieldset>
        </section>
    );
 }