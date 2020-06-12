import rimraf from 'rimraf'
import { promisify } from 'util'

import stringify from './../util'

const unlink = promisify(rimraf)

function del (uuid: string): Promise<void> {
  return unlink(stringify(uuid))
}

export default del