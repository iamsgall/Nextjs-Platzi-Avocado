import DB from '@database'
import { NextApiRequest, NextApiResponse } from "next";

const AllAvos = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = new DB()
    const id = req.query.avoId
    const entry = await db.getById(id as string)
    res.json(entry)

}

export default AllAvos;