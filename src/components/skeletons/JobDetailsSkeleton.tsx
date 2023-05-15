import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px } from '@mantine/core';

const getChild = (height: number) => <Skeleton height={height} radius="md" animate={false} />;
const BASE_HEIGHT = 548;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

export default function JobDetailsSkeleton() {
  const theme = useMantineTheme();
  return (
    <Container my="md">
      <SimpleGrid cols={1} spacing={'xl'} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
        {getChild(getSubHeight(3.4, px(theme.spacing.md)))}
        {getChild(getSubHeight(1, px(theme.spacing.md)))}
      </SimpleGrid>
    </Container>
  );
}
