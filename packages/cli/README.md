# Scrutin Scraper CLI

> Scrapping Assemblée Nationale scrutin

_CLI for [Scrutin Scraper](https://github.com/LeoColomb/scrutin-scraper)_

## Install

```bash
$ npm install --global scrutin-scraper-cli
```

## Usage

```bash
$ scrutin-scraper --help

  Usage
    $ scrutin-scraper

  Options
    --legislature, -l  Target legislature. eg: 15  [Required]
    --scrutin, -s   Target scrutin. eg: 1116  [Required]
    --voteTypes, -v   Vote types. Contre,Pour,Non-votants  [Default: all]
    --format, -f   Output format. json,standard,pretty  [Default: standard]

  Example
    $ scrutin-scraper --legislature=15 --scrutin=1116
```

## License

ISC © [Léo Colombaro](https://colombaro.fr)
