import { $ } from 'execa'

import commitlintConfig from './index.cjs'

test('should return the expected configuration', async () => {
  const { stdout } = await $`./node_modules/.bin/commitlint --print-config json`

  expect(JSON.parse(stdout)).toMatchObject({
    ...commitlintConfig,
    extends: ['.'],
  })
})
