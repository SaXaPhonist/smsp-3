import { Dispatch, SetStateAction } from "react";

export interface IJob {
  id: string;
  profession: string;
  firm_name: string;
  town: { title: string };
  type_of_work: { title: string };
  payment_to: number;
  payment_from: number;
  currency: string;
  vacancyRichText: string;
}

export interface IJobSerialized extends Omit<IJob, 'town' | 'type_of_work'> {
  town: string,
  type_of_work: string,
  isFav?: boolean,
  setIsFav?: Dispatch<SetStateAction<boolean>>
}
