

function Koltuk() {
    return (
        <div>
            <h1>Koltugum ben</h1>
        </div>
    );
}

function OturmaOdasi(props) {
    return (
        <section>
            <h1>oturma odasi</h1>
            <Koltuk />
            <Koltuk />
        </section>
    );
}

ReactDOM.render(
    <OturmaOdasi name="Hi Coders!" />,      //virgülü unutma !!!!!!!
    document.getElementById('ev-temeli')
);

function Araba(props) {
    return (
        <section>
            <h1>Arabayim Ben</h1>
            <Koltuk />
            <Koltuk />
            <Direksiyon />

        </section>
    )
}