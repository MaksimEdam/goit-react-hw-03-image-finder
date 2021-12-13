import { ImSearch } from "react-icons/im";
import s from "./Searchbar.module.css";

function Searchbar() {
  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm}>
        <button type="submit" className={s.SearchFormButton}>
          <ImSearch style={{ marginRight: 8 }} />
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;
