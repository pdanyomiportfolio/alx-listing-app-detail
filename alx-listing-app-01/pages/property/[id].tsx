import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";
import Layout from "@/components/layout/Layout";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  // Find the property by matching name (or better: use an actual ID field later)
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property)
    return (
      <p className="text-center mt-10 text-gray-600">Property not found</p>
    );

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Responsive layout: Details + Booking */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Section */}
            <div className="lg:col-span-2 space-y-8">
              <PropertyDetail property={property} />
              <ReviewSection reviews={property.reviews} />
            </div>

            {/* Right Section */}
            <div className="lg:col-span-1">
              <BookingSection property={property} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
