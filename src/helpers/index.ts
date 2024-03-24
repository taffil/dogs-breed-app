import { Dog } from "../types/interface";

export const filterByLifeSpan = (
  dogs: Dog[],
  minLifeSpan: number,
  maxLifeSpan: number
): Dog[] => {
  return dogs.filter((dog) => {
    const lifeSpan = dog.life_span.split(" ");
    const min = parseInt(lifeSpan[0]);
    const max = parseInt(lifeSpan[2] || lifeSpan[0]);
    return min >= minLifeSpan && max <= maxLifeSpan;
  });
};

export const sortedDogsByName = (dogs: Dog[]): Dog[] => {
  return dogs.sort((dog1, dog2) =>
    dog1.name < dog2.name ? 1 : dog1.name > dog2.name ? -1 : 0
  );
};

export const paginateArray = (array: Dog[], pageSize: number) => {
  const pageCount = Math.ceil(array.length / pageSize);
  return Array.from({ length: pageCount }, (_, index) =>
    array.slice(index * pageSize, (index + 1) * pageSize)
  );
};
