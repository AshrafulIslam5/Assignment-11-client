import React from 'react';

const Brands = () => {
    const brands = [
        { id: 122, name: 'Razer', img: 'https://www.seekpng.com/png/full/155-1557893_razer-logo.png' },
        { id: 172, name: 'Samsung', img: 'https://i.pinimg.com/564x/a1/79/a4/a179a400366bf6f5de2e76e42285a446.jpg' },
        { id: 162, name: 'Asus', img: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102012/asus-rog-logo-black-background_0.png?itok=zoa9E3OA' },
        { id: 152, name: 'Acer', img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Acer-logo.jpg' },
        { id: 142, name: 'Hp', img: 'https://static.cdnlogo.com/logos/h/13/hp.png' },
        { id: 132, name: 'Lenovo', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdj2SG47Tao-tWdT-Dve-fYMeNCkn76sHLX8MjfjlFTlI_1aX-KMHJmA6PuZaRitpiNyk&usqp=CAU' },
    ]
    return (
        <div className='px-16 mt-14'>
            <h2 className='text-center mb-10 text-3xl font-semibold'>Our Brands</h2>
            <div className='grid grid-cols-4 gap-5'>
                {
                    brands.map(brand =>
                        <div className='p-10 h-full border-4 border-blue-500' key={brand.id} >
                            <img alt='' src={brand.img} />
                            <h2 className='text-2xl font-semibold text-center'>{brand.name}</h2>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Brands;