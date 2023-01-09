const Search = ({ searchvalue, searchchange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--grey hover-bg-moon-gray"
        type="search"
        placeholder={searchvalue}
        onChange={searchchange}
      />
    </div>
  );
};

export default Search;
