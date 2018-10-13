'use strict'
const fetch = require('node-fetch')
const cheerio = require('cheerio')

const scrutScrap = (opts) => {
  const options = Object.assign({
    legislature: 0,
    scrutin: 0,
    voteTypes: ['Pour', 'Contre', 'Non-votants']
  }, opts)

  if (options.legislature <= 0 || options.scrutin <= 0) {
    throw new Error('Bad options')
  }

  return fetch(`https://secure2.assemblee-nationale.fr/scrutins/detail/(legislature)/${options.legislature}/(num)/${options.scrutin}`)
    .then(res => res.text())
    .then(html => {
      const $ = cheerio.load(html)

      let scrutin = []

      $('.TTgroupe').each((i, group) => {
        for (const vote of options.voteTypes) {
          $(group).find(`.${vote} ul.deputes li`).each((i, depute) => {
            scrutin.push({
              fullName: $(depute).text().trim(),
              name: $(depute).find('b').text().trim(),
              vote
            })
          })
        }
      })

      if (scrutin.length === 0) {
        throw new Error('No data')
      }

      return scrutin
    })
}

module.exports = scrutScrap
