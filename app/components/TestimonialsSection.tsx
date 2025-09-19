import { testimonials } from '@/data/mockData';

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We pride ourselves on creating unforgettable experiences. Here's what our happy clients have to say about our talented artists.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100">
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
              <p className="mt-4 font-bold text-pink-500">- {testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}