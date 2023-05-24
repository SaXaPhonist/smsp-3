import { apiClient } from '@/apiConfig/config';
import SearchInput from '@/components/SearchInput';
import VacansyCard from '@/components/VacancyCard';
import IndustryFilter from '@/components/filters/IndustryFilter';
import SalaryFilter from '@/components/filters/SalaryFilter';
import { MAX_PAYMENT_TO } from '@/const';
import { IJob } from '@/types';
import {
  Container,
  Title,
  Button,
  CloseButton,
  Text,
  Grid,
  Pagination,
  Loader,
} from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';

interface IPayments {
  paymentFrom: number;
  paymentTo: number;
}

export default function Jobs() {
  const [jobs, setJobs] = useState<IJob[]>();
  const [categoryValue, setCategoryValue] = useState('');
  const [searchVal, setSearchVal] = useDebouncedState('', 300);
  const [payments, setPayments] = useState<IPayments>({ paymentFrom: 0, paymentTo: 0 });
  const [isLoading, setIsloading] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  const getJobs = async (search = '') => {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        throw new Error('Token is not provided');
      }
      setIsloading(true);
      const res = await apiClient('/vacancies', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          published: 1,
          keyword: search,
          payment_from: payments.paymentFrom || 0,
          payment_to: payments.paymentTo || MAX_PAYMENT_TO,
          catalogues: parseInt(categoryValue) || 0,
        },
      });
      setJobs(res.data.objects);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  const handleChange = () => {
    getJobs(searchVal);
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <Container className=" max-w-[69.75rem] p-0 m-y-[10rem]">
      <Button onClick={() => setIsFilterOpen((state) => !state )} className="bg-defaultButtonColor w-full md:hidden">Показать фильтры</Button>
      <Grid
        columns={2}
        className="w-full flex-col md:flex-row flex-nowrap m-0 md:gap-3 lg:gap-5 xl:gap-7"
      >
        <Grid.Col
          className={
            `${isFilterOpen ? '':'hidden'} md:flex md:w-full mb-7 md:mb-0 md:max-w-xs h-[22.5rem] p-5 flex-col bg-[rgb(var(--background-color-second))] rounded-xl`
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
            <IndustryFilter setValueForSearch={setCategoryValue} />
          </section>
          <section className="mb-5">
            <SalaryFilter setPayments={setPayments} />
          </section>
          <Button
            data-elem="search-button"
            className="bg-defaultButtonColor"
            onClick={() => getJobs(searchVal)}
          >
            Применить
          </Button>
        </Grid.Col>
        <Grid.Col className="w-full md:max-w-2xl flex-auto p-0 lg:max-w-3xl">
          <section className="mb-4">
            <SearchInput handleChangeValue={handleChangeValue} handleChange={handleChange} />
          </section>
          <section className="w-full [&>*]:mb-3 [&>*:last-child]:mb-0 mb-10">
            {!isLoading && jobs ? (
              jobs.map(
                ({
                  id,
                  profession,
                  firm_name,
                  payment_from,
                  payment_to,
                  currency,
                  town,
                  type_of_work,
                  vacancyRichText,
                  ...otherProps
                }) => (
                  <VacansyCard
                    key={id}
                    {...{
                      id,
                      profession,
                      firm_name,
                      payment_from,
                      payment_to,
                      currency,
                      town: town.title,
                      type_of_work: type_of_work.title,
                      vacancyRichText,
                    }}
                  />
                ),
              )
            ) : !isLoading && Array.isArray(jobs) && !jobs.length ? (
              <p>Результатов не найдено</p>
            ) : (
              <div className="flex justify-center mt-12">
                <Loader size={'xl'} variant={'dots'} />
              </div>
            )}
          </section>
          <section className="flex justify-center">
            <Pagination total={5} />
          </section>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
