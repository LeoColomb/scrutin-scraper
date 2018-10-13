# Scrutin Scraper Lib

> Scrapping Assemblée Nationale scrutin

_Lib for [Scrutin Scraper](https://github.com/LeoColomb/scrutin-scraper)_

## Install

```bash
$ npm install scrutin-scraper
```

## Usage

```javascript
const scrutScrap = require('scrutin-scraper')

const scrutin = scrutScrap({
  legislature: 15,
  scrutin: 1116
})
// => [{
//        name: 'Dupond',
//        fullName: 'Jean Dupond',
//        vote: 'Pour'
//     }, ...]
```

## License

ISC © [Léo Colombaro](https://colombaro.fr)
