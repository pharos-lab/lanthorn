import path from 'path'
import fs from 'fs-extra'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
export async function add(componentName, outDir = 'src/components/ui') {
  const src = path.resolve(__dirname, '../src/components', componentName.toLowerCase())
  const dest = path.resolve(process.cwd(), outDir, componentName.toLowerCase())
  
  if (!fs.existsSync(src)) {
    console.error(`[lanthorn] Component "${componentName}" not found.`)
    return
  }

  if (fs.existsSync(dest)) {
    console.warn(`[lanthorn] "${componentName}.vue" already exists. Skipping.`)
    return
  }

  await fs.ensureDir(path.dirname(dest))
  await fs.copy(src, dest)
  console.log(`[lanthorn] "${componentName}.vue" copied to "${outDir}/${componentName}.vue"`)
}
