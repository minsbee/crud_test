import Link from "next/link"

const NotesPage = () => {
    return (
        <div>
            <h1>Notes</h1>
            <Link href="/notes/newNote" style={{
                display: 'block',
                marginBottom: 10,
                width: '100px',
                height: '30px',
                textAlign: 'center',
                padding: '10px 20px',
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none',
                color: 'inherit'
            }}>New</Link>
        </div>
    )
}

export default NotesPage;