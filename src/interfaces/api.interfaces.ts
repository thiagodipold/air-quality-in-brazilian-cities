export interface IErrorResponse {
  status: string;
  data: string;
}

export interface IDataResponse {
  data: {
    city: {
      name: string;
    };
    iaqi: {
      pm25: {
        v: number;
      };
    };
  };
}
