import React from 'react';

const InventoryBrandItem = ({ product }) => {
    const { name, img, price, quantity, supplierName } = product;
    console.log(product)
    return (
        <div className='border'>
            <img className='w-2/4' src={img} alt='' />
            <h2>{name}</h2>
        </div>
    );
};

export default InventoryBrandItem;