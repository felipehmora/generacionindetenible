import Select from "./Select";

export default function Filters() {
  return (
    <>
      <div className="p-5 flex justify-between items-center flex-nowrap shadow-sm gap-2.5">
        <Select />
        <Select />
        <Select />
        <Select />
      </div>
    </>
  );
}
