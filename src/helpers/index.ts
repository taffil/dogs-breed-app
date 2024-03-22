import { Dog } from "../types/interface";

export const filterByLifeSpan = (
  dogs: Dog[],
  minLifeSpan: number,
  maxLifeSpan: number
): Dog[] => {
  return dogs.filter((dog) => {
    let min;
    let max;
    if (dog.life_span.includes("-")) {
      const [minLife, maxLife] = dog.life_span.split(" - ");
      min = parseInt(minLife);
      max = parseInt(maxLife);
    } else {
      const [maxLife] = dog.life_span.split(" ");
      min = parseInt(maxLife);
      max = parseInt(maxLife);
    }
    return min >= minLifeSpan && max <= maxLifeSpan;
  });
};

export const sortedDogsByName = (dogs: Dog[]): Dog[] => {
  return dogs.sort((dog1, dog2) =>
    dog1.name > dog2.name ? 1 : dog1.name < dog2.name ? -1 : 0
  );
};

export const paginateArray = (array: Dog[], pageSize: number) => {
  const pageCount = Math.ceil(array.length / pageSize);
  return Array.from({ length: pageCount }, (_, index) =>
    array.slice(index * pageSize, (index + 1) * pageSize)
  );
};
