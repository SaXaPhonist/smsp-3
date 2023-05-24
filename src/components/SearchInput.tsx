import { TextInput, ActionIcon, useMantineTheme, Button } from '@mantine/core';
import searchIcon from '../../public/searchIcon.svg';
import Image from 'next/image';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export default function SearchInput({
  handleChange,
  handleChangeValue,
}: {
  handleChange: () => void;
  handleChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <TextInput
      icon={<Image src={searchIcon}  alt="search" />}
      radius={'md'}
      onChange={handleChangeValue}
      data-elem="search-input"
      classNames={{ input: 'h-12 m-w-3xl py-2 px-3 border-none', icon: 'z-0' }}
      rightSection={
        <Button
          data-elem="search-button"
          onClick={handleChange}
          className="bg-defaultButtonColor h-8"
          radius="xs"
          size="sm"
        >
          Поиск
        </Button>
      }
      placeholder="Введите название вакансии"
      rightSectionWidth={95}
    />
  );
}
