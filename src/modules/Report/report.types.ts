export type ReportPayload = {
  reportId: number
  message: string
  createdAt: string,
  userId: number,
  userName: string,
}

export type Reports = Array<ReportPayload>
