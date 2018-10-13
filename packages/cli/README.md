# scrutin-scraper-cli

## Install

```
$ npm install --global scrutin-scrapper-cli
```


## Usage

```
$ scrutin-scrapper --help

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
