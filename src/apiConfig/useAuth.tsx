import { useEffect, useState } from 'react';
import { apiClient } from './config';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(false);

  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      apiClient
        .get('/oauth2/password', {
          params: {
            login: process.env.NEXT_PUBLIC_LOGIN,
            password: process.env.NEXT_PUBLIC_PASSWORD,
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
          },
        })
        .then((res) => {
          localStorage.clear();
          localStorage.setItem('access_token', res.data.access_token);
          localStorage.setItem('refresh_token', res.data.refresh_token);
          setIsAuth(true);
        })
        .catch((err) => console.log(err));
      return;
    }
    setIsAuth(true);
  }, []);

  return [isAuth];
};
