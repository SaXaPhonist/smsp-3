import { Card, Text } from "@mantine/core";
import LocationIcon from '../../public/location.svg'
import StarIcon from '../../public/Star 2.svg'
import Image from "next/image";

export default function VacansyCard (){
    return (
        <Card radius={'md'} shadow="xs" padding={'xl'} className="flex flex-row">
            <div className="flex flex-col mr-auto">
            <section className="mb-3">
                <Text c={'#5E96FC'} fz={'xl'} fw={600}>Вакансия менеджера с 5 лет опыта</Text>
            </section>
            <section className="flex flex-row items-center mb-3">
                <Text fz={'md'} fw={600}>25000 тыс.</Text>
                <span className="w-[5px] h-[5px] mx-3 bg-gray-500 rounded-full"></span>
                <Text fz={'md'}>Полный день</Text>
            </section>
            <section className="flex flex-row">
                <Image src={LocationIcon} alt="location"/>
                <Text fz={'md'} className="ml-3">Москва</Text>
            </section>
            </div>
            <div>
                <Image src={StarIcon} alt="add to favourite"/>
            </div>
        </Card>
    )
}