import stringify from './../util'
import { promises as fs } from 'fs'
import { Episode } from '../../types'

async function update (uuid: string, data: Episode): Promise<Episode> {
  await fs.writeFile(stringify(uuid), JSON.stringify(data), { encoding: 'utf-8' })
  return data
}

export default update