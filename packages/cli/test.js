import test from 'ava'
import execa from 'execa'
import scrutScrap from 'scrutin-scraper'

const flags = {
  legislature: 15,
  scrutin: 1116
}

test('main', async t => {
  const { stdout } = await execa('./cli.js', [
    '-l',
    flags.legislature,
    '-s',
    flags.scrutin,
    '--format=json'
  ])
  t.is(stdout, JSON.stringify(await scrutScrap(flags)))
})
