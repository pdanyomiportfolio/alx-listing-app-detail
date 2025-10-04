import { useState } from "react";
import { PropertyProps } from "@/interfaces";

const BookingSection: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  const { price } = property;
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");

  // Calculate number of nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24);
    return diffDays > 0 ? diffDays : 0;
  };

  const nights = calculateNights();
  const total = nights * price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      {/* Check-in */}
      <div className="mt-4">
        <label className="block text-gray-700">Check-in</label>
        <input
          type="date"
          className="border p-2 w-full mt-2"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      {/* Check-out */}
      <div className="mt-4">
        <label className="block text-gray-700">Check-out</label>
        <input
          type="date"
          className="border p-2 w-full mt-2"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      {/* Total payment */}
      <div className="mt-4">
        <p>
          Total payment:{" "}
          <strong>{nights > 0 ? `$${total} (${nights} nights)` : "--"}</strong>
        </p>
      </div>

      {/* Reserve button */}
      <button
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md w-full"
        disabled={nights === 0}
      >
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
