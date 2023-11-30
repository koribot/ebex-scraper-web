'use client';

import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useStore } from '@/store/common/store';

interface IBranch {
  content: string;
  top: number | undefined;
  left: number | undefined;
};

interface FormValues {
  ebayUrl: string;
  keywords: string;
}


const Branches: IBranch[] = [
  { content: 'Price Insights', top: -25, left: -51 },
  { content: 'Keyword Insights', top: -300, left: 0 },
  { content: 'Title Suggestions', top: -300, left: 75 },
  { content: 'Download Products', top: -25, left: 124 },
];



const HomePageBody: React.FC = () => {
  const { HomePageStore } = useStore()
  const {
    ebaySearchKeyword,
    ebayURL,
    setEbaySearchKeywords,
    setEbayURL
  } = HomePageStore

  const handleSubmit = (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    if (values.keywords.length > 0 && values.ebayUrl.length > 0) {
      alert("choose only")
      return
    }
    if (values.keywords.length > 0) {
      setEbaySearchKeywords(values.keywords)
    } else {
      setEbayURL(values.ebayUrl)
    }

    // Add your form submission logic her
    resetForm(); // Reset the form after submission if needed
  };


  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen bg-gray-200">
      <div>
        {/* Central div */}
        <div className="centerDiv mt-8 p-4 text-gray-600 text-center bg-white rounded-lg shadow-lg">
          <p className="mb-4">
            Explore eBay and get valuable information, prices,
            and keywords.
          </p>
          <p className="font-bold">Your eBay Insights, Instantly!</p>

          {ebaySearchKeyword}
          {/* Branch divs */}
          {Branches.map((branch: IBranch, index: number) => (
            <div
              key={index}
              className={`branchDiv`}
              style={{ top: `${branch.top}%`, left: `${branch.left}%` }}
            >
              <p className='rounded-full w-8 h-8 flex items-center justify-center text-center'>{branch.content}</p>
            </div>
          ))}
        </div>
      </div>


      <Formik
        initialValues={{ ebayUrl: '', keywords: '' }}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col items-center  bg-white p-8 rounded-lg shadow-lg">
          <Field
            type="url"
            name="ebayUrl"
            placeholder="Enter eBay Search Result URL"
            className="p-3 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          />
          <span className="text-gray-500">or</span>
          <Field
            type="text"
            name="keywords"
            placeholder="Enter Keywords"
            className="p-3 mt-4 mb-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            type="submit"
            className="mt-6 px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
          >
            Try It Now
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default observer(HomePageBody);
