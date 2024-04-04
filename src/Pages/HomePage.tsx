import Customer from "../components/Customer.tsx"
import CustomerDetails from "../components/CustomerDetails"


const HomePage = () => {
  return (
    <div className="flex">
        <Customer/>
        <CustomerDetails/>
    </div>
  )
}

export default HomePage