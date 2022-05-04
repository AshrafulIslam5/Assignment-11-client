import React from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from '../../../Logos/logo.png';
import logo2 from '../../../Logos/logo2.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import profilePhoto from '../../../Logos/user.png';
import { signOut } from 'firebase/auth';
import HeaderSpinner from './HeaderSpinner';

// ---------- Used Tailwind's Way of making navbar ----------------//

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {
    const [user, loading] = useAuthState(auth);
    if (user?.photoURL === null) {
        user.photoURL = profilePhoto;
    }
    const signOUT = () => {
        signOut(auth);
    }

    // neeeded to make this array for talwind navbar
    const navigation = [
        ['Home', '/home'],
        ['Inventory', '/inventory'],
        ['About', '/about'],
        ['Blogs', '/blogs'],
    ]
    return (
        <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-20">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-8 w-auto"
                                        src={logo}
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block w-24"
                                        src={logo2}
                                        alt="Workflow"
                                    />
                                </div>

                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {/* destructured from here easily */}
                                    {navigation.map(([name, route]) => (
                                        <Link to={route} key={name}>
                                            <button
                                                className={classNames(
                                                    name.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={name.current ? 'page' : undefined}
                                            >
                                                {name}
                                            </button>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                {/* Profile dropdown */}
                                {
                                    loading ? <HeaderSpinner></HeaderSpinner>:
                                    user
                                        ?
                                        <Menu as="div" className="ml-3 relative">
                                            <div>
                                                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="h-8 w-8 rounded-full"
                                                        src={user.photoURL}
                                                        alt=""
                                                    />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>
                                                        <p
                                                            className={classNames('block px-4 py-2 text-sm text-gray-700 text-center')}
                                                        >
                                                            Name: <span className='text-purple-400 font-semibold'>{user.displayName}</span>
                                                        </p>
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                                <button
                                                                    onClick={signOUT}
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-red-500 font-semibold w-full')}
                                                            >
                                                                Sign out
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                :
                                <Link to={'/signin'}><button className='border px-3 py-1 text-white hover:bg-red-500 hover:border-red-500'>SignIn</button></Link>
                                 }
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map(([name, route]) => (
                                <Link to={route} key={name}>
                                    <button
                                        className={classNames(
                                            name.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'px-3 py-2 rounded-md text-sm font-medium'
                                        )}
                                        aria-current={name.current ? 'page' : undefined}
                                    >
                                        {name}
                                    </button>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Header;