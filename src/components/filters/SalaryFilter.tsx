import { NumberInput } from '@mantine/core';
import { useState } from 'react';

const SalaryFilter = (): JSX.Element => {
  const [value, setValue] = useState<number | ''>('');

  return (
    <div>
      <NumberInput
        classNames={{ control: 'border-l-0', controlUp: 'border-b-0' }}
        className="mb-2"
        size="md"
        data-elem="salary-from-input"
        placeholder="От"
        label="Оклад"
        value={value}
        onChange={setValue}
      />
      <NumberInput
        classNames={{ control: 'border-l-0', controlUp: 'border-b-0' }}
        size="md"
        data-elem="salary-to-input"
        placeholder="До"
      />
    </div>
  );
};

export default SalaryFilter;
