import { DropdownSelect } from "@/_components/DropdownSelect";

import { dropDownListItems } from "./constants";

export default function DropdownDemoPage() {
    return <DropdownSelect list={dropDownListItems} />
}