interface Weight {
  imperial: string;
  metric: string;
}

interface Height {
  imperial: string;
  metric: string;
}

export interface Dog {
  weight: Weight;
  height: Height;
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
  image: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
}

export interface DogApiParams {
  query?: string;
  page: number;
  pageSize: number;
  from: number;
  to: number;
  sort: boolean;
}
