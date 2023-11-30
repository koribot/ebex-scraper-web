'use client';

import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

type IBranch = {
  content: string;
  top: number | undefined;
  left: number | undefined;
};

const Branches: IBranch[] = [
  { content: 'Price Insights', top: -60, left: -50 },
  { content: 'Keyword Insights', top: -200, left: 0 },
  { content: 'Tips', top: -200, left: 75 },
  { content: 'Download Products', top: -60, left: 125 },
];

const HomePageBody: React.FC = () => {
  const [branches, setBranches] = useState<IBranch[]>(Branches);

  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen bg-gray-200">
      <div className='relative'>
        {/* Central div */}
        <div className="centerDiv mt-8 p-4 text-gray-600 text-center bg-white rounded-lg shadow-lg">
          <p className="mb-4">
            Explore eBay and get valuable information, prices,
            and keywords.
          </p>
          <p className="font-bold">Your eBay Insights, Instantly!</p>
        </div>

        {/* Branch divs */}
        {branches.map((branch: IBranch, index: number) => (
          <div
            key={index}
            className={`branchDiv`}
            style={{ top: `${branch.top}%`, left: `${branch.left}%` }}
          >
            <p className='rounded-full w-8 h-8 flex items-center justify-center text-center'>{branch.content}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg">
        <input
          type="url"
          placeholder="Enter eBay URL"
          className="p-2 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        />
        or
        <input
          type="url"
          placeholder="Enter Keywords"
          className="p-2 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button className="mt-4 px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
          Try It Now
        </button>
      </div>
    </div>
  );
};

export default observer(HomePageBody);
