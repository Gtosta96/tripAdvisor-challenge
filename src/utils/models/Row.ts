export interface IRow {
  id: number,
  title: string,
  created_at: string,
  updated_at: string,
  labels: { name: string }[],
  state: string,
}