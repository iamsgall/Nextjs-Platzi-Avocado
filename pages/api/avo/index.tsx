import { NextApiRequest, NextApiResponse } from "next";
import DB from '@database'

const AllAvos = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = new DB()
    const allEntries = await db.getAll()
    res.json(allEntries)
}

export default AllAvos;