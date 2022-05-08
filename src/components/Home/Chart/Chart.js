import React from 'react';
import { Link } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {

    // I am sorry for using this hardcoded data but i don't have much time
    const data = [
        {
            month: 'March',
            investment: 100000,
            sell: 241,
            ReStock: 200
        },
        {
            month: 'April',
            investment: 90000,
            sell: 221,
            ReStock: 200
        },
        {
            month: 'May',
            investment: 90000,
            sell: 211,
            ReStock: 220
        },
        {
            month: 'June',
            investment: 110000,
            sell: 300,
            ReStock: 211
        },
        {
            month: 'July',
            investment: 1200120,
            sell: 360,
            ReStock: 300
        },
    ]
    return (
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='text-center md:text-left flex flex-col mt-12 md:mt-0 md:px-0 px-5 md:mr-32'>
                <h2 className='text-4xl mb-4'>Our sales by now</h2>
                <h1 className='text-lg'>Our sales are getting Larger day by day which is amazing </h1>
                <footer className='text-sm mt-7 text-gray-500'>Restock or deliver more!!</footer>
                <Link to={'/inventory'}><button className='bg-red-500 text-lg px-3 py-1 rounded-lg mt-3'>Update Inventory</button></Link>
            </div>
            <div>
                <h2 className='text-center text-3xl mt-20 mb-5'>Our Success By now</h2>
                <div className='flex justify-center items-center text-sm'>

                    <BarChart width={340} height={400} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={"month"} stroke="purple" />
                        <YAxis stroke="purple" />
                        <Tooltip />
                        <Legend />

                        <Bar dataKey={'ReStock'} fill='#7B5C95' stroke='red'></Bar>
                        <Bar dataKey={'sell'} fill='#FF6F61' stroke='blue'></Bar>
                    </BarChart>



                </div>
            </div>
        </div>
    );
};

export default Chart;