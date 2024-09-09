import React from 'react';

const reviews = [
  {
    id: 1,
    rating: 5,
    text: "I recently visited Vardhan Interior for my home renovation, and I couldn't be happier with the results! The team was incredibly professional and attentive to my needs. They guided me through the design process and delivered exactly what I envisioned. The quality of work is top-notch, and I highly recommend them for anyone looking to transform their space!",
    reviewer: "John D."
  },
  {
    id: 2,
    rating: 4,
    text: "Great experience working with Binarylogix Technologies! They developed a custom software solution for our business that has streamlined our operations significantly. The team was knowledgeable and responsive to our needs throughout the project. I would definitely work with them again in the future!",
    reviewer: "Sarah K."
  },
  {
    id: 3,
    rating: 5,
    text: "Absolutely thrilled with my recent experience at the skin and laser clinic! The staff was friendly and made me feel comfortable from the moment I walked in. The treatment was effective, and I noticed immediate results. I highly recommend this clinic to anyone looking to enhance their skincare routine!",
    reviewer: "Emma R."
  },
  {
    id: 4,
    rating: 3,
    text: "Manvika Packers and Movers did a decent job with my recent move. The team was punctual and handled my belongings with care. However, I wish they could have provided more updates during the process. Overall, it was a good experience, and I would consider using their services again.",
    reviewer: "Michael S."
  },
  {
    id: 5,
    rating: 5,
    text: "I attended a coding workshop hosted by AccioJob, and it was fantastic! The instructors were knowledgeable and engaging, making complex topics easy to understand. I left the workshop feeling inspired and more confident in my coding skills. Highly recommend to anyone looking to improve their programming abilities!",
    reviewer: "Lisa T."
  },
];

const Reviews = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center border-2 mx-auto bg-white w-[60%] border-black rounded-xl p-2 text-black mb-8">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map(review => (
          <div
            key={review.id}
            className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="text-yellow-500 text-lg">{'⭐'.repeat(review.rating)}</div>
            </div>
            <p className="text-gray-700 mb-4">{review.text}</p>
            <p className="text-right text-gray-600 italic">- {review.reviewer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
