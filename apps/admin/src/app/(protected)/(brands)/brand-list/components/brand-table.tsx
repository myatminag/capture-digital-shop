'use client';

import { DataTable } from '@repo/ui/components/table/data-table';

import Filter from './filter';
import { columns } from './columns';
import { useBrandList } from '../use-brand-list';
import { categories } from '../../../(categories)/category-list/components/data';

const BrandTable = () => {
  const { viewType } = useBrandList();

  return (
    <>
      <div className="flex items-center">
        <h2 className="text-brand-900 text-lg font-bold">
          Brands <span className="text-md font-normal">(32)</span>
        </h2>
        <Filter />
      </div>

      <DataTable data={categories} columns={columns} viewType={viewType} />
    </>
  );
};

export default BrandTable;
