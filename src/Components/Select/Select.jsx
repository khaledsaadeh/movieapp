import { SelectContainer, SelectOption } from "./Select.styles";

const Select = (props) => {
  const Options = [
    {
      name: "Popularity Descending",
      value: "popularity.desc",
    },
    {
      name: "Popularity Ascending",
      value: "popularity.asc",
    },
    {
      name: "Rating Descending",
      value: "vote_average.desc",
    },
    {
      name: "Rating Ascending",
      value: "vote_average.asc",
    },
    {
      name: "Release Date Descending",
      value: "release_date.desc",
    },
    {
      name: "Release Date Ascending",
      value: "release_date.asc",
    },
    {
      name: "Title (A-Z)",
      value: "original_title.asc",
    },
    {
      name: "Title (Z-A)",
      value: "original_title.desc",
    },
  ];

  return (
    <div>
      <SelectContainer onChange={props.optionSelectHandler}>
        {Options.map((option) => (
          <SelectOption value={option.value}>{option.name}</SelectOption>
        ))}
      </SelectContainer>
    </div>
  );
};

export default Select;
