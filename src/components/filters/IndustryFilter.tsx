import { useState, Dispatch, SetStateAction, useEffect } from 'react';
import { Autocomplete, Loader } from '@mantine/core';
import { apiClient } from '@/apiConfig/config';

interface ICategory {
  title_rus: string;
  key: number;
}

interface ICategorySerialize {
  value: string;
  key: string;
}

interface IProps {
  setValueForSearch: (value: string) => void
}

const IndustryFilter = ({ setValueForSearch }: IProps): JSX.Element => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<ICategorySerialize[]>();

  const handleChange = (val: string) => {
    setValue(val);
    setCategories([]);

    if (val.trim().length === 0) {
      setLoading(false);
    } else {
      setLoading(true);
      getCategories();
    }
  };

  const chooseItem = (item : ICategorySerialize) => {
    if (item) {
      setValueForSearch(item.key);
    }
  };

    const getCategories = async () => {
    try {
      if(categories) return
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        throw new Error('Token is not provided');
      }
      const res = await apiClient.get('/catalogues', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setCategories(
        res.data.map((category: ICategory) => ({
          value: category.title_rus,
          key: category.key.toString(),
        })) as ICategorySerialize[],
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Autocomplete
        value={value}
        data={categories || []}
        size="md"
        data-elem="industry-select"
        onItemSubmit={chooseItem}
        onChange={handleChange}
        onFocus={getCategories}
        rightSection={loading ? <Loader size="1rem" /> : null}
        label="Отрасль"
        placeholder="Выбирите отрасль"
      />
    </div>
  );
};

export default IndustryFilter;
