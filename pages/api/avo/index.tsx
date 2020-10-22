import { IncomingMessage, ServerResponse } from "http";
import DB from '@database'

const AllAvos = async (req: IncomingMessage, res: ServerResponse) => {
    const db = new DB()
    const allEntries = await db.getAll()
    const length = allEntries.length

    res.statusCode = 200 //ok
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify({ message: allEntries, length }))

}

export default AllAvos;