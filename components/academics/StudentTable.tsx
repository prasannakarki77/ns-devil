"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, Eye, MoreHorizontal, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Student } from "@/types/student";
import { ACADEMICS } from "@/mock/academics";
import toast from "react-hot-toast";
import { ConfirmDialog } from "../ConfirmDialog";

export function StudentTable() {
  const [data, setData] = useState<Student[]>(ACADEMICS);
  const [selectedId, setSelectedId] = useState<Number>();
  const [open, setOpen] = useState(false);

  const handleDelete = async (id: number) => {
    setSelectedId(id);
    setOpen(true);
  };

  const onDelete = async () => {
    try {
      const filteredData = data.filter((data) => data.id !== selectedId);
      setData(filteredData);
      toast.success("Delete success");
    } catch (error) {
      toast("Delete failed");
    }
  };

  const columns: ColumnDef<Student>[] = [
    {
      accessorKey: "id",
      header: ({ column }) => {
        return <div className="text-left">Id</div>;
      },
      cell: ({ row }) => (
        <div className="text-left font-medium">{row.getValue("id")}</div>
      ),
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return <div className="text-left">Title</div>;
      },
      cell: ({ row }) => (
        <div className="text-left font-medium">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "class",
      header: ({ column }) => {
        return <div className="text-left">Class</div>;
      },
      cell: ({ row }) => (
        <div className="text-left font-medium">{row.getValue("class")}</div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="flex gap-2 items-center "
                onClick={() => {}}
              >
                <Eye size={15} />
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex gap-2 items-center "
                onClick={() => handleDelete(row.original.id)}
              >
                <Trash2 size={15} />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full ">
      <div className="flex items-center px-3 py-4 bg-secondary  rounded-t-xl ">
        <Input
          placeholder="Filter students..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm focus-visible:ring-0 focus-visible:ring-offset-0 "
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Class <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem
              className="capitalize"
              checked={table.getColumn("class")?.getFilterValue() == undefined}
              onCheckedChange={(value) =>
                table.getColumn("class")?.setFilterValue(undefined)
              }
            >
              All
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              className="capitalize"
              checked={table.getColumn("class")?.getFilterValue() == "Class A"}
              onCheckedChange={(value) =>
                table.getColumn("class")?.setFilterValue("Class A")
              }
            >
              Class A
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              className="capitalize"
              checked={table.getColumn("class")?.getFilterValue() == "Class B"}
              onCheckedChange={(value) =>
                table.getColumn("class")?.setFilterValue("Class B")
              }
            >
              Class B
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              className="capitalize"
              checked={table.getColumn("class")?.getFilterValue() == "Class C"}
              onCheckedChange={(value) =>
                table.getColumn("class")?.setFilterValue("Class C")
              }
            >
              Class C
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className=" border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No data available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
      <ConfirmDialog
        description="Are you sure you want to delete ?"
        onConfirm={onDelete}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}
