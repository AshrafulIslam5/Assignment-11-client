import React from 'react';


const Addone = ({ quantity, id }) => {
    const setQuan = () => {
            const addOrRemove = quantity + 1;
            const newOneQuan = { addOrRemove };

            const url = `https://ashrafuls-assignment-11.herokuapp.com/laptops/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newOneQuan)
            })
                .then(res => res.json())
                .then(data => {
                    window.location.reload()
                })
        
    }
    return (
        <button onClick={setQuan} className='mt-2 mr-3 text-white bg-amber-500 px-3 py-1 rounded-lg hover:bg-amber-800'>Add One</button>
        

    );
};

export default Addone;