import stringify, { path } from './../util'
import { promises as fs } from 'fs'

interface Properties {
  name: string,
  grade: number,
  code: string,
  id: string
}

async function create (data: Properties): Promise<string> {
  await fs.mkdir(path, { recursive: true })
  await fs.writeFile(stringify(data.id), JSON.stringify(data))
  return data.id
}

export default create
export { Properties }