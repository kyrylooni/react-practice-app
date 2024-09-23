function ListGroup() {
  const items = [];

  return (
    // <> indicate a fragment
    // to render a list dynamicaly we wrap the list component in braces {}
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No items found </p> : null}
      {items.length === 0 && <p>No item found </p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
