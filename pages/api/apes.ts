import type { NextApiRequest, NextApiResponse } from 'next'
import {_name, _maxSupply, _price, _currentSupply, _revealTimeStamp, _apesReveal} from '@/lib/stats.ether'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  const payload = {
    name: await _name(),
    price: await _price(),
    maxSupply: await _maxSupply(),
    currentSupply: await _currentSupply(),
    revealTimeStamp: await _revealTimeStamp(),
    apesReveal: await _apesReveal(),

  }

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json(payload)
      break
    case 'POST':
      res.status(200).json({ })
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
