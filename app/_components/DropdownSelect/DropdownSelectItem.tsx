import clsx from "clsx";

import { ArrowIcon } from "@/_components/icons";
import { DropdownListItem } from "./types";

interface Props {
    item: DropdownListItem;
    onSelectItem: (item: DropdownListItem) => void;
}

export function DropdownSelectItem({ item, onSelectItem }: Props) {
    return (
        <div
            onClick={() => onSelectItem(item)}
            className={clsx(
                "flex items-center justify-between",
                "px-6 py-3",
                "bg-secondaryGrey",
                "text-sm font-semibold uppercase",
                "cursor-pointer",
                "border-b border-b-primalGrey/10 last:border-none",
                "hover:opacity-80"
            )}
        >
            {item.text}
            <ArrowIcon />
        </div>
    )
}