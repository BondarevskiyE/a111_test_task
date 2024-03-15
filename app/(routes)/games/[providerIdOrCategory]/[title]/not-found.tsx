import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h2>Game not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/games">Return Home</Link>
        </div>
    )
}