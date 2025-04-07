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
            A medical mystery thriller series
            {/* See the latest release */} <br/><br/>
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
              {/* <h2 className="text-3xl font-bold text-gray-200 mb-4">Latest Release</h2> */}
              <h3 className="text-2xl mb-2 text-gray-300">Point Mutation</h3>
                <p className="text-gray-400 mb-6 italic">
                "When Macrae arrived for his shift that morning he had no idea he would pronounce someone dead. <br/><br/> It wasn't uncommon in the ER. It happened, just not every day. Grandpa got rushed to the hospital after being found in his pajamas on the bathroom floor, or grandma just wouldn't wake up. <br/><br/> Only this one was different because thirty-year-olds didn't die in his ER unless they wrapped themselves around a telephone pole or found the bottle of Oxycontin. They didn't die like this."
                </p>
              <a
                href="#"
                className="px-6 py-3 bg-red-800 hover:bg-red-700 text-white rounded-md font-medium transition duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Book series section */}
      <section id="book-section" className="relative z-10 py-24 bg-gray-900 bg-opacity-70">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-200">The Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Book 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-300">Point Mutation</h3>
                <p className="text-gray-400 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="text-red-500 hover:text-red-400">
                  Read more →
                </a>
              </div>
            </div>
            
            {/* Book 2 - Coming Soon */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-300">Book 2</h3>
                <p className="text-gray-400 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#book-section" className="text-red-500 hover:text-red-400">
                  Coming Soon!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author section with scroll target */}
      <section id="author-section" className="relative z-10 py-24 bg-black bg-opacity-80">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-200">About the Author</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 bg-red-950"></div>
              <div className="absolute inset-2 bg-gray-800 rounded-full flex items-center justify-center text-3xl font-bold">

              <Image
                src="/david.png"
                alt="David Grayzel"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
            </div>
            <div>
              {/* <h3 className="text-2xl font-semibold mb-4 text-gray-300">David Grayzel</h3> */}
              <p className="text-gray-400 mb-4 text-sm italic">
              David Grayzel is a physician, biotech entrepreneur, and accidental venture capitalist. After studying creative writing at Stanford, he got his MD at Harvard and completed his residency at Mass General Hospital. 
              <br/><br/>
              Compelled by the opportunity to discover new medicines, he has been CEO of several successful biotechnology companies and helped launch many others with pursuits ranging from migraine prevention to gene therapy for cancer. He is currently a Partner at Atlas Venture focused on creating the next generation of innovative medicines. 
              <br/><br/>
              His first novel, “Point Mutation,” is rooted in his decades of experience in medicine, and his lifelong admiration of The Simple Art of Murder.
              </p>
                <a href="https://atlasventure.com/team/david-grayzel-md/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">
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
