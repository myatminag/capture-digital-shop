import Image from 'next/image';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@repo/ui/components/dialog/dialog';
import { Button } from '@repo/ui/components/button';
import { Checkbox } from '@repo/ui/components/inputs/checkbox';
import { SearchInput } from '@repo/ui/components/inputs/search-input';

import { PlusIcon } from '@components/icons/plus-icon';

const SelectProducts = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="mt-4 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-gray-200">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAE9EA]">
            <PlusIcon className="text-primary h-5 w-5" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="border-b">
          <DialogTitle>Select products</DialogTitle>
        </DialogHeader>
        <ul className="h-96 space-y-4 overflow-x-hidden overflow-y-scroll px-6 py-2">
          <SearchInput placeholder="Search products..." />
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Temporary disable the rule because of no actual api binding */}
          {[...Array(10)].map((i) => (
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Temporary disable the rule because of no actual api binding
            <li key={i} className="flex items-center justify-between px-2">
              <div className="flex items-center justify-start gap-x-4">
                <Checkbox aria-label="Select row" />
                <div className="flex max-w-[300px] gap-x-3">
                  <Image
                    width={100}
                    height={100}
                    className="size-[44px] flex-shrink-0 rounded-sm"
                    src="https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                  <div className="">
                    <span className="truncate text-base text-neutral-800">
                      Blue product
                    </span>
                    <p className="text-sm text-neutral-500">2 Variants</p>
                  </div>
                </div>
              </div>
              <p className="text-base font-medium text-neutral-800">
                11,300 Ks
              </p>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-x-3 px-6 pb-6">
          <DialogClose asChild>
            <Button type="button" variant="outline" className="w-full">
              Close
            </Button>
          </DialogClose>
          <Button className="bg-primary-100 w-full">Select</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SelectProducts;
