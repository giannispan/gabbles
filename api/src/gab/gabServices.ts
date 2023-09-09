import { Gab, gabRepository } from '../data';
import { Like } from 'typeorm';
import { searchOperators } from '../utils/searchOperators';

export const save = async (gab: Gab) => {
  return await gabRepository.save(gab);
};

export const getGabs = async (searchTerm: string) => {
  const terms = searchTerm?.split(' ');
  return await gabRepository.find({
    where: searchTerm
      ? terms.map((term) => {
          const operator = Object.keys(searchOperators).find((op) => term.startsWith(op));
          if (operator) {
            return searchOperators[operator](term);
          }
          return { content: Like(`%${term}%`) };
        })
      : {},
    order: { authoredAt: 'desc' },
    relations: { author: true },
  });
};
