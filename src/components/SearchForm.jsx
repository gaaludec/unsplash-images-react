import { useAppContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    const searchTerm = e.target.elements.search.value;
    if (!searchTerm) return;
    console.log(searchTerm);
    setSearchTerm(searchTerm);
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
