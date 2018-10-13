#!/usr/bin/env node
'use strict'
const meow = require('meow')
const scrutScrap = require('scrutin-scraper')
const Table = require('cli-table')

const cli = meow(`
  Usage
    $ scrutin-scraper

  Options
    --legislature, -l  Target legislature. eg: 15  [Required]
    --scrutin, -s   Target scrutin. eg: 1116  [Required]
    --voteTypes, -v   Vote types. Contre,Pour,Non-votants  [Default: all]
    --format, -f   Output format. json,standard,pretty  [Default: standard]

  Example
    $ scrutin-scraper --legislature=15 --scrutin=1116
`, {
  flags: {
    legislature: {
      type: 'string',
      alias: 'l'
    },
    scrutin: {
      type: 'string',
      alias: 's'
    },
    voteTypes: {
      type: 'string',
      alias: 'v'
    },
    format: {
      type: 'string',
      alias: 'f',
      default: 'standard'
    }
  }
})

if (!cli.flags.legislature || !cli.flags.scrutin) {
  console.log('Specify legislature and scrutin numbers')
  process.exit(1)
} else {
  scrutScrap(cli.flags)
    .then(data => {
      if (cli.flags.format === 'pretty') {
        const table = new Table()
        table.push(...data)
        console.log(table.toString())
      } else if (cli.flags.format === 'json') {
        console.log(JSON.stringify(data))
      } else {
        console.log(data)
      }
    })
}
