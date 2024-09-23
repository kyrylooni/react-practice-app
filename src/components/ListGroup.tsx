import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // type annotation

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    // <> indicate a fragment
    // to render a list dynamicaly we wrap the list component in braces {}
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found </p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
