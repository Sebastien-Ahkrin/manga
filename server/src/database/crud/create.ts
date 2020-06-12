import stringify, { path } from './../util'
import { promises as fs } from 'fs'
import { Episode } from '../../types'

interface Properties {
  name: string,
  grade: number,
  code: string,
  id: string
}

async function create (data: Properties): Promise<Episode> {
  await fs.mkdir(path, { recursive: true })
  await fs.writeFile(stringify(data.id), JSON.stringify(data))
  return data as Episode
}

export default create
export { Properties }