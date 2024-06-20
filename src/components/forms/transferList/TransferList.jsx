import './TransferList.css'
import { useId, useState } from "react";

const CheckboxItem = ({ onChange, label, checked }) => {
  const id = useId();

  return (
    <div className='transfer-list__section__items__item'>
      <input type="checkbox" id={id} onChange={onChange} checked={checked} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

const ItemList = ({ items, setItems }) => {
  return (
    <div className="transfer-list__section">
      <ul className="transfer-list__section__items">
        {Array.from(items.entries()).map(([label, checked]) => (
          <li key={label}>
            <CheckboxItem
              label={label}
              checked={checked}
              onChange={() => {
                const newItems = new Map(items);
                newItems.set(label, !items.get(label));
                setItems(newItems);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const INITIAL_LEFT_ITEMS = ["HTML", "JavaScript", "CSS", "TypeScript"];

const INITIAL_RIGHT_ITEMS = ["React", "Angular", "Vue", "Svelte"];

// helper function to converts array to map with name as key and value as boolean
const generateItemsMap = (items) => {
  return new Map(items.map((item) => [item, false]));
};

// helper function to determine if no items selected in items map
const hasNoSelectedItems = (itemsMap) => {
  return (
    Array.from(itemsMap.values()).filter((val) => Boolean(val)).length === 0
  );
};

// helper function to transfer all items from a src list to dest list
const transferAllItems = (
  itemsSrc,
  setItemsSrc,
  itemsDest,
  setItemsDest
) => {
  setItemsDest(new Map([...itemsDest, ...itemsSrc]));
  setItemsSrc(new Map());
}


const transferSelectedItems = (
  itemsSrc,
  setItemsSrc,
  itemsDest,
  setItemsDest
) => {
  const newItemsSrc = new Map(itemsSrc);
  const newItemsDest = new Map(itemsDest);


  itemsSrc.forEach((value, key) => {
    if (!value) return;

    newItemsDest.set(key, value);
    newItemsSrc.delete(key);
  });

  setItemsSrc(newItemsSrc);
  setItemsDest(newItemsDest);
}

const TransferList = () => {
  const [itemsLeft, setItemsLeft] = useState(generateItemsMap(INITIAL_LEFT_ITEMS));
  const [itemsRight, setItemsRight] = useState(generateItemsMap(INITIAL_RIGHT_ITEMS));

  return (
    <div className="transfer-list">
      <ItemList items={itemsLeft} setItems={setItemsLeft} />
      
      <div className="transfer-list__actions">
        <button 
          aria-label="Transfer all items to left list"
          disabled={itemsRight.size === 0}
          onClick={() => {
            transferAllItems(
              itemsRight,
              setItemsRight,
              itemsLeft,
              setItemsLeft
            );
          }}
        >
          <span aria-hidden={true}>&lt;&lt;</span>
        </button>

        <button
          aria-label="Transfer selected items to left list"
          disabled={hasNoSelectedItems(itemsRight)}
          onClick={() => {
            transferSelectedItems(
              itemsRight,
              setItemsRight,
              itemsLeft,
              setItemsLeft
            );
          }}
        >
          <span aria-hidden={true}>&lt;</span>
        </button>

        <button
          aria-label="Transfer selected items to right list"
          disabled={hasNoSelectedItems(itemsLeft)}
          onClick={() => {
            transferSelectedItems(
              itemsLeft,
              setItemsLeft,
              itemsRight,
              setItemsRight
            );
          }}
        >
          <span aria-hidden={true}>&gt;</span>
        </button>

        <button
          aria-label="Transfer all items to right list"
          disabled={itemsLeft.size === 0}
          onClick={() => {
            transferAllItems(
              itemsLeft,
              setItemsLeft,
              itemsRight,
              setItemsRight
            );
          }}
        >
          <span aria-hidden={true}>&gt;&gt;</span>
        </button>
      </div>

      <ItemList items={itemsRight} setItems={setItemsRight} />
    </div>
  );
};

export default TransferList;
