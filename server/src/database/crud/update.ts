import stringify from './../util'
import { promises as fs } from 'fs'

async function update (uuid: string, data: object) {
  return await fs.writeFile(stringify(uuid), JSON.stringify(data))
}

export default update