export interface Categories{
    id: number,
    name: string,
    data: Data[],
    idCollapse: string
  }
  
  interface Data{
    name: string
  }