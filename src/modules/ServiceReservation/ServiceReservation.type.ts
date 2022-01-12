export interface slotInfo {
  id?: number,
  title?: string,
  start: string | Date;
  end: string | Date;
  slots?: Date[] | string[];
  action?: 'select' | 'click' | 'doubleClick';
}