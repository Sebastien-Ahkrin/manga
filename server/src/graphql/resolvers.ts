import { uuid as generate } from 'uuidv4'
import { read, create, update, deleteM } from './../database'
import { Episode } from '../types'

const resolvers: Object = {
  Query: {
    get: async (_: any, { id }: { id: string }) => {
      return await read.listOne(id)
    },
    getAll: async (_: any) => {
      const ids: string[] = await (await read.listAll()).map(id => id.replace('.json', ''))
      const episodes: Promise<Array<Episode>> = Promise.all(ids.map(id => read.listOne(id)))
      return episodes
    },
    set: async (_: any, { name, grade, code }: Episode) => {
      const uuid = generate()
      return await create.createManga({ id: uuid, name, grade, code })
    },
    update: async (_: any, { id, episode }: { id: string, episode: Episode }) => {
      return await update.updateManga(id!, { ...episode, id})
    },
    delete: async (_: any, { id }: { id: string }) => {
      const old = await read.listOne(id)
      await deleteM.deleteManga(id)
      return old
    }
  }
}

export default resolvers