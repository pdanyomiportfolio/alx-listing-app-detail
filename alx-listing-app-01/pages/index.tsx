import Image from "next/image";
import Link from "next/link";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Layout from "@/components/layout/Layout";

export default function HomePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        

        {/* Hero Section */}
        <section
          className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
          style={{ backgroundImage: `url('/assets/image1.png')` }}
        >
          <div className="bg-black bg-opacity-40 p-6 rounded-lg">
            <h1 className="text-white text-5xl font-bold mb-2">
              Find your favorite place here!
            </h1>
            <p className="text-gray-200 text-lg">
              The best prices for over 2 million properties worldwide
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <div className="container mx-auto flex flex-wrap justify-between items-center py-6">
          <div className="flex flex-wrap gap-3">
            {[
              "All",
              "Top Villa",
              "Free Reschedule",
              "Book Now, Pay Later",
              "Self Checkin",
              "Instant Book",
            ].map((filter, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full border text-sm ${
                  index === 0
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex space-x-3 text-gray-600 text-sm mt-4 md:mt-0">
            <button className="hover:text-green-600">Filter</button>
            <button className="hover:text-green-600">
              Sort by: Highest Price
            </button>
          </div>
        </div>

        {/* Property Cards */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-10">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                />
                {property.discount && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {property.discount}% Off
                  </span>
                )}
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {property.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {property.address.city}, {property.address.country}
                </p>
                <div className="flex items-center mt-2 text-yellow-500">
                  <span className="mr-1">⭐</span>
                  <span>{property.rating}</span>
                </div>
                <p className="mt-2 font-semibold text-gray-800">
                  ${property.price}/night
                </p>

                <Link href={`/property/${property.name}`}>
                  <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
