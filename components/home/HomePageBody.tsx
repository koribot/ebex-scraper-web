'use client';

import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useStore } from '@/store/common/store';
import ScrapeSTore from './../../store/data/scrape/store';
import Link from 'next/link'
import ListingLists from '../listing/ListingLists';
import { Card } from 'antd'
interface IBranch {
  content: string;
};

interface FormValues {
  ebayUrl: string;
  keywords: string;
}


const Branches: IBranch[] = [
  { content: 'Price Insights' },
  { content: 'Keyword Insights' },
  { content: 'Download Products' },
];


const HomePageBody: React.FC = () => {
  const { ScrapeStore } = useStore()
  const {
    scrape_observables: {
      ebaySearchKeyword,
      ebayURL,
      listings,
      isScrapingLoading,
      exact_url
    },
    setEbaySearchKeywords,
    performScrape,
    setEbayURL,
    resetStore
  } = ScrapeStore

  const handleSubmit = (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    if (values.keywords.length > 0 && values.ebayUrl.length > 0) {
      alert("choose only option")
      return
    }
    if (values.keywords.length > 0) {
      performScrape(values.keywords, 'endpoint_keyword')
    } else {
      setEbayURL(values.ebayUrl)
    }
    resetForm();
  };


  useEffect(() => {
    performScrape("shoes", 'endpoint_keyword')
    return () => {
      resetStore()
    }
  }, [])


  return (
    <div className="flex flex-col gap-10 items-start h-screen bg-white">

      <div className='px-20 pt-20 w-full flex flex-row justify-center'>
        <div className="container">
          <h2 className="mb-6 text-[35px] sm:text-[50px] xl:text-[65px] aos-init aos-animate font-bold text-[#3d3d3d]">
            Explore eBay and get valuable information, prices,
            and keywords.
          </h2>
          <div className='flex flex-row gap-2'>
            {Branches.map((branch: IBranch, index: number) => (
              <div
                key={index}
              >
                <p className='
                 rounded-full w-[50px] h-[50px] p-[30px] bg-white flex items-center
                 justify-center text-center text-black text-[10px] border-[1px] border-primary font-bold
                 hover:bg-primary hover:text-white cursor-pointer
                 '
                >
                  {branch.content}
                </p>
              </div>
            ))}
          </div>

          <div className="py-8">
            <hr className="h-[1px] border-5 border-b border-dashed border-border/50 bg-transparent" />
          </div>
        </div>
        <div className='bg-black h-[max-content] shadow-lg'>
          <Formik
            initialValues={{ ebayUrl: '', keywords: '' }}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-[max-content]">
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

      </div>

      <Link href='/testpage'>Go to testpage</Link>
      <a href={exact_url} className="">{exact_url}</a>
      <Card>
        <ListingLists
          Listings={listings}
          isLoading={isScrapingLoading}
        />
      </Card>
      {/* <div>
        {listings.map((item: any, index: number) => (
          // Render the title or use it in some way
          <div key={item.index}>{item.title}</div>
        ))}
      </div> */}
    </div>
  );
};

export default observer(HomePageBody);
