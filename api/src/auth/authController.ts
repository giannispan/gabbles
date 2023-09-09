import { findUser, saveUser } from './authServices';

export const login = async (username: string) => {
  try {
    let user = await findUser(username);
    if (!user) {
      user = await saveUser(username);
    }
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to login');
  }
};
