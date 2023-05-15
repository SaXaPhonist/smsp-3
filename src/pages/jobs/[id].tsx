import FullDetails from '@/components/FullDetails';
import VacansyCard from '@/components/VacancyCard';
import { Container} from '@mantine/core';

export default function JobDetails() {
  return (
    <Container my="md">
      <section className='mb-5'>
        <VacansyCard />
      </section>
      <section>
        <FullDetails />
      </section>
    </Container>
  );
}
