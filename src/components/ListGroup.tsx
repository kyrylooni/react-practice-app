import { useState } from "react";

// { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem : (item: string) => void; 

}


function ListGroup({items, heading, onSelectItem}: Props) {
  
  // type annotation

  // a variable to keep track of index of selected item
  
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // <> indicate a fragment
    // to render a list dynamicaly we wrap the list component in braces {}
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
