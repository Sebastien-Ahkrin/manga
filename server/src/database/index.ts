import createManga from './crud/create'
import deleteManga from './crud/delete'
import { listAll, listOne } from './crud/read'
import updateManga from './crud/update'

const read = { listAll, listOne }
const create = { createManga }
const deleteM = { deleteManga }
const update = { updateManga }

export { read, create, deleteM, update }