import { useParams } from "react-router-dom";
import customers from "../assets/Data";

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
  photos: string[];
  description: string;
}

const CustomerDetails: React.FC = () => {
  const { id } = useParams<string>();
  const customerId: number | undefined = id ? parseInt(id) : undefined; 

  const customer: Customer | undefined = customers.find((c: Customer) => c.id === customerId);

  if (!customer) {
    return <div className="flex justify-center items-center text-5xl ml-[500px] font-bold">Customer not found</div>;
  }

  return (
    <div className="bg-gray-100 flex flex-col items-center h-[100vh] overflow-hidden border-l" style={{ width: "calc(100% - 350px)" }}>
      <div className="flex text-4xl font-semibold mt-10">
        <h1 className="mr-4">{customer.name}</h1>
        <h1>{customer.title}</h1>
      </div>
      <p className="text-gray-400">{customer.address}</p>
      <p className="mt-1 mb-10 text-gray-700">{customer.description}</p>
      <div className="grid grid-cols-3 gap-10 px-4">
        {customer.photos.map((photo: string, index: number) => (
          <img key={index} src={photo} alt="" className="w-[200px] h-[200px] object-cover rounded-lg shadow-xl" />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
