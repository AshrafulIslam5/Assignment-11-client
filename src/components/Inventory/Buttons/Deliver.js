import { toast } from 'react-toastify';

const Deliver = ({ quantity, id }) => {
    const setQuan = () => {
        if (quantity === 0) {
            toast.error('Out Of Stock');
        }
        else {
            const quanRemoveAddOne = quantity - 1;
            const newQuan = { quanRemoveAddOne };

            const url = `https://ashrafuls-assignment-11.herokuapp.com/laptops/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newQuan)
            })
                .then(res => res.json())
                .then(data => {
                    window.location.reload()
                })
        }
    }
    return (
        <button onClick={setQuan} className='mt-2 mr-3 text-white bg-teal-500 px-3 py-1 rounded-lg hover:bg-teal-800'>Deliver One</button>
        

    );
};

export default Deliver;