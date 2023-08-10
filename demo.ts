import { readFile, writeFile } from 'node:fs/promises'

const putDemo = async () => {
  const html = (await readFile('./index.html')).toString()
  const replaced = html.replace(/demo.tsx/, 'demo.mjs')

  await writeFile('./dist/index.html', replaced)
}

await putDemo()
