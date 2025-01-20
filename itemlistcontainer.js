import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4">
      <h1>{greeting}</h1>
      <p>Aquí se mostrarán todos los productos próximamente.</p>
    </div>
  );
}

export default ItemListContainer;
