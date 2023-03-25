# Web-ohjelmointi: Puhelinluettelo-backend -projekti
## Osa 3, tehtävät 3.1 - [loppu tähän!]

### Tärkeää
- Tehtävän 3.7 jälkeen kansiorakenne on formatoitu uudelleen ja tehtävän 3.7. jälkeen tehtävät tullaan kokoamaan omiin tehtäväkohtaisiin kansioihinsa.
    - Ensimmäinen näistä on tehtävä 3.8.
- Tehtävät 3.1 -> 3.7 löytyvät kansiosta `/until 3-7/`
    - Täällä Vanhojen vastauksien `index.js` -tiedostot sisältyvät ja ovat nimetty kunkin tehtävän mukaan (esim. `index-3-2.js` tehtävälle 3.2 jne.).
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
