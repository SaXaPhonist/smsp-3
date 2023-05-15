import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px } from '@mantine/core';

const getChild = (height: number) => <Skeleton height={height} radius="md" animate={false} />;
const BASE_HEIGHT = 596;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

export default function FavouritesSkeleton() {
  const theme = useMantineTheme();
  return (
    <Container my="md">
      <SimpleGrid cols={1} spacing={'6rem'} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
        {getChild(getSubHeight(1, px(theme.spacing.md)))}
        {getChild(getSubHeight(13, px(theme.spacing.md)))}
      </SimpleGrid>
    </Container>
  );
}
