import { useQuery } from "@tanstack/react-query";
import CustomerOrderDataRow from "../../../components/Dashboard/TableRows/CustomerOrderDataRow";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyBooking = () => {
  const {user}=useAuth()
  const axiosSecure=useAxiosSecure()
  const { data: Booking = [], isLoading } = useQuery({
    queryKey: ["bookings",user?.email],
    queryFn:async()=>{
      const result=await axiosSecure(`${import.meta.env.VITE_API_URL}/my-bookins`)
      return result.data
    }
  });

  if(isLoading) return <LoadingSpinner/>

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-base-200 border-b border-gray-200 text-base-content text-left text-sm uppercase font-normal"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-base-200 border-b border-gray-200 text-base-content text-left text-sm uppercase font-normal"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-base-200 border-b border-gray-200 text-base-content text-left text-sm uppercase font-normal"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-base-200 border-b border-gray-200 text-base-content text-left text-sm uppercase font-normal"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-base-200 border-b border-gray-200 text-base-content text-left text-sm uppercase font-normal"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-base-200 border-b border-gray-200 text-base-content text-left text-sm uppercase font-normal"
                    >
                      S-Time
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-base-200 border-b border-gray-200 text-base-content text-left text-sm uppercase font-normal"
                    >
                      E-Time
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-base-200 border-b border-gray-200 text-base-content text-left text-sm uppercase font-normal"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-base-200 border-b border-gray-200 text-base-content text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Booking.map((Sbooking,i)=> <CustomerOrderDataRow key={i} Sbooking={Sbooking} />)
                  }
                  
    
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBooking;
