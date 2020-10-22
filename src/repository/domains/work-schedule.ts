export interface IWorkSchedule {
  _id: string
  psy: string
  days: [
    {
      date: Date
      dayOfWeek: string
      workingPlan: {
        start: Date
        end: Date
      }
      restPlan: {
        start: Date
        end: Date
      }
    }
  ]
  createdAt: Date
  updatedAt: Date
}
