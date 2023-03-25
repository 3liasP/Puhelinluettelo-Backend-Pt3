# Web-ohjelmointi: Puhelinluettelo-backend -projekti
## Osa 3, tehtävät 3.1 - 3.15

### *Tärkeää*
- Tehtävän 3.7 jälkeen kansiorakenne on formatoitu uudelleen ja tehtävän 3.7. jälkeiset tehtävät on koottu uuteen kansioon `/from 3-8`
- Tehtävät 3.1 -> 3.7 löytyvät kansiosta `/until 3-7`

### *Muuta*
- Vanhojen vastauksien `index.js` -tiedostot sisältyvät ja ovat nimetty kunkin tehtävän mukaan (esim. `index-3-2.js` tehtävälle 3.2 jne.).
- Viimeisin vastaus tehtävään on aina tiedostossa `index.js`.
- Vanhat vastaukset ovat lähinnä varmuuskopioita toimivista versioista ja ne demonstroivat työnkulkua.

### Tehtävä 3.1
- Toimii ongelmitta
- Tarjoaa osoitteessa http://localhost:3001/api/persons kovakoodatun taulukon puhelinnumerotietoja
- Käytä apuna express-kirjastoa
- Voidaan käynnistää komennolla `npm run dev`

### Tehtävä 3.2
- Toimii ongelmitta
- Kertoo pyynnön tekohetken ja montako puhelinluettelotietoa sovelluksen muistissa olevassa taulukossa on osoitteessa http://localhost:3001/info

### Tehtävä 3.3
- Toimii ongelmitta
- Voidaan näyttää yksittäinen puhelinnumerotieto osoitteessa http://localhost:3001/api/persons/5
- Jos id:tä vastaavaa puhelinnumerotietoa ei ole, palvelin vastaa statuskoodilla `404`

### Tehtävä 3.4
- Toimii ongelmitta, toiminta testattu VSC:n REST clientillä
- Lisätty toiminnallisuus, jonka avulla puhelinnumerotieto on mahdollista poistaa numerotiedon yksilöivään URL:iin tehtävällä HTTP DELETE -pyynnöllä.

### Tehtävä 3.5
- Toimii ongelmitta
- Uusia puhelintietoja on mahdollista lisätä osoitteeseen http://localhost:3001/api/persons tapahtuvalla HTTP POST -pyynnöllä.
- Uuden puhelintiedon tunniste generoidaan funktiolla `Math.random`

### Tehtävä 3.6
- Toimii ongelmitta
- Lisätty uuden numeron lisäykseen virheiden käsittely mikäli:
    - Nimi tai numero puuttuu
    - Lisättävä nimi on jo luettelossa
    - Vastataan virhetilanteisiin statuskoodilla `400` ja kerrotaan virheen syy

### Tehtävä 3.7
- Toimii ongelmitta
- Lisätty sovellukseen loggausta tekevä middleware `morgan`.
- Testattu toimivaksi myös `dev`-tilassa, logaus ilmestyy konsoliin kun esim. pyyntöjä saadaan

### Tehtävä 3.8
- Toimii ongelmitta
- Backend toimii edellisessä osassa tehdyn puhelinluettelon frontendin kanssa
- Ratkaisu sijaitsee kansiossa `/from 3-8` (ratkaisun 3-10 kanssa)

### Tehtävä 3.9*
- Ylim. vapaaehtoinen tehtävä
- Jätetty tekemättä palautettaessa!

### Tehtävä 3.10
- Toimii ongelmitta
- Generoitu frontendistä tuotantoversio
- Muutettu backendia tarjoamaan kyseistä tuotantoversiota käyttämällä static-middlewarea.
- Ratkaisu sijaitsee kansiossa `/from 3-8`, sillä tuotantoversio oli luonnollista rakentaa samaan kansioon

### Tehtävä 3.11
- Toimii ongelmitta
- Tehty jälleen sijaintiin `/from 3-8`, lisätty `mongo.js`.
    - Tämän tehtävän aikainen versio samassa sijainnissa tiedostossa `mongo-3-11.js`
