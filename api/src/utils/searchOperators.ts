import { Like, Not } from 'typeorm';

type SearchOperators = {
  [key: string]: (term: string) => object;
};

export const searchOperators: SearchOperators = {
  'u:': (term: string) => {
    const username = term.substring(2);
    return { author: { username } };
  },
  '-:': (term: string) => {
    const excludedTerm = term.substring(2);
    return { content: Not(Like(`%${excludedTerm}%`)) };
  },
  '!:': (term: string) => {
    const exactTerm = term.substring(2);
    return { content: exactTerm };
  },
};
