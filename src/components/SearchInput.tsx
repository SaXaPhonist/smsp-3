import { TextInput, TextInputProps, ActionIcon, useMantineTheme, Button } from '@mantine/core';
import searchIcon from '../../public/searchIcon.svg';
import Image from 'next/image';

export default function SearchInput(props: TextInputProps) {
  return (
    <TextInput
      icon={<Image src={searchIcon} alt="search" />}
      radius={'md'}
      data-elem="search-input"
      classNames={{ input: 'h-12 m-w-3xl py-2 px-3 border-none' }}
      rightSection={
        <Button
          data-elem="search-button"
          className="bg-defaultButtonColor h-8"
          radius="xs"
          size="sm"
        >
          Поиск
        </Button>
      }
      placeholder="Введите название вакансии"
      rightSectionWidth={95}
      {...props}
    />
  );
}