- Lisätty siis toiminnallisuus lisätä henkilöitä MongoDB tietokantaan komentoriviltä esim. seuraavasti:
    - Lisää tietokantaan: `node mongo.js yourpassword "Arto Vihavainen" 040-1234556`
    - Tulosta tietokannassa olevat numerotiedot: `node mongo.js yourpassword`

### Tehtävä 3.12
- Toimii ongelmitta
- Backend hakee näytettävät puhelintiedot MongoDB-tietokannasta
- Frontend toimii edelleen muutosten jälkeen
- Lisääminen ei vielä onnistu tietokantaan (toteutus seuraavassa tehtävässä)
- Sijainnissa `/from 3-8`, tiedostossa `index-3-12.js`
    - Sijaintiin lisätty myös `/models` kansio, jossa Mongoose-spesifinen koodi on eriyttetty omaan moduuliinsa `person.js`

### Tehtävä 3.13
- Toimii ongelmitta
- Backend hakee näytettävät puhelintiedot MongoDB-tietokannasta ja uudet numerot tallennetaan tietokantaan
    - Eli tietokantaan lisääminen onnistuu tässä vaiheessa
- Myös frontend toimii edelleen muutosten jälkeen
- Sijainnissa `/from 3-8`, tiedostossa `index-3-13.js`

### Tehtävä 3.14
- Toimii ongelmitta
- Edellisten toimintojen lisäksi nyt myös numerotietojen poistaminen päivittyy MongoDB-tietokantaan.
- Sijainnissa `/from 3-8`, tiedostossa `index-3-14.js`

### Tehtävä 3.14.5 (oma välivaihe)
- Toimii ongelmitta
- Edellisten toimintojen lisäksi nyt Id:n avulla hakeminen onnistuu
- Lisätty toiminnallisuus virheitten käsittelyyn
    - Ilmoittaa virhekoodin `404` mikäli haetaan id:tä, joka ei ole olemassa
    - Ilmoittaa virhekoodin `400` mikäli yritetään poistaa vääränlaisen id:n omaavaa henkilöä
- *Virheitä ei kuitenkaan käsitellä middlewaren avulla, vaan poikkeuksen aiheuttavan virhetilanteen käsittelevä koodi on kirjoitettu muun koodin sekaan*
- Sijainnissa `/from 3-8`, tiedostossa `index-3-14-5.js`
- Tämän tehtävän vastaus on myös sijainnissa `index.js`
    - Tämä siksi, sillä tämä vastayson myös viimeinen varmasti toimiva sovellus, joka on testattu laajasti jokaisen ominaisuuden osalta

### Tehtävä 3.15
- Toimii osittain, edeltävät ominaisuudet toimivat, mutta middlewaren toiminnallisuuden vieminen loppuun on tehty vain osittain
- Sijainnissa `/from 3-8`, tiedostossa `index-3-15-try.js`
- Virheidenkäsittelijä-middleware on lisätty ja formatoitu sovellukseen, mutta sen toiminta käytännössä on ontuvaa
- Syynä on todennäköisesti seuraava:
    - CastErrorin nappaaminen toimisi, mikäli id:nä käytettäisiin MongoDB-tietokannan "_id":tä erillisen parametrin "id" sijaan.
    - Nyt jokaisella henkilötiedolla on kaksi id:tä, mikä hankaloittaa niiden hakemista ja poistamista.
    - Kun kokeillaan virheellisen "id":n (**ei MongoDB-tietokannan oman "_id":n**) perusteella poistaa `delete_person.rest`-tiedoston avulla, jää pyyntö "Waiting"-tilaan odottamaan, että löytyisi olemattoman id:n omaava henkilö.
    - Voitaisiin yrittää korjata poistamalla kokonaan vanha "id" ja siirtyä käyttämään MongoDB:n "_id":tä, mutta tämä voisi rikkoa tähänastisen toiminnallisuuden, joka on riippuvainen alkuperäisestä vanhasta "id:stä"

#### CastErrorin nappaaminen toimii, kun `app.delete` muuttettiin seuraavanlaiseksi:

```
app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})
```

Tällöin pyynnön parametrinä tulee antaa MongoDB-tietokannan oma "_id". Täten toiminnallisuuden saisi poistamalla kokonaan vanha "id" käytöstä ja siirtyä käyttämään MongoDB:n tarjoamaa "_id":tä