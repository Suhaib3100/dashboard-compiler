
import Select from "react-select";
const furits: { value: string, label: string }[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const styles = {
  option: (provided: any, state: any) => ({
    ...provided,
    fontSize: "14px",
  }),
};

const BasicSelect = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div>
        <Select
          className="react-select"
          classNamePrefix="select"
          defaultValue={furits[0]}
          options={furits}
          styles={styles}
        />
      </div>
      <div>
        <Select
          className="react-select"
          classNamePrefix="select"
          defaultValue={furits[1]}
          styles={styles}
          name="clear"
          options={furits}
          isClearable
        />
      </div>
      <div>
        <Select
          className="react-select"
          classNamePrefix="select"
          defaultValue={furits[2]}
          name="loading"
          options={furits}
          isLoading={true}
          isClearable={false}
          styles={styles}
        />
      </div>
      <div>
        <Select
          className="react-select"
          classNamePrefix="select"
          defaultValue={furits[3]}
          name="disabled"
          options={furits}
          isDisabled={true}
          isClearable={false}
          styles={styles}
        />
      </div>
    </div>
  );
};

export default BasicSelect;