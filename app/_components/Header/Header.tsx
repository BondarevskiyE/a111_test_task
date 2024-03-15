import clsx from "clsx";
import Link from "next/link";

export function Header() {
    return (
        <header
            className={clsx(
                "w-full h-10",
                "px-5 py-2",
                "mb-10",
                "*:mr-10",
            )}
        >
            <Link className="hover:opacity-80" href="/move-zeros">MoveZeros function (Task 1)</Link>
            <Link className="hover:opacity-80" href="/dropdown-demo">Dropdown demo (task 2)</Link>
            <Link className="hover:opacity-80" href="/games">SSG game (task 3)</Link>
        </header>
    )
}