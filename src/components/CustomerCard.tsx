import React from "react";

interface CustomerCardProps {
  item: {
    id: number;
    name: string;
    title: string;
    address: string;
    photos: string[];
    description: string;
  };
}

const CustomerCard:React.FC<CustomerCardProps> = ({ item }) => {
  return (
    <div className="p-5 ">
      <div className="flex text-2xl font-semibold flex-wrap">
        <h1 className="mr-4">{item.name}</h1>
        <h1>{item.title}</h1>
      </div>
      <div className="mt-2 line-h text-justify">
        <p>{item.description}</p>
      </div>
      <hr className="1px bg-gray-400 mt-4" />
    </div>
  );
};

export default CustomerCard;
