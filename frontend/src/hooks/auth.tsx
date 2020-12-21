import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface User {
  id: string;
  email: string;
  name: string;
}

interface Adm {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  token: string;
  user: User | null;
  adm: Adm | null;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User | null;
  adm: Adm | null;
  signIn(credentials: Credentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@cristal:token');
    const user = localStorage.getItem('@cristal:user');
    const adm = localStorage.getItem('@cristal-adm:user');

    if (adm && token) {
      return { token, adm: JSON.parse(adm), user: null };
    }

    if (token && user) {
      return { token, user: JSON.parse(user), adm: null };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user, adm } = response.data;

    localStorage.setItem('@cristal:token', token);

    if (adm) {
      localStorage.setItem('@cristal-adm:user', JSON.stringify(user));
      setData({ token, user: null, adm: user });
    } else {
      localStorage.setItem('@cristal:user', JSON.stringify(user));
      setData({ token, user, adm: null });
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@cristal:token');
    localStorage.removeItem('@cristal:user');

    localStorage.removeItem('@cristal-adm:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, adm: data.adm, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
