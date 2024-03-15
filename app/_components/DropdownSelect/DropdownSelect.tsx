"use client"

import { useState } from "react";
import clsx from 'clsx';

import { useClickOutside } from "@/_hooks";

import { DropdownListItem } from "./types";
import { DropdownSelectItem } from "./DropdownSelectItem";

interface Props {
    list: DropdownListItem[];
}

export function DropdownSelect({ list }: Props) {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState(list[0]);

    function handleCloseDropdown() {
        isActive && setIsActive(false);
    }

    function onSelectItem(item: DropdownListItem) {
        setSelected(item);
        handleCloseDropdown()
    }

    const ref = useClickOutside(handleCloseDropdown);

    return (
        <div
            ref={ref}
            className={clsx(
                "w-60",
                "relative z-10",
                "my-0 mx-auto",
                "select-none",
            )}
        >
            <div
                onClick={() => {
                    setIsActive(!isActive);
                }}
                className={clsx(
                    "w-full",
                    "flex items-center justify-center",
                    "text-sm font-semibold uppercase leading-none",
                    "cursor-pointer",
                    "custom-gradient-border",
                    "p-2.5 mb-1",
                )}
            >
                {selected.text}
            </div>
            <div
                className={clsx(
                    "w-full",
                    "absolute left-0",
                    "border rounded border-lightGreen",
                    "overflow-hidden"
                )}
                style={{ display: isActive ? "block" : "none" }}
            >
                {list.map((item) => <DropdownSelectItem item={item} onSelectItem={onSelectItem} key={item.id} />)}

            </div>
        </div>
    );
}