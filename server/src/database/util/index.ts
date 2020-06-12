const path = `${__dirname}/../../../db`

function stringify (uuid: string): string {
  return `${path}/${uuid}.json`
}

export default stringify
export { path }