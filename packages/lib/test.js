import test from 'ava'
import m from '.'

test('main', async t => {
  const fixture = await m({
    legislature: 15,
    scrutin: 1116
  })
  t.is(fixture.length, 167)
  t.deepEqual(fixture[5], {
    fullName: 'Delphine Bagarry',
    name: 'Bagarry',
    vote: 'Pour',
  })
})

test('filter', async t => {
  const fixture = await m({
    legislature: 15,
    scrutin: 1116,
    voteTypes: ['Contre']
  })
  t.is(fixture.length, 30)
  t.deepEqual(fixture[5], {
    fullName: 'Claude Goasguen',
    name: 'Goasguen',
    vote: 'Contre',
  })
})

test('error data', async t => {
  const fixture = {
    legislature: 8,
    scrutin: 1116
  }
  await t.throwsAsync(m(fixture))
})

test('error option', t => {
  t.throws(m, Error)
})
