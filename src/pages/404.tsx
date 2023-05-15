import { createStyles, Title, Text, Button, Container, Group, rem } from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/router';
import searchingImg from '../../public/man_searching.png';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(220),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(120),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(500),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}));

export default function NotFoundPage() {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Container className={`${classes.root}`}>
      <div className='flex justify-center'>
        <Image src={searchingImg} alt="not found page" />
      </div>
      <Text color="dimmed" size="lg" align="center" className={classes.description}>
        Упс, здесь еще ничего нет!
      </Text>
      <Group position="center">
        <Button
          size="md"
          onClick={() => router.push('/jobs')}
          variant={'filled'}
          className="bg-[#DEECFF]"
        >
          Поиск вакансий
        </Button>
      </Group>
    </Container>
  );
}
