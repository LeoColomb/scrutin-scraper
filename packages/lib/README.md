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

const scrutin = await scrutScrap({
  legislature: 15,
  scrutin: 1116,
  voteTypes: ['Pour', 'Contre', 'Non-votants']
})

console.log(scrutin)
// => [{
//        name: 'Dupond',
//        fullName: 'Jean Dupond',
//        vote: 'Pour'
//     }, ...]

console.log(JSON.stringify(scrutin))
// => JSON data

var csvStringify = require('csv-stringify')
csvStringify(scrutin, { header: true }, (err, output) => console.log(output))
// => CSV data
```

## License

ISC © [Léo Colombaro](https://colombaro.fr)
