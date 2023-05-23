import { Card, Text } from '@mantine/core';
import LocationIcon from '../../public/location.svg';
import StarIcon from '../../public/Star 2.svg';
import Image from 'next/image';
import { IJobSerialized } from '@/types';
import Link from 'next/link';
import { useRef, useState } from 'react';

const LOCAL_STORAGE_KEY = 'favourites';

export default function VacansyCard({ setIsFav, ...props }: IJobSerialized) {
  const favouriteRef = useRef<boolean | null>(null);
  const togglePaint = useState(false)[1]

  const setFavIcon = () => {
    favouriteRef.current = true;
    togglePaint(true)
  };
  const removeFavIcon = () => {
    favouriteRef.current = false;
    setIsFav && setIsFav(false);
    togglePaint(false)
  };

  const deleteVacancyFromFav = (
    currentVacancy: IJobSerialized,
    favourites: IJobSerialized[],
  ): void => {
    const arrWithoutCurrentVacancy = favourites.filter(
      (vacancy) => vacancy.id !== currentVacancy.id,
    );
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arrWithoutCurrentVacancy));
  };

  const checkIfAlreadyFav = (currentVacancy: IJobSerialized, favourites: IJobSerialized[]) => {
    return favourites.some((fav) => fav.id === currentVacancy.id);
  };

  const addToFavourite = (vacancy: IJobSerialized) => {
    const newFavVacancy = { ...vacancy };
    console.log('in new fav', newFavVacancy);
    if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([newFavVacancy]));
      setFavIcon();
      return;
    }

    const favouritesStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (favouritesStr) {
      const favourites = JSON.parse(favouritesStr);
      if (checkIfAlreadyFav(newFavVacancy, favourites)) {
        removeFavIcon();
        deleteVacancyFromFav(newFavVacancy, favourites);
        return;
      }
      favourites.push(newFavVacancy);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favourites));
      setFavIcon();
    }
  };

  return (
    <Card key={props.id} radius={'md'} shadow="xs" padding={'xl'} className="flex flex-row">
      <div className="flex flex-col mr-auto">
        <section className="mb-3">
          <Link
            href={{
              pathname: '/jobs/[id]',
              query: {
                ...props,
              },
            }}
          >
            <Text c={'#5E96FC'} fz={'xl'} fw={600}>{`${props.profession} ${props.firm_name}`}</Text>
          </Link>
        </section>
        <section className="flex flex-row items-center mb-3">
          <Text fz={'md'} fw={600}>
            зп от{' '}
            {`${props.payment_from || 'договорная'} до ${props.payment_to || 'договорная'}${
              props.currency
            }`}
          </Text>
          <span className="w-[5px] h-[5px] mx-3 bg-gray-500 rounded-full"></span>
          <Text fz={'md'}>{props.type_of_work}</Text>
        </section>
        <section className="flex flex-row">
          <Image src={LocationIcon} alt="location" />
          <Text fz={'md'} className="ml-3">
            {props.town}
          </Text>
        </section>
      </div>
      <div onClick={() => addToFavourite(props)}>
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill={favouriteRef.current || props.isFav ? '#5E96FC':"none"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.97183 1.70846C10.4382 0.933481 11.5618 0.933482 12.0282 1.70847L14.3586 5.58087C14.5262 5.85928 14.7995 6.05784 15.116 6.13116L19.5191 7.15091C20.4002 7.35499 20.7474 8.42356 20.1545 9.10661L17.1918 12.5196C16.9788 12.765 16.8744 13.0863 16.9025 13.41L17.2932 17.9127C17.3714 18.8138 16.4625 19.4742 15.6296 19.1214L11.4681 17.3583C11.1689 17.2316 10.8311 17.2316 10.5319 17.3583L6.37038 19.1214C5.53754 19.4742 4.62856 18.8138 4.70677 17.9127L5.09754 13.41C5.12563 13.0863 5.02124 12.765 4.80823 12.5196L1.8455 9.1066C1.25257 8.42356 1.59977 7.35499 2.48095 7.15091L6.88397 6.13116C7.20053 6.05784 7.47383 5.85928 7.64138 5.58087L9.97183 1.70846Z"
            stroke="#ACADB9"
            stroke-width="1.5"
          />
        </svg>
      </div>
    </Card>
  );
}
