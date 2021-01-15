import { NextApiRequest, NextApiResponse } from 'next'

import api from '@services/api'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  console.log(JSON.parse(req.body))

  const response = await api.post('/clothes', JSON.parse(req.body))

  res.status(response.status).send('')
}
