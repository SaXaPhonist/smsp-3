import SearchInput from '@/components/SearchInput';
import VacansyCard from '@/components/VacancyCard';
import IndustryFilter from '@/components/filters/IndustryFilter';
import SalaryFilter from '@/components/filters/SalaryFilter';
import { Container, Title, Button, CloseButton, Text, Grid, Pagination } from '@mantine/core';

export default function Jobs() {
  return (
    <Container className=" max-w-[69.75rem] p-0 m-y-[10rem]">
      <Button className="bg-defaultButtonColor w-full md:hidden">Показать фильтры</Button>
      <Grid
        columns={2}
        className="w-full flex-col md:flex-row flex-nowrap m-0 md:gap-3 lg:gap-5 xl:gap-7"
      >
        <Grid.Col
          className={
            'hidden md:flex md:w-full mb-7 md:mb-0 md:max-w-xs h-[22.5rem] p-5 flex-col bg-[rgb(var(--background-color-second))] rounded-xl'
          }
        >
          <div className="mb-8 flex flex-row items-center justify-between">
            <Title order={3} size="1.25rem" className="mr-auto">
              Фильтры
            </Title>
            <Text fz={'sm'} c={'dimmed'}>
              Сбросить все
            </Text>
            <CloseButton />
          </div>
          <section className="mb-5">
            <IndustryFilter />
          </section>
          <section className="mb-5">
            <SalaryFilter />
          </section>
          <Button data-elem="search-button" className="bg-defaultButtonColor">
            Применить
          </Button>
        </Grid.Col>
        <Grid.Col className="w-full md:max-w-2xl flex-auto p-0 lg:max-w-3xl">
          <section className="mb-4">
            <SearchInput />
          </section>
          <section className="w-full [&>*]:mb-3 [&>*:last-child]:mb-0 mb-10">
            <VacansyCard />
            <VacansyCard />
            <VacansyCard />
            <VacansyCard />
            <VacansyCard />
          </section>
          <section className="flex justify-center">
            <Pagination total={5} />
          </section>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
