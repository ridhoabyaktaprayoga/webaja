"use client";

import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  { 
    name: "Chealsea Morgan",
    title: "CEO of Subway",
    rating: 5,
    content:
      "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
  },
  {
    name: "Nick Cave",
    title: "CMO of Nokia",
    rating: 5,
    content:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
  },
  {
    name: "Lana Rosenfeld",
    title: "Senior VP of Pinterest",
    rating: 5,
    content:
      "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
  },
  {
    name: "Lana Rosenfeld",
    title: "Senior VP of Pinterest",
    rating: 5,
    content:
      "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
  },
  {
    name: "Lana Rosenfeld",
    title: "Senior VP of Pinterest",
    rating: 5,
    content:
      "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            What Our Users Are Saying
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="overflow-x-auto whitespace-nowrap py-4">
            <div className="flex gap-6 px-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="inline-block min-w-[300px] max-w-[400px]">
                  <TestimonialCard
                    name={testimonial.name}
                    title={testimonial.title}
                    rating={testimonial.rating}
                    content={testimonial.content}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-r"
            onClick={() => document.querySelector('.overflow-x-auto')?.scrollBy({ left: -300, behavior: 'smooth' })}
          >
            &lt;
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-l"
            onClick={() => document.querySelector('.overflow-x-auto')?.scrollBy({ left: 300, behavior: 'smooth' })}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;