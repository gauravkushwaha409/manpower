import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useDeleteSearchParams,
  useGetSearchParams,
  useUpdateSearchParams,
} from "@/hooks/updateSearchParams";
import { X } from "lucide-react";

interface IOption {
  label: string;
  value: string | number;
}

export function SelectFilter({
  option,
  placeHolder = "Select...",
  paramsKey,
}: {
  option: IOption[];
  placeHolder?: string;
  paramsKey: string;
}) {
  const updateParams = useUpdateSearchParams();
  const deleteParams = useDeleteSearchParams();
  const getValue = useGetSearchParams();

  const handleChangeParams = (value: string) => {
    updateParams({ [paramsKey]: value });
  };

  const handleDeleteFilter = () => {
    deleteParams([paramsKey]);
  };
  return (
    <div className="relative">
      <Select
        value={getValue(paramsKey) ?? undefined}
        onValueChange={(val) => {
          if (val) handleChangeParams(val);
          else handleDeleteFilter();
        }}
      >
        <SelectTrigger
          value={getValue(paramsKey) ?? undefined}
          className="w-45 rounded-2xl"
        >
          <SelectValue placeholder={placeHolder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{placeHolder}</SelectLabel>
            {option?.map((item) => (
              <SelectItem key={item?.value} value={item.value.toString()}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="absolute top-1/2 -translate-y-1/2 right-2.5">
        {getValue(paramsKey) && (
          <X
            className="size-4 opacity-50 text-red-500 cursor-pointer"
            onClick={() => {
              handleDeleteFilter();
            }}
          />
        )}
      </div>
    </div>
  );
}
