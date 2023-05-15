import { useState, useRef } from 'react';
import { Autocomplete, Loader } from '@mantine/core';

const IndustryFilter = (): JSX.Element => {
  const timeoutRef = useRef<number>(-1);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const handleChange = (val: string) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    if (val.trim().length === 0 || val.includes('@')) {
      setLoading(false);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        setData(['Финансы', 'Коммерция', 'Медицина']);
      }, 1000);
    }
  };

  return (
    <div>
      <Autocomplete
        value={value}
        data={data}
        size='md'
        data-elem="industry-select"
        onChange={handleChange}
        rightSection={loading ? <Loader size="1rem" /> : null}
        label="Отрасль"
        placeholder="Выбирите отрасль"
      />
    </div>
  );
};

export default IndustryFilter;
