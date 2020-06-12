import client from '@/lib/api/client';

interface UserInfo {
  username: string,
  password: string,
}

export const login = ({ username, password }: UserInfo) =>
  client.post('/api/auth/login', { username, password });

export const register = ({ username, password }: UserInfo) =>
  client.post('/api/auth/register', { username, password });

export const check = () => client.get('/api/auth/check');
