
import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database'


const allAvos = async (request:NextApiRequest,response:NextApiResponse) => {
  const db = new DB()
  const avoId = request.query.id as string
  const avo = await db.getById(avoId)

  response.status(200).json(avo)
}

export default allAvos