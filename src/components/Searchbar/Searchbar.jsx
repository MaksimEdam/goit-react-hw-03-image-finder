import s from "./Searchbar.module.css";

function Searchbar() {
  return (
    <header className={s.Searchbar}>
      <form className={s.Form}>
        <button type="submit" className={s.Button}>
          <span className={s.ButtonLabel}>Search</span>
        </button>

        <input
          className={s.Input}
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
