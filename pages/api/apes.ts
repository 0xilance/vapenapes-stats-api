import type { NextApiRequest, NextApiResponse } from 'next'
import {_name} from '@/lib/stats.ether'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  const _getResponse = async () => {
    return {
      name: "holla"
    }
  }

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json(await _getResponse())
      break
    case 'POST':
      res.status(200).json({ })
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
