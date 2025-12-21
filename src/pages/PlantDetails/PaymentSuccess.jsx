import axios from 'axios';
import React, { useEffect } from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import { Link, useSearchParams, useNavigate } from 'react-router';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const navigate = useNavigate();

    useEffect(() => {
        if (!sessionId) return; // session_id missing check

        const sendSession = async () => {
            try {
                const res = await axios.post(
                    `${import.meta.env.VITE_API_URL}/payment-success`,
                    { sessionId }
                );
                console.log("Payment success response:", res.data);

                // Optional: auto redirect to bookings after 3 sec
                setTimeout(() => {
                    navigate("/dashboard/my-booking");
                }, 6000);
            } catch (error) {
                console.error("Payment success error:", error);
            }
        };

        sendSession();
    }, [sessionId, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="bg-base-100 p-10 rounded-2xl shadow-lg max-w-md w-full text-center">
                <FaCheckSquare className="h-20 w-20 text-green-500 mx-auto" />
                <h2 className="text-3xl font-bold mt-4">Payment Successful 🎉</h2>
                <p className="text-gray-500 mt-2">
                    Your decoration service has been booked successfully.
                </p>

                <div className="mt-6 space-y-3">
                    <Link
                        to="/dashboard/my-booking"
                        className="btn btn-success w-full"
                    >
                        View Booking
                    </Link>

                    <Link
                        to="/"
                        className="btn btn-outline w-full"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
