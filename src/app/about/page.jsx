export default function AboutPage() {
  return (
    <section className="min-h-screen bg-purple-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Tech-Shop
        </h1>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Tech-Shop is your trusted destination for premium gadgets at unbeatable prices.
          We believe technology should be accessible to everyone - without compromising quality.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to bring you cutting-edge tech products at the best market prices.
              From smartphones to gaming gear - we ensure every customer gets top-notch
              performance and value for their money.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become the most reliable, affordable and customer-centric online tech store.
              We aim to make innovation and performance accessible to every household.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Why Choose Tech-Shop?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">💰 Best Prices</h3>
            <p className="text-gray-600">
              We compare market prices daily to ensure you always get the best deals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">⚡ Fast Delivery</h3>
            <p className="text-gray-600">
              Quick, reliable shipping so you receive your products right on time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">⭐ Trusted Quality</h3>
            <p className="text-gray-600">
              Every product is verified for performance and durability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">🛠 After-Sales Support</h3>
            <p className="text-gray-600">
              Our team is always ready to assist you with product issues or queries.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">🔒 Secure Shopping</h3>
            <p className="text-gray-600">
              We ensure safe payments with strong encryption and verified gateways.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">❤️ Customer First</h3>
            <p className="text-gray-600">
              Your satisfaction is our top priority - always.
            </p>
          </div>
        </div>

        {/* Final Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Commitment</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Tech-Shop, we’re passionate about helping you find the perfect tech for
            your lifestyle - whether you’re a gamer, creator, student or professional.
            We don’t just sell products; we deliver a complete experience built on trust,
            quality and innovation.
          </p>
        </div>

      </div>
    </section>
  );
}
