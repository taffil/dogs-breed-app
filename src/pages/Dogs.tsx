import Button from "../components/Button";
import Input from "../components/Input";

const Dogs = () => {
  return (
    <div className="flex flex-row">
      <Input placeholder="Search Field" />
      <Button text={"Search"} className="mx-6" />
    </div>
  );
};

export default Dogs;
