import stringify, { path } from './../util'
import { promises as fs } from 'fs'

function listAll (): Promise<string[]> {
  return fs.readdir(path)
}

function listOne (uuid: string): Promise<string> {
  return fs.readFile(stringify(uuid), { encoding: 'utf-8' })
}

export { listAll, listOne }