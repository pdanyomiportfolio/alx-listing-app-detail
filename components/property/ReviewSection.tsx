import { ReviewProps } from "@/interfaces";

const ReviewSection: React.FC<{ reviews: ReviewProps[] }> = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews yet</p>;
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border-b pb-4 mb-4">
          <div className="flex items-center">
            {review.avatar && (
              <img
                src={review.avatar}
                alt={review.user}
                className="w-12 h-12 rounded-full mr-4"
              />
            )}
            <div>
              <p className="font-bold">{review.user}</p>
              <p className="text-yellow-500">{review.rating} stars</p>
            </div>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
