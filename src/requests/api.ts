import axios from 'axios';
import { parseFilterParams } from 'utils/parseFilterParams';

export const cardsRequest = async (page: number, filter: string) => {
  const params: Record<string, any> = {
    orderBy: 'name',
    page,
    pageSize: 20,
    q: `${filter && `name:*${filter}*`} supertype:Pokemon`,
  };
  const response = await axios.get(`/api/cards?${parseFilterParams(params)}`);

  return response.data;
};
