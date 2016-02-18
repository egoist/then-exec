import test from 'ava'
import exec from './'

test('main', async t => {
	const {stdout} = await exec('ls .')
	t.true(stdout.indexOf('test.js') > -1)
})
