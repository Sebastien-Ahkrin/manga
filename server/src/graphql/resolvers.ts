import { read } from './../database'

const resolvers: Object = {
  Query: {
    get: async (_: any, { uuid }: { uuid: string }) => {
      return JSON.parse(await read.listOne(uuid))
    }
  }
}

export default resolvers