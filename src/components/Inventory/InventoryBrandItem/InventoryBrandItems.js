import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InventoryBrandItem from './InventoryBrandItem';

const InventoryBrandItems = () => {
    const {id} = useParams();
    const [products, setProducts] = useState();
    useEffect(() => {
        const url = `https://ashrafuls-assignment-11.herokuapp.com/laptops/brand/${id}`;
        fetch(url)
            .then(response => response.json())
        .then(data => setProducts(data.Products))
    }, [])
    return (
        <div>
            {
                products?.map(product => <InventoryBrandItem key={product.key} product={product}></InventoryBrandItem>)
            }
        </div>
    );
};

export default InventoryBrandItems;