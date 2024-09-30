import React from 'react';

const ProductItem = ({ item, incrementCount, decrementCount, removeItem }) => {
  return (
    <div className="product">
      <h3>{item.name}</h3>
      <p>Price: {item.price}</p>
      <div className="counter">
        <button onClick={() => decrementCount(item.id)}>-</button>
        <span>{item.count}</span>
        <button onClick={() => incrementCount(item.id)}>+</button>
      </div>
      <button onClick={() => removeItem(item.id)}>Удалить</button>
    </div>
  );
};

export default ProductItem;
