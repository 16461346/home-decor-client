import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DecoratorRequestRow from "../../../components/Dashboard/TableRows/DecoratorRequestRow";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const DecoratorRequest = () => {
  const { data: requests = [], isLoading, refetch } = useQuery({
    queryKey: ["decoratorRequests"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/decorator-requests`
      );
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 bg-base-200 text-left">Image</th>
                <th className="px-5 py-3 bg-base-200 text-left">Name</th>
                <th className="px-5 py-3 bg-base-200 text-left">Email</th>
                <th className="px-5 py-3 bg-base-200 text-left">Phone</th>
                <th className="px-5 py-3 bg-base-200 text-left">Division</th>
                <th className="px-5 py-3 bg-base-200 text-left">District</th>
                <th className="px-5 py-3 bg-base-200 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((request) => (
                <DecoratorRequestRow
                  key={request._id}
                  request={request}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DecoratorRequest;
