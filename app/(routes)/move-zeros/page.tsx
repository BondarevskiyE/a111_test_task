import { MoveZerosForm } from "./components";

export default function MoveZerosPage() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <p className="text-xl font-light mb-5">Please fill in the area with <b>numbers</b> separated by <b>commas</b>, <b>dots</b> or <b>spaces</b ></p>
            <MoveZerosForm />
        </div>
    )
}