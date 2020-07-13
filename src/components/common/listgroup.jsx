import React from 'react';

const ListGroup = ({
  items,
  valueProperty: value,
  textProperty: text,
  onItemSelect,
  selectedItem,
}) => {
  const listStyle = 'btn btn-sm list-group-item';
  return (
    <ul className="list-group">
      {items.map((item) => (
        <button
          onClick={() => onItemSelect(item)}
          key={item[value]}
          className={selectedItem === item ? `${listStyle} active` : listStyle}
          style={{ cursor: 'pointer' }}
        >
          {item[text]}
        </button>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};

export default ListGroup;
