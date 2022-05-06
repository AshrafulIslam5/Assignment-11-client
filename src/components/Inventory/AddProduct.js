import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logo from '../../Logos/logo.png'

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const submit = async e => {

    }
    return (
        <div>
            <div className='rounded-md shadow-sm w-3/4 sm:w-2/4 mt-5 p-6 mx-auto bg-slate-50 -space-y-px'>
                <h2 className='text-center text-xl font-semibold flex justify-center items-center gap-5'><img className='w-16' src={logo} alt="" />Please Fill this form to add your Product</h2>
                <form onSubmit={submit} className="mt-8 space-y-6 " action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div>
                        <div className='mb-5 relative'>
                            <label htmlFor="email-address" className="text-red-500">
                                Email address
                            </label>
                            <input
                                // ref={emailRef}
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="z-0 appearance-none rounded-2xl relative block w-full border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 focus:z-0 mt-2 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div className='flex flex-col sm:flex-row'>
                            <div className='mb-5 w-full'>
                                <label htmlFor="Product-Name" className="text-red-500">
                                    Product Name
                                </label>
                                <input
                                    // ref={emailRef}
                                    name="Product-Name"
                                    type="text"
                                    required
                                    className="z-0 appearance-none rounded-2xl relative block w-full border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 focus:z-0 mt-2 sm:text-sm"
                                    placeholder="Product Name"
                                />
                            </div>
                            <div className='mb-5 w-full sm:ml-3'>
                                <label htmlFor="Supplier-Name" className="text-red-500">
                                    Supplier Name
                                </label>
                                <input
                                    // ref={emailRef}
                                    name="Supplier-Name"
                                    type="text"
                                    required
                                    className="z-0 appearance-none rounded-2xl relative block w-full border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 focus:z-0 mt-2 sm:text-sm"
                                    placeholder="Supplier-Name"
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-red-500 font-semibold'>Description</h2>
                            <textarea className='sm:w-72 lg:w-96' rows="3"></textarea>
                            <div className='flex flex-col sm:flex-row'>
                                <div className='mb-5 w-full mr-2'>
                                    <label htmlFor="Image" className="text-red-500">
                                        Image
                                    </label>
                                    <input
                                        // ref={emailRef}
                                        name="Image"
                                        type="text"
                                        required
                                        className="z-0 appearance-none rounded-2xl relative block w-full border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 focus:z-0 mt-2 sm:text-sm"
                                        placeholder="Image"
                                    />
                                </div>
                                <div className='mb-5 w-full mr-2'>
                                    <label htmlFor="Quantity" className="text-red-500">
                                        Quantity
                                    </label>
                                    <input
                                        // ref={emailRef}
                                        name="Quantity"
                                        type="number"
                                        required
                                        className="z-0 appearance-none rounded-2xl relative block w-full border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 focus:z-0 mt-2 sm:text-sm"
                                        placeholder="Quantity"
                                    />
                                </div>
                                <div className='mb-5 w-full mr-2'>
                                    <label htmlFor="Price" className="text-red-500">
                                        Price
                                    </label>
                                    <input
                                        // ref={emailRef}
                                        name="Price"
                                        type="number"
                                        required
                                        className="z-0 appearance-none rounded-2xl relative block w-full border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 focus:z-0 mt-2 sm:text-sm"
                                        placeholder="Price"
                                    />
                                </div>
                            </div>

                            <h2 className='text-center mt-5 mb-3'>Product Specification</h2>
                            <div className='mb-5 w-full mr-2'>
                                <label htmlFor="Processor" className="text-red-500">
                                    Processor
                                </label>
                                <input
                                    // ref={emailRef}
                                    name="Processor"
                                    type="text"
                                    required
                                    className="z-0 appearance-none rounded-2xl relative block w-full border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 focus:z-0 mt-2 sm:text-sm"
                                    placeholder="Processor"
                                />
                            </div>
                            <div className='grid  sm:grid-cols-2 gap-5'>
                                <div className='mb-5 w-full'>
                                    <label htmlFor="Display" className="text-red-500">
                                        Display
                                    </label>
                                    <input
                                        // ref={emailRef}
                                        name="Display"
                                        type="text"
                                        required
                                        className="z-0 appearance-none rounded-2xl relative block w-full border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 focus:z-0 mt-2 sm:text-sm"
                                        placeholder="Display"
                                    />
                                </div>
                                <div className='mb-5 w-full'>
                                    <label htmlFor="Ram" className="text-red-500">
                                        Ram
                                    </label>
                                    <input
                                        // ref={emailRef}
                                        name="Ram"
                                        type="text"
                                        required
                                        className="z-0 appearance-none rounded-2xl relative block w-full border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 focus:z-0 mt-2 sm:text-sm"
                                        placeholder="Ram"
                                    />
                                </div>
                                <div className='mb-5 w-full'>
                                    <label htmlFor="Storage" className="text-red-500">
                                        Storage
                                    </label>
                                    <input
                                        // ref={emailRef}
                                        name="Storage"
                                        type="text"
                                        required
                                        className="z-0 appearance-none rounded-2xl relative block w-full border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 focus:z-0 mt-2 sm:text-sm"
                                        placeholder="Storage"
                                    />
                                </div>
                                <div className='mb-5 w-full'>
                                    <label htmlFor="Graphics" className="text-red-500">
                                        Graphics
                                    </label>
                                    <input
                                        // ref={emailRef}
                                        name="Graphics"
                                        type="text"
                                        required
                                        className="z-0 appearance-none rounded-2xl relative block w-full border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 focus:z-0 mt-2 sm:text-sm"
                                        placeholder="Graphics"
                                    />
                                </div>
                                <div className='mb-5 w-full'>
                                    <label htmlFor="Operating System" className="text-red-500">
                                        Operating System
                                    </label>
                                    <input
                                        // ref={emailRef}
                                        name="Operating System"
                                        type="text"
                                        required
                                        className="z-0 appearance-none rounded-2xl relative block w-full border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 focus:z-0 mt-2 sm:text-sm"
                                        placeholder="Operating System"
                                    />
                                </div>
                                <div className='mb-5 sm:mb-0 w-full'>
                                    <label htmlFor="Battery" className="text-red-500">
                                        Battery
                                    </label>
                                    <input
                                        // ref={emailRef}
                                        name="Battery"
                                        type="text"
                                        required
                                        className="z-0 appearance-none rounded-2xl relative block w-full border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 focus:z-0 mt-2 sm:text-sm"
                                        placeholder="Battery"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-5"
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default AddProduct;