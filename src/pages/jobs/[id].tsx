import FullDetails from '@/components/FullDetails';
import VacansyCard from '@/components/VacancyCard';
import { IJobSerialized } from '@/types';
import { Container} from '@mantine/core';
import { useRouter } from 'next/router';

export default function JobDetails() {
  const router = useRouter()
  const jobQuery = router.query as unknown as IJobSerialized

  return (
    <Container my="md">
      <section className='mb-5'>
         <VacansyCard {...jobQuery}/>
      </section>
      <section>
        <FullDetails  fullText={jobQuery.vacancyRichText} />
      </section>
    </Container>
  );
}
