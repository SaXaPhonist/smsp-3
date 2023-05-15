import { Container, List, Text } from '@mantine/core';

export default function FullDetails() {
  return (
    <Container className='p-6 flex flex-col bg-white rounded-md [&>*]:mb-5 [&>*:last-child]:mb-0'>
      <article>
        <Text className='mb-4' fz={'lg'} fw={700}>Обязанности:</Text>
        <List className='list-disc [&>*]:pl-4'>
          <List.Item>Разработка дизайн-макетов для наружной</List.Item>
          <List.Item>Интерьерной рекламы, полиграфии, сувенирной продукции.</List.Item>
          <List.Item>
            Управленческая функция: обучение, адаптация дизайнеров, их контроль, оценка
          </List.Item>
          <List.Item>
            Подготовка и вёрстка макетов в CorelDraw, Adobe photoshop. Создание дизайна логотипов и
            брендбуков
          </List.Item>
        </List>
      </article>
      <article>
        <Text className='mb-4' fz={'lg'} fw={700}>Требования:</Text>
        <List className='list-disc [&>*]:pl-4'>
          <List.Item>Разработка дизайн-макетов для наружной</List.Item>
          <List.Item>Подготовка и вёрстка макетов в CorelDraw, Adobe photoshop. Создание дизайна логотипов и
            брендбуков</List.Item>
          <List.Item>Интерьерной рекламы, полиграфии, сувенирной продукции.</List.Item>
          <List.Item>
          Управленческая функция: обучение, адаптация дизайнеров, их контроль, оценка
          </List.Item>
        </List>
      </article>
      <article>
        <Text className='mb-4' fz={'lg'} fw={700}>Условия:</Text>
        <List className='list-disc [&>*]:pl-4'>
          <List.Item>Интерьерной рекламы, полиграфии, сувенирной продукции.</List.Item>
          <List.Item>Интерьерной рекламы, полиграфии, сувенирной продукции.</List.Item>
          <List.Item>Подготовка и вёрстка макетов в CorelDraw, Adobe photoshop. Создание дизайна логотипов и
            брендбуков</List.Item>
          <List.Item>
          Управленческая функция: обучение, адаптация дизайнеров, их контроль, оценка
          </List.Item>
        </List>
      </article>
    </Container>
  );
}
