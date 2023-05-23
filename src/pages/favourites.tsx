import VacansyCard from '@/components/VacancyCard';
import { IJobSerialized } from '@/types';
import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px, Grid, Pagination } from '@mantine/core';
import { useEffect, useState } from 'react';

export default function Favourites() {
  const [favVaccancies, setFavVacancies] = useState<IJobSerialized[]>()
  const [isFav, setIsFav] = useState(true)
  const theme = useMantineTheme();

  const getFavourites = () => {
    const favouritesStr = localStorage.getItem('favourites')
    if(favouritesStr){
      setFavVacancies(JSON.parse(favouritesStr))
    }
  }

  useEffect(() => {
    getFavourites()
  }, [])

  useEffect(() => {
    getFavourites()
  }, [isFav])

  return (
    <Container className=" max-w-[69.75rem] p-0 m-y-[10rem]">
      <Grid
        columns={1}
        className="w-full justify-center flex-col md:flex-row flex-nowrap m-0 md:gap-3 lg:gap-5 xl:gap-7"
      >
         <Grid.Col className="w-full md:max-w-2xl flex-auto p-0 lg:max-w-3xl">
          <section className="w-full [&>*]:mb-3 [&>*:last-child]:mb-0 mb-10">
            {favVaccancies ? favVaccancies.map((vacancy => <VacansyCard isFav={true} setIsFav={setIsFav}  {...vacancy}/>)): <p>Пока ничего нет</p>}
          </section>
          <section className="flex justify-center">
            <Pagination total={5} />
          </section>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
