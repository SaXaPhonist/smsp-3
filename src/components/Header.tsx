import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logoImg from '../../public/UnionLogo.svg';
import logoText from '../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HEADER_HEIGHT = rem(84);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    marginBottom: '1rem',

    [theme.fn.largerThan('sm')]: {
      marginBottom: '2.5rem',
    },
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    backgroundColor: '#fff',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    marginLeft: 'auto',
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    position: 'relative',
    zIndex: 2,
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState<string | null>(links[0].link);
  const { classes, cx } = useStyles();
  const router = useRouter();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      prefetch={false}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Image
          className="mr-"
          src={logoImg}
          alt="logo"
          onClick={() => {
            setActive(null);
            close();
            router.push('/');
          }}
        />
        <Image
          className="mr-"
          src={logoText}
          alt="logo"
          onClick={() => {
            setActive(null);
            close();
            router.push('/');
          }}
        />
        <Group position="center" spacing={60} className={`${classes.links} mx-auto`}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
