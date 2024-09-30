import React from 'react';

const InputSection = ({ newProductName, setNewProductName, newProductPrice, setNewProductPrice, addProduct }) => {
  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Имя продукта"
        value={newProductName}
        onChange={(e) => setNewProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Стоимость"
        value={newProductPrice}
        onChange={(e) => setNewProductPrice(e.target.value)}
      />
      <button onClick={addProduct}>Добавить</button>
    </div>
  );
};

export default InputSection;
