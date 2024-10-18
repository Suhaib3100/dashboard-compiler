
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import img1 from "@/public/images/avatar/avatar-7.jpg";
import img2 from "@/public/images/avatar/avatar-2.jpg";
import img3 from "@/public/images/avatar/avatar-3.jpg";
import img4 from "@/public/images/avatar/avatar-4.jpg";
import img5 from "@/public/images/avatar/avatar-5.jpg";
import img6 from "@/public/images/avatar/avatar-6.jpg";
import { Fragment } from 'react';
import { StaticImageData } from 'next/image';

type DataItem = {
  id: number;
  name: string;
  customerId: string;
  amount: string;
  image: StaticImageData;
};
const data: DataItem[] = [
  {
    id: 1,
    name: "Chester Bass",
    customerId: "#546936",
    amount: "8863",
    image: img1,
  },
  {
    id: 2,
    name: "Chester Bass",
    customerId: "#546936",
    amount: "8863",
    image: img2,
  },
  {
    id: 3,
    name: "Chester Bass",
    customerId: "#546936",
    amount: "8863",
    image: img3,
  },
  {
    id: 4,
    name: "Chester Bass",
    customerId: "#546936",
    amount: "8863",
    image: img4,
  },
  {
    id: 5,
    name: "Chester Bass",
    customerId: "#546936",
    amount: "8863",
    image: img5,
  },
  {
    id: 6,
    name: "Chester Bass",
    customerId: "#546936",
    amount: "8863",
    image: img6,
  },
  {
    id: 7,
    name: "Chester Bass",
    customerId: "#546936",
    amount: "8863",
    image: img4,
  },
  {
    id: 8,
    name: "Chester Bass",
    customerId: "#546936",
    amount: "8863",
    image: img5,
  },
  {
    id: 9,
    name: "Chester Bass",
    customerId: "#546936",
    amount: "8863",
    image: img6,
  },
  {
    id: 10,
    name: "Chester Bass",
    customerId: "#546936",
    amount: "8863",
    image: img4,
  },
  {
    id: 11,
    name: "Chester Bass",
    customerId: "#546936",
    amount: "8863",
    image: img5,
  },
  {
    id: 12,
    name: "Chester Bass",
    customerId: "#546936",
    amount: "8863",
    image: img6,
  }
];


const Transaction = () => {

  return (
    <Fragment>
      {
        data.map((item, index) => (
          <li
            key={`transaction-${index}`}
            className='flex justify-between items-center gap-2 py-3 px-6 hover:bg-default-50'
          >
            <div className='flex items-center gap-3'>
              <Avatar className="h-12 w-12">
                <AvatarImage src={item.image.src} alt="" />
                <AvatarFallback>{item.name}</AvatarFallback>
              </Avatar>
              <div className='flex flex-col gap-1'>
                <span className='text-sm font-medium text-default-700'> {item.name}</span>
                <span className='text-xs font-medium text-default-600'>{item.customerId}</span>
              </div>
            </div>
            <span className='text-sm font-medium text-primary-500'>${item.amount}</span>
          </li>
        ))
      }
    </Fragment>

  );
};

export default Transaction;