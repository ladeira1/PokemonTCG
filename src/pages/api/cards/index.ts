import { NextApiRequest, NextApiResponse } from 'next';
import { pokemonApi } from 'services/api';
import { parseFilterParams } from 'utils/parseFilterParams';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { query } = req;
      const response = await pokemonApi.get(
        `/cards?${parseFilterParams(query)}`,
      );

      return res.status(200).json(response.data);
    }
    return res.status(400).json({ error: 'Invalid request' });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export default handler;
