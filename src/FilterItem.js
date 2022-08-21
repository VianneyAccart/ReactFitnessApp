function FilterItem(props) {
  return (
    <li>
      <p
        className="dropdown-item"
        onClick={() => props.filterMethod(props.muscularGroup)}
      >
        {props.muscularGroup}
      </p>
    </li>
  );
}
export default FilterItem;
