const db = {
  booking: [
    {
      _id: '123',
      start_time: new Date('2020-09-27'),
      end_time: new Date('2020-06-19'),
      duration: 50,
      psy: '2',
      pattient: '3',
      created_at: new Date('2020-06-19'),
      updated_at: new Date('2020-06-19'),
    },
    {
      _id: '145',
      start_time: new Date('2020-09-27'),
      end_time: new Date('2020-06-19'),
      duration: 50,
      psy: '23',
      pattient: '1',
      created_at: new Date('2020-06-19'),
      updated_at: new Date('2020-06-19'),
    },
  ],
  patients: [
    {
      _id: '123',
      name: 'Carlos Ramirez',
      created_at: new Date('2020-06-19'),
      updated_at: new Date('2020-06-19'),
    },
    {
      _id: '145',
      name: 'Lizzete Ruiz',
      created_at: new Date('2020-06-19'),
      updated_at: new Date('2020-06-19'),
    },
  ],
}
export default db
