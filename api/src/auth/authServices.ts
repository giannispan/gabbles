import { userRepository } from '../data';

export const findUser = async (username: string) => {
  return await userRepository.findOneBy({ username });
};

export const saveUser = async (username: string) => {
  return await userRepository.save({ username });
};
