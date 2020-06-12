import { uuid as generate } from 'uuidv4'
import { read, create } from './../database'
import { Episode } from '../types'

const resolvers: Object = {
  Query: {
    get: async (_: any, { uuid }: { uuid: string }) => {
      return await read.listOne(uuid)
    },
    set: async (_: any, { name, grade, code }: Episode) => {
      const uuid = generate()
      return await create.createManga({ id: uuid, name, grade, code })
    }
  }
}

export default resolvers