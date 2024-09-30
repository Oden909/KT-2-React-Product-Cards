import React, { useState } from 'react';
import ProductItem from './components/ProductItem';
import InputSection from './components/InputSection';

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 19000, count: 4 }
  ]);

  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  const addProduct = () => {
    if (newProductName && newProductPrice) {
      setData([
        ...data,
        {
          id: Date.now(),
          name: newProductName,
          price: parseFloat(newProductPrice),
          count: 1,
        },
      ]);
      setNewProductName('');
      setNewProductPrice('');
    }
  };

  const removeItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const incrementCount = (id) => {
    setData(
      data.map((item) =>
        item.id === id && item.count < 25 ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrementCount = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, count: Math.max(0, item.count - 1) } : item
      )
    );

    const item = data.find((item) => item.id === id);
    if (item && item.count === 1) {
      removeItem(id);
    }
  };

  return (
    <div>
      <InputSection 
        newProductName={newProductName}
        setNewProductName={setNewProductName}
        newProductPrice={newProductPrice}
        setNewProductPrice={setNewProductPrice}
        addProduct={addProduct}
      />
      <div className="product-section">
        {data.map((item) => (
          <ProductItem
            key={item.id}
            item={item}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            removeItem={removeItem}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
