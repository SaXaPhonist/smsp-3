import { MAX_PAYMENT_TO } from '@/const';
import { NumberInput } from '@mantine/core';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface IProps {
  setPayments: Dispatch<SetStateAction<{
    paymentFrom: number,
    paymentTo: number,
  }>>
}

const SalaryFilter = ({ setPayments }: IProps): JSX.Element => {
  const [value, setValue] = useState({paymentFrom: 0, paymentTo: 0});

  useEffect(() => {
      setPayments(value)
  },[value])

  return (
    <div>
      <NumberInput
        classNames={{ control: 'border-l-0', controlUp: 'border-b-0' }}
        className="mb-2"
        size="md"
        data-elem="salary-from-input"
        placeholder="От"
        label="Оклад"
        value={value.paymentFrom || ''}
        onChange={(value) => {
          if(typeof value === 'number'){
            setValue((payments) => ({...payments, paymentFrom: value}))
          } 
        } }
      />
      <NumberInput
        classNames={{ control: 'border-l-0', controlUp: 'border-b-0' }}
        size="md"
        data-elem="salary-to-input"
        value={value.paymentTo || ''}
        onChange={(value: number) => {
          if(typeof value === 'number'){
            setValue((payments) => ({...payments, paymentTo: value}))
          }
        }
           }
        placeholder="До"
      />
    </div>
  );
};

export default SalaryFilter;
