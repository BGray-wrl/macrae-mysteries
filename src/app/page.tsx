import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Boston skyline background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/boston.png"
          alt="Boston skyline at night"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          className="brightness-[0.3]"
        />
      </div>

      {/* Hero section */}
      <section className="relative z-10 pt-32 pb-16 px-8 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            MACRAE MYSTERIES
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
            <div className="relative w-64 h-96 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/book-cover.png"
                alt="Macrae Mysteries Book Cover"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </div>
            <div className="max-w-md text-left">
              <h2 className="text-3xl font-bold mb-4">Latest Release</h2>
              <h3 className="text-2xl mb-2 text-gray-200">Point Mutation</h3>
              <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi velit condimentum nisl, eget aliquam nunc quam nec nisi.
              </p>
              <a
                href="#book-section"
                className="px-6 py-3 bg-red-800 hover:bg-red-700 text-white rounded-md font-medium transition duration-300"
              >
                Explore the Series
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Book series section */}
      <section id="book-section" className="relative z-10 py-24 bg-gray-900 bg-opacity-70">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-200">The Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((book) => (
              <div key={book} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-300">Book {book}</h3>
                  <p className="text-gray-400 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#" className="text-red-500 hover:text-red-400">
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author section with scroll target */}
      <section id="author-section" className="relative z-10 py-24 bg-black bg-opacity-80">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-200">About the Author</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-red-800 to-gray-900"></div>
              <div className="absolute inset-2 bg-gray-800 rounded-full flex items-center justify-center text-3xl font-bold">
                DG
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-300">David Grayzel</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Maecenas feugiat magna vel diam finibus, vel ultrices metus aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
              </p>
              <a href="#" className="text-red-500 hover:text-red-400">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Macrae Mysteries. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
