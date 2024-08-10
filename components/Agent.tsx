import Image from 'next/image'

const FindAgentSection = () => {
  return (
    <section className="flex h-fit  flex-col md:flex-row justify-between items-center p-8  shadow-md dark:bg-gray-950    rounded-sm mt-11">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">Find an Agent</h1>
        <p className="mb-4">
          Here are several types of real estate agents, each with their own specific responsibilities and areas of expertise. Some common types of real estate agents include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Buyer’s Agent: These agents represent buyers in the home-buying process.</li>
          <li>Listing Agent: These agents represent sellers in the home-selling process.</li>
          <li>Dual Agent: These agents represent both the buyer and the seller.</li>
          <li>Commercial Agent: These agents specialize.</li>
          <li>Property Manager: These agents specialize in managing rental properties.</li>
        </ul>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Find an Agent</button>
      </div>
      <div className="flex space-x-4 mt-8 md:mt-0">
        <div className="w-50 h-fit py-3 rounded-lg shadow-lg bg-gray-100 dark:bg-zinc-950 flex flex-col items-center p-4">
          <Image
            src="/about.jpg"
            alt="Agent 1"
            className="w-24 h-24 rounded-full mb-4"
            width={300}
            height={300}
          />
          <h3 className="font-semibold  text-zinc-950 dark:text-zinc-400">Kristin</h3>
          <div className="text-yellow-400">⭐⭐⭐⭐☆</div>
          <p className="text-sm text-gray-600">California, USA-FL</p>
          <p className="text-sm text-gray-600">Agent License #017825</p>
        </div>
        <div className="w-50 h-fit py-3 rounded-lg shadow-lg bg-gray-100 dark:bg-zinc-950 flex flex-col items-center p-4">
          <Image
            src="/about.jpg"
            alt="Agent 2"
            className="w-24 h-24 rounded-full mb-4"
            width={300}
            height={300}
          />
          <h3 className="font-semibold text-zinc-950 dark:text-zinc-400">Kristin</h3>
          <div className="text-yellow-400">⭐⭐⭐☆☆</div>
          <p className="text-sm text-gray-600">California, USA-FL</p>
          <p className="text-sm text-gray-600">Agent License #017825</p>
        </div>
      </div>
    </section>
  );
};

export default FindAgentSection;
