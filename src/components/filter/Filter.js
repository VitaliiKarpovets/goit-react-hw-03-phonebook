import { FilterTitle, FilterInput } from "./Filter.styled";

function Filter({ value, onChangeFilter }) {
  return (
    <>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="Search by name..."
      />
    </>
  );
}

export default Filter;
