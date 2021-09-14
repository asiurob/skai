export interface Categories{
    id: number,
    name: string,
    data: Data[],
    formControl: string,
    idCollapse: string
  }
  
  interface Data{
    name: string,
    infoExtra?: string,
    infoImage?: string,
  }