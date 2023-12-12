'useclient'

import { observer } from "mobx-react-lite";
import { IListing } from '@/types/scrape'
import React from 'react'
import { Table } from 'antd';
import Image from 'next/image';

type ListingsProps = {
 Listings: IListing[];
 isLoading?: boolean
}

const ListingLists = ({ Listings, isLoading }: ListingsProps) => {
 const columns = [
  {
   title: '#',
   key: 'Title', // Provide a unique key for the column
   dataIndex: 'index',
   width: '50px',
   sorter: (a: any, b: any) => a.index - b.index,
   render: (index: number) => {
    return index + 1
   },
   fixed: 'top'
  },
  {
   title: 'Item Title',
   key: 'Title', // Provide a unique key for the column
   dataIndex: 'title',
   width: '500px',
   sorter: (a: any, b: any) => a.title.length - b.title.length,
  },
  {
   title: 'Price',
   key: 'Price',
   dataIndex: 'price',
   sorter: (a: any, b: any) => a.price - b.price,
   width: '50px',
  },
  {
   title: 'Image',
   key: 'Image',
   dataIndex: 'image_url',
   render: (img: string) => {
    return <Image
     alt={img}
     src={img ? img : "/skeletons/item_image_default_skeleton.jpg"}
     width={150}
     height={150}
    />
   },
   width: '200px'
  },
  {
   title: 'Item Link',
   key: 'Item link',
   dataIndex: 'link',
   width: '300px'
  },

 ];

 const listingsWithKeys = Listings.map((item: IListing) => ({ ...item, key: item.index.toString() }));

 return (
  <>
   <Table
    sticky={{ offsetHeader: 0 }}
    dataSource={listingsWithKeys}
    columns={columns}
    loading={isLoading}
   />
  </>
 );
}

export default observer(ListingLists);
