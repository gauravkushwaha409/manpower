import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  RowSelectionState,
  useReactTable,
} from "@tanstack/react-table";
import React, { useCallback, useMemo } from "react";
import CustomPagination from "./reusable-component/CustomPagination";
import { cn } from "@/lib/utils";
import { typedMemo } from "@/utils/memo";
import { usePagination } from "@/hooks/usePagination";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  rowSelection?: RowSelectionState;
  mainClassName?: string;
  tHeadCellClassName?: string;
  setRowSelection?: React.Dispatch<React.SetStateAction<RowSelectionState>>;
  onSelectedRowsChange?: (rows: T[]) => void;
  totalItems?: number;
  totalPages?: number;
}

const Table = <T extends { id: string }>({
  data,
  columns,
  rowSelection,
  setRowSelection,
  totalItems = 0,
  totalPages = 0,
  onSelectedRowsChange,
  mainClassName,
  tHeadCellClassName,
}: TableProps<T>) => {
  const pagination = usePagination();
  // Memoize table configuration to prevent unnecessary recalculations
  const tableConfig = useMemo(
    () => ({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      manualPagination: true,
      pageCount: totalPages,
      state: {
        rowSelection,
        pagination: pagination.pagination,
      },
      enableRowSelection: true,
      enableMultiRowSelection: true,
      enableColumnResizing: false,
      onRowSelectionChange: setRowSelection,
      onPaginationChange: pagination.handlePaginationChange,
      getPaginationRowModel: getPaginationRowModel(),

      getRowId: (row: T) => row.id,
    }),
    [
      data,
      columns,
      totalPages,
      rowSelection,
      pagination.pagination,
      setRowSelection,
      pagination.handlePaginationChange,
    ]
  );

  const table = useReactTable(tableConfig);

  const handleSelectedRowsChange = useCallback(() => {
    if (onSelectedRowsChange) {
      const selectedData = table
        .getSelectedRowModel()
        .rows.map((row) => row.original);
      onSelectedRowsChange(selectedData);
    }
  }, [onSelectedRowsChange, table]);

  React.useEffect(() => {
    handleSelectedRowsChange();
  }, [rowSelection, handleSelectedRowsChange]);

  const handlePageChange = useCallback(
    (page: number) => {
      pagination.handlePaginationChange({
        pageIndex: page - 1,
        pageSize: pagination.pagination.pageSize,
      });
    },
    [pagination]
  );

  const handlePerPageChange = useCallback(
    (size: number) => {
      pagination.handlePaginationChange({
        pageIndex: 0,
        pageSize: size,
      });
    },
    [pagination]
  );

  const renderHeader = useCallback(
    (headerGroup: any) => (
      <tr key={headerGroup.id} className="w-full h-fit">
        {headerGroup.headers.map((header: any) => (
          <th
            key={header.id}
            style={{
              width: header.column.getSize(),
              minWidth: header.column.columnDef.minSize,
              maxWidth: header.column.columnDef.maxSize,
            }}
            className={cn(
              `py-3 text-text-500 typo-manrope-small-body-text-semi-bold`,
              tHeadCellClassName
            )}
          >
            <div className="flex flex-col gap-1.5 ml-5">
              <span className="ml-1 text-start typography-caption-c1-semibold">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </span>
            </div>
          </th>
        ))}
      </tr>
    ),
    []
  );

  const renderRow = useCallback(
    (row: any, index: number) => (
      <tr key={row.id} className="w-full">
        {row.getVisibleCells().map((cell: any) => (
          <td
            key={cell.id}
            style={{
              width: cell.column.getSize(),
              minWidth: cell.column.columnDef.minSize,
              maxWidth: cell.column.columnDef.maxSize,
            }}
            className={`
            px-5 py-5.5 typography-caption-c1 
            text-text-400 align-middle overflow-x-hidden
            ${index % 2 === 0 ? "bg-[#F6EBF24D]" : ""}
          `}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        ))}
      </tr>
    ),
    []
  );

  return (
    <div
      className={cn(
        `h-full flex flex-col justify-between bg-white border-x border-b rounded-b-xl shadow-lg w-full overflow-hidden`,
        mainClassName
      )}
    >
      {/* Table Content */}
      <div className="flex flex-col overflow-y-auto overflow-x-auto">
        <table className="table-fixed w-full">
          <thead className="border-b">
            {table.getHeaderGroups().map(renderHeader)}
          </thead>
          <tbody className="min-w-full">
            {table
              .getRowModel()
              .rows.map((row, index) => renderRow(row, index))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <CustomPagination
        currentPage={pagination.pagination.pageIndex}
        totalItems={totalItems}
        pageCount={totalPages}
        perPage={pagination.pagination.pageSize}
        onPageChange={handlePageChange}
        onPerPageChange={handlePerPageChange}
      />
    </div>
  );
};

export default typedMemo(Table);
