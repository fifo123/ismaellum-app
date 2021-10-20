/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserModel } from '../../types/models/user.model';

type UserType = Partial<UserModel>;

export interface UserContext {
  user?: UserType;
  setUser: (data: UserType) => void;
}

export const UserContext = createContext<UserContext>({
  user: {},
  setUser: (user: UserType) => user
});

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const localUser = localStorage.getItem('user');
    if (localUser) {
      const jsonUser = JSON.parse(localUser) as Partial<UserModel>;
      setUser({
        ...jsonUser
      });
    }
  }, [setUser]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
