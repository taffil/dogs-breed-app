import { useLocation } from "react-router-dom";
import { useGetDogQuery } from "../state/dogApi";

const Dog = () => {
  const {
    state: { id },
  } = useLocation();
  const { data, error, isLoading } = useGetDogQuery({ id: id });
  console.log(data, error, isLoading);
  return <div className="flex flex-1 h-screen p-8"></div>;
};

export default Dog;
