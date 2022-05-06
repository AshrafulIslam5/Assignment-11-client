import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Details = ({ laptop }) => {
    const { name, _id, price, quantity, supplierName, img, specification, description } = laptop;
    const { processor, display, ram, storage, graphics, operatingSystem, Battery } = specification;
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null);
    return (
        <>
            <button onClick={() => setOpen(true)} className='mt-2 mr-3 text-white bg-indigo-500 px-3 py-1 rounded-lg hover:bg-indigo-800'>Details</button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-30" initialFocus={cancelButtonRef} onClose={() => setOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                                &#8203;
                            </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="">
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <Dialog.Title as="h3" className="text-xl leading-6 font-semibold border-4 border-red-500 pb-3 border-x-0 border-t-0 text-center">
                                                    About This Product
                                                </Dialog.Title>

                                                <div className="p-6 flex flex-col lg:flex-row">
                                                    <div className='flex flex-col justify-center items-center'>
                                                        <img className='w-2/4 sm:w-1/4 lg:w-3/4' src={img} alt="" />
                                                        <h2 className='text-xl text-center text-red-500 mb-4 font-semibold'>{name}</h2>
                                                        <div className='text-center mb-5 lg:text-left lg:mb-0'>
                                                            <h2 className='text-xl'><strong>Product Id: </strong>{_id}</h2>
                                                            <h2 className='text-xl'><strong>Price: </strong>{price}</h2>
                                                            <h2 className='text-xl'><strong>Quantity: </strong>{quantity}</h2>
                                                            <h2 className='text-xl'><strong>Supplier Name: </strong>{supplierName}</h2>
                                                        </div>
                                                    </div>
                                                    <div className="relative overflow-x-auto sm:rounded-lg lg:ml-40">
                                                        <table className="w-full text-sm text-left text-gray-500">
                                                            <tbody>
                                                                <tr className="bg-white border-b hover:bg-gray-50 ">
                                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                        <h2><strong>Processor</strong></h2>
                                                                    </th>
                                                                    <td className="px-6 py-4">
                                                                        <h2>{processor}</h2>
                                                                    </td>
                                                                </tr>
                                                                <tr className="bg-white border-b hover:bg-gray-50 ">
                                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                        <h2><strong>Display</strong></h2>
                                                                    </th>
                                                                    <td className="px-6 py-4">
                                                                        <h2>{display}</h2>
                                                                    </td>
                                                                </tr>
                                                                <tr className="bg-white border-b hover:bg-gray-50 ">
                                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                        <h2><strong>Ram</strong></h2>
                                                                    </th>
                                                                    <td className="px-6 py-4">
                                                                        <h2>{ram}</h2>
                                                                    </td>
                                                                </tr>
                                                                <tr className="bg-white border-b hover:bg-gray-50 ">
                                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                        <h2><strong>Storage</strong></h2>
                                                                    </th>
                                                                    <td className="px-6 py-4">
                                                                        <h2>{storage}</h2>
                                                                    </td>
                                                                </tr>
                                                                <tr className="bg-white border-b hover:bg-gray-50 ">
                                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                        <h2><strong>Graphics</strong></h2>
                                                                    </th>
                                                                    <td className="px-6 py-4">
                                                                        <h2>{graphics}</h2>
                                                                    </td>
                                                                </tr>
                                                                <tr className="bg-white border-b hover:bg-gray-50 ">
                                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                        <h2><strong>Operating System</strong></h2>
                                                                    </th>
                                                                    <td className="px-6 py-4">
                                                                        <h2>{operatingSystem}</h2>
                                                                    </td>
                                                                </tr>
                                                                <tr className="bg-white border-b hover:bg-gray-50 ">
                                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                        <h2><strong>Battery</strong></h2>
                                                                    </th>
                                                                    <td className="px-6 py-4">
                                                                        <h2>{Battery}</h2>
                                                                    </td>
                                                                </tr>
                                                                <tr className="bg-white border-b hover:bg-gray-50 ">
                                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                        <h2><strong>Description</strong></h2>
                                                                    </th>
                                                                    <td className="px-6 py-4">
                                                                        <h2>{description}</h2>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 sm:px-6 float-right">
                                        <button
                                            type="button"
                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 active:bg-red-600 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default Details;