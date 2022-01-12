import { ReactSelectType } from '../../../components/Common/AsyncSelect/asyncSelect.types';

export type ServiceReservationFormValues = {
  serviceReservationId:  number;
  serviceId: number;
  serviceStatusId: number;
  serviceSubtype: string;
  startDate: Date | string;
  endDate: Date | string;
  clientNotes: string;
  staffNotes: string;
  areThereChildren: boolean;
  clients: Array<ReactSelectType> | null;
}