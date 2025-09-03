import { pageSizeOption } from '@/utils/table';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  RowSelectionState,
  useReactTable,
} from '@tanstack/react-table';
import React, { useEffect } from 'react';
import CustomPagination from './reusable-component/CustomPagination';

export type CustomColumnDef<T> = ColumnDef<T> & {
  search?: boolean;
};

interface TableProps<T> {
  data: T[];
  columns: CustomColumnDef<T>[];
  rowSelection?: RowSelectionState;
  setRowSelection?: React.Dispatch<React.SetStateAction<RowSelectionState>>;
  onSelectedRowsChange?: (rows: T[]) => void;
  totalItem?: number;
  totalPage?: number;
  pages?: {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    pageSize: number;
    setPageSize: React.Dispatch<React.SetStateAction<number>>;
  };
}

const Table = <T,>({
  data,
  columns,
  rowSelection,
  setRowSelection,
  pages,
  totalItem = 0,
  totalPage = 0,
  onSelectedRowsChange,
}: TableProps<T>) => {
  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount: totalPage,
    state: {
      rowSelection,
      pagination: {
        pageIndex: pages?.page || 0,
        pageSize: pages?.pageSize || 10,
      },
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: (updater) => {
      const newPagination =
        typeof updater === 'function'
          ? updater({
              pageIndex: pages?.page || 0,
              pageSize: pages?.pageSize || 10,
            })
          : updater;
      pages?.setPage(newPagination.pageIndex);
      pages?.setPageSize(newPagination.pageSize);
    },
    getPaginationRowModel: getPaginationRowModel(),
  });

  useEffect(() => {
    if (onSelectedRowsChange) {
      const selectedData = table
        .getSelectedRowModel()
        .rows.map((row) => row.original);
      onSelectedRowsChange(selectedData);
    }
  }, [rowSelection, table, onSelectedRowsChange]);

  const pageSizeOptions = pages?.pageSize
    ? [...pageSizeOption, pages?.pageSize]
    : [...pageSizeOption].sort((a, b) => a - b);

  return (
    <>
      <div className="flex flex-col gap-4 bg-white shadow-lg border border-primary-50 w-full overflow-hidden">
        <div className="overflow-x-auto scroll-none">
          <table className="bg-white w-full border-separate border-spacing-0">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="table-border w-full h-fit">
                  {headerGroup.headers.map((header) => {
                    const column = header.column
                      .columnDef as CustomColumnDef<T>;
                    return (
                      <th
                        className="table-border bg-primary-400 py-5 text-white"
                        key={header.id}
                      >
                        <div className="flex flex-col gap-1.5 ml-5">
                          <span className="ml-1 text-start typography-caption-c1-semibold">
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </span>
                          {column.search && (
                            <input
                              type="text"
                              className="table-search-border px-3 py-1.5 rounded-lg outline-none focus:ring-2 focus:ring-primary w-4/5 typography-caption-c1 placeholder:typography-caption-c2"
                              placeholder="-Search"
                            />
                          )}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>

            <tbody className="min-w-full">
              {table.getRowModel().rows.map((row, index) => (
                <tr key={row.id} className={`w-full table-border`}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      className={`px-5 py-2 typography-caption-c1 table-border align-middle ${
                        index === 0
                          ? 'border-t-2 border-surface'
                          : 'border border-surface'
                      } `}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <CustomPagination
        currentPage={(pages?.page || 0) + 1}
        totalItems={totalItem}
        pageCount={totalPage}
        perPage={pages?.pageSize || 10}
        onPageChange={(page) => pages?.setPage(page - 1)}
        recordPerPage={
          <div className="flex items-center gap-2">
            <span className="text-xs">Show</span>
            <select
              value={pages?.pageSize || 10}
              onChange={(e) => {
                pages?.setPageSize(Number(e.target.value));
                pages?.setPage(0);
              }}
              className="bg-white px-2 py-1 border-2 border-gray-100 rounded text-sm"
            >
              {pageSizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <span className="text-xs">entries</span>
          </div>
        }
      />
    </>
  );
};

export default Table;
