import { pageSizeOption } from "@/utils/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  RowSelectionState,
  useReactTable,
} from "@tanstack/react-table";
import React, { useEffect } from "react";

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
  totalItem,
  totalPage,
  onSelectedRowsChange,
}: TableProps<T>) => {
  console.log("data in table", data);
  console.log("columns in table", columns);
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
        pageSize: pages?.pageSize || 0,
      },
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: (updater) => {
      const newPagination =
        typeof updater === "function"
          ? updater({
              pageIndex: pages?.page || 0,
              pageSize: pages?.pageSize || 0,
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
  }, [rowSelection, table, onSelectedRowsChange]); // Re-run when selection changes

  const pageSizeOptions = pages?.pageSize
    ? [...pageSizeOption, pages?.pageSize]
    : [...pageSizeOption].sort((a, b) => a - b);

  return (
    <div className="w-full min-h-screen bg-white shadow-lg !rounded-t-2xl overflow-hidden">
      {/* table starts */}
      <div className="overflow-x-auto scroll-none">
        <table className="w-full border-separate bg-white border-spacing-0">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="w-full h-fit table-border">
                {headerGroup.headers.map((header) => {
                  // const column = header.column.columnDef as CustomColumnDef<T>;
                  return (
                    <th className=" py-5 table-border " key={header.id}>
                      <div className="flex flex-col gap-1.5 ml-5">
                        <span className="typography-caption-c1-semibold ml-1 text-text-color text-start">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </span>
                        {/* {column.search && (
                          <input
                            type="text"
                            className="w-4/5 px-3 py-1.5 rounded-lg table-search-border typography-caption-c1 placeholder:typography-caption-c2 focus:ring-2 focus:ring-primary outline-none"
                            placeholder="-Search"
                          />
                        )} */}
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
                        ? "border-t-2 border-surface"
                        : "border border-surface"
                    } `}
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="overflow-hidden flex justify-between items-center p-2 text-sm bg-gray-100 rounded-lg m-3">
        <div>
          Showing {table.getPaginationRowModel().rows.length} items of{" "}
          {totalItem} Page {pages?.page || 0 + 1} {totalPage}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className={`px-2 py-1 bg-Blue-500 rounded disabled:opacity-50 disabled:cursor-not-allowed text-white`}
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className={`px-2 py-1 bg-Blue-500 rounded disabled:opacity-50 disabled:cursor-not-allowed text-white`}
          >
            Next
          </button>

          {/* Control page size Start */}
          <div className="flex items-center gap-2">
            <span>Rows per page:</span>
            <select
              value={pages?.pageSize || 0}
              onChange={(e) => {
                pages?.setPageSize(Number(e.target.value));
                pages?.setPage(0); // ✅ Reset to first page when page size changes
              }}
              className="px-2 py-1 rounded border border-gray-300 text-sm"
            >
              {pageSizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          {/* Control page size End */}
        </div>
      </div>
    </div>
  );
};

export default Table;
