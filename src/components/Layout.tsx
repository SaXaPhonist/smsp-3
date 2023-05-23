import { links } from '@/const';
import { HeaderResponsive }  from './Header';
import { useAuth} from '../apiConfig/useAuth'
import { Loader } from '@mantine/core';
interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps): JSX.Element => {
  const [isAuth] = useAuth()

  return (
    <>
      <HeaderResponsive links={links} />
      {isAuth ? children: <div className='flex justify-center mt-40'>
        <Loader size={'lg'} variant='dots' />
        </div>}
    </>
  );
};

export default Layout;
