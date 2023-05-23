import { Container } from '@mantine/core';

interface IProps {
  fullText: string;
}

export default function FullDetails({ fullText }: IProps) {
  return (
    <Container
      className="p-6 flex flex-col bg-white rounded-md [&>*]:mb-5 [&>*:last-child]:mb-0"
      dangerouslySetInnerHTML={{ __html: fullText }}
    ></Container>
  );
}
