import React from 'react';

const InventoryBrandItem = ({ product }) => {
    const { name } = product;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default InventoryBrandItem;