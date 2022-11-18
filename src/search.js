const Search = ({ searchvalue }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--grey hover-bg-moon-gray"
        type="search"
        placeholder={searchvalue}
      />
    </div>
  );
};

export default Search;
