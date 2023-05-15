import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px } from '@mantine/core';

const getChild = (height: number) => <Skeleton height={height} radius="md" animate={false} />;
const BASE_HEIGHT = 660;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

export default function JobsSkeleton() {
  const theme = useMantineTheme();
  return (
    <Container my="md">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
        {getChild(getSubHeight(2, px(theme.spacing.md)))}
        <Stack>
          {getChild(getSubHeight(8, px(theme.spacing.md)))}
          {getChild(getSubHeight(1, px(theme.spacing.md)))}
          {getChild(getSubHeight(8, px(theme.spacing.md)))}
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
