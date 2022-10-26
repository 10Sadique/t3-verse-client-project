import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckoutPage = () => {
    const course = useLoaderData();
    const { id, title, price } = course;

    return (
        <div className="md:w-[40%] w-full bg-gray-100 text-gray-800 font-semibold px-5 py-5 rounded-lg mx-auto">
            <h1 className="mb-10 text-3xl font-bold text-center">Checkout</h1>
            <div className="divide-y-2">
                <div className="flex gap-2 pb-3 text-lg">
                    <span>Course:</span>
                    <span>{title}</span>
                </div>
                <div className="flex items-center justify-between py-3 text-lg">
                    <p>Price:</p>
                    <p>${price}</p>
                </div>
                <div className="flex items-center justify-between py-3 text-lg">
                    <p>Tax:</p>
                    <p>{(price * 0.1).toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between py-3 text-lg">
                    <p>Total:</p>
                    <p>{price + parseFloat((price * 0.1).toFixed(2))}</p>
                </div>
            </div>
            <Link to={`/checkout/success/${id}`}>
                <button className="w-full py-2 mt-5 text-white transition-all duration-300 bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700">
                    Checkout
                </button>
            </Link>
        </div>
    );
};

export default CheckoutPage;
