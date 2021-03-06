# Äpy.fi

Wappulehti Äpyn verkkosivut.

## Kehittäminen

Alla ohjeet lokaaliajoon.

### Vaatimukset

Asenna Node.js (v8.11.3) ja yarn esim. homebrew'n avulla.

```
# Homebrew (valinnainen)
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew install node
brew install yarn
```

Asenna gatsby-cli yarnin avulla.

```
yarn global add gatsby-cli
```

### Asennus

Paikallinen kehittäminen onnistuu seuraavilla komennoilla:

```
yarn install
yarn develop
```

### Koodityyli

Tiedostot .eslintrc ja .prettierrc sisältävät koodin tyylimäärittelyjä. Käytössä on [ESLint](https://eslint.org/) ja [Prettier](https://prettier.io/)

## Konfigurointi

Nettisivujen ilmettä on mahdollista muuttaa .env tiedoston muuttujien avulla. `GATSBY_THEME` muuttuja kontrolloi etusin logokomponenttia (<Logo /> vs <Logo2019 />) sekä modalin ja navbarin logoa.

Sivujen ulkonäkö eri `.env` tiedoston konfiguraatioilla:
```
# Used throughout different components to use a yearly logo/textures
GATSBY_THEME='ajaton'
# Whether to show the logo or a video on index
GATSBY_INDEX_VIDEO=false
```

![.env tiedosto esimerkkikuva](docs/env-example-ajaton-1.png)

```
# Used throughout different components to use a yearly logo/textures
GATSBY_THEME='2019'
# Whether to show the logo or a video on index
GATSBY_INDEX_VIDEO=false
```

![.env tiedosto esimerkkikuva](docs/env-example-2019-1.png)
![.env tiedosto esimerkkikuva](docs/env-example-2019-2.png)

## Käyttöönotto

Gatsby production build ja servaus

```
gatsby build && gatsby serve
```

*TODO deployaus*

## Rakennuspalikat

* [React](https://reactjs.org/) - Javascript UI-kirjasto
* [Gatsby](https://www.gatsbyjs.org/) - Generoi Reactin staattisia sivuja

## Kehittäjät

* Timo Riski

## Lisenssi

MIT lisenssi - [LICENSE](LICENSE).
