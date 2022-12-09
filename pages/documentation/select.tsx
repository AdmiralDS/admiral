import * as React from 'react';
import { Layout } from 'components/Layout';
import { SelectField, Option } from '@admiral-ds/react-ui';

const OPTIONS = [
  {
    value: 'val1',
    text: 'Текст 1',
    extraText: 'Доооп Текст 1',
  },
  {
    value: 'val2',
    text: 'Текст 2',
    extraText: 'Доп Теttкст 2',
  },
  {
    value: 'val3',
    text: 'Текст 3',
    disabled: true,
    extraText: 'дддопТекст 3',
  },
  {
    value: 'val4',
    text: 'Текст 444',
    extraText: 'Доооп Тексттт 41232',
  },
] as Array<{ value: string; text: string; disabled?: boolean; extraText?: string }>;

export default function ButtonPage() {
  const [selectValue, setSelectValue] = React.useState('');
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`Change event ${e.target.id}`);
    setSelectValue(e.target.value);
  };
  return (
    <Layout>
      <h1>Select</h1>
      <SelectField
        id="select-1"
        mode="searchSelect"
        label="Выбор значения"
        value={selectValue}
        onChange={onChange}
        placeholder="пока ни чего не выбрано"
      >
        {OPTIONS.map((option) => (
          <Option key={option.value} value={option.value} disabled={option.disabled}>
            {option.text}
          </Option>
        ))}
      </SelectField>
    </Layout>
  );
}
