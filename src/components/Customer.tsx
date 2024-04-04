import React, { useState } from "react";
import customers from "../assets/Data"; 
import CustomerCard from "./CustomerCard";
import { Link } from "react-router-dom";

interface Customer {
    id: number;
    name: string;
    title: string;
    address: string;
    photos: string[];
    description: string;
}

const Customer: React.FC= () => {
    const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

    const handleCustomerClick = (customerId: number) => {
        setSelectedCustomerId(customerId);
    };

    return (
        <div className="w-[350px] h-screen overflow-y-auto no-scrollbar">
            {
                customers.map((customer) => (
                    <div key={customer.id} onClick={() => handleCustomerClick(customer.id)} className={selectedCustomerId === customer.id ? 'bg-gray-200 border-r-2 border-black' : ''}>
                    <Link 
                        to={`/customer/${customer.id}`}
                    >
                        <CustomerCard item={customer} />
                    </Link>
                    </div>
                        
                ))
            }
        </div>
    );
};

export default Customer;
