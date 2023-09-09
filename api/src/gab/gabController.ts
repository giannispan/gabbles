import { Gab } from '../data';
import { save, getGabs } from './gabServices';

export const createGab = async (gab: Gab) => {
  try {
    const savedGab = await save(gab);
    return savedGab;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to save gab');
  }
};

export const fetchGabs = async (searchTerm?: string) => {
  try {
    const gabs = await getGabs(searchTerm);
    return gabs;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to retrieve gabs');
  }
};
