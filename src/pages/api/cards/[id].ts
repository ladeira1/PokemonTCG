import { NextApiRequest, NextApiResponse } from 'next';
import { pokemonApi } from 'services/api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { id } = req.query;
      const response = await pokemonApi.get(`/cards/${id}`);

      return res.status(200).json(response.data);
    }
    return res.status(400).json({ error: 'Invalid request' });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export default handler;
