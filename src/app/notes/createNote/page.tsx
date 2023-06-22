import { NextPage } from "next"

const CreateNote: NextPage = () => {
    return (
        <div>
            <form action='/api/post/newNote' method="POST" >
                <input type="text" name="title" placeholder="제목을 입력하세요" />
                <input type="text" name="content" placeholder="내용을 입력하세요" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateNote;