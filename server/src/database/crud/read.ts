import stringify, { path } from './../util'
import { promises as fs } from 'fs'
import { Episode } from '../../types'

function listAll (): Promise<string[]> {
  return fs.readdir(path)
}

async function listOne (uuid: string): Promise<Episode> {
  const value: string = await fs.readFile(stringify(uuid), { encoding: 'utf-8' })
  return JSON.parse(value) as Episode
}

export { listAll, listOne }