function DropDownMenu({ onMouseOver, isOpenDropDown, name }) {
  return (
    <div className="pr-12 flex">
      <button
        onMouseOver={onMouseOver}
        // onMouseLeave={onMouseLeave}
        className="relative"
      >
        <div>{name}</div>
      </button>
      {isOpenDropDown && (
        <div className="absolute mt-10 w-80 px-5 py-4 flex flex-col border rounded shadow-sm bg-zinc-50">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      )}
      <box-icon name="chevron-down"></box-icon>
    </div>
  );
}

export default DropDownMenu;
