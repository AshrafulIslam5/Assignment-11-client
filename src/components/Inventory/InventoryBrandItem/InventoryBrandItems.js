import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
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
    if (products === undefined) {
        return <Spinner></Spinner>
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 px-20 pt-20'>
            {
                products?.map(product => <InventoryBrandItem key={product.key} product={product}></InventoryBrandItem>)
            }
        </div>
    );
};

export default InventoryBrandItems;