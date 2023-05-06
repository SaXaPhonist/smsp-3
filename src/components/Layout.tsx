import { links } from '@/const';
import { HeaderResponsive }  from './Header';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps): JSX.Element => {
  return (
    <>
      <HeaderResponsive links={links} />
      {children}
    </>
  );
};

export default Layout;
