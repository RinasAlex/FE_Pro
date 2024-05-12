import { useState } from "react"
import { postList } from "../config/posts"
import CustomInput from "./CustomImput"
import TextBlock from "./TextBlock"
import CustomButton from "./UI/CustomButton"

const Posts = () => {
    const [titleValue, setTitleValue] = useState("");
    const [descValue, setDescValue] = useState("");
    const [posts, setPosts] = useState(postList);

    function onTitleChange(event) {
        setTitleValue(event.target.value);
    }

    function onDescChange(event) {
        setDescValue(event.target.value);
    }

    function createPost() {
        const newPost = {
            id: Date.now(),
            title: titleValue,
            description: descValue,
        }
        setPosts([...posts, newPost]);
        setTitleValue("");
        setDescValue("");

    }

    function removePost(postId) {
        setPosts(posts.filter((post) => post.id !== postId));
    }


    return (
        <div>
            <CustomInput inputValue={titleValue} placeholder="title" onHandleChange={onTitleChange} />
            <CustomInput inputValue={descValue} placeholder="title" onHandleChange={onDescChange} />
            <CustomButton text="Create post" onHandleClick={createPost} />

            {
                posts.map((item, index) =>
                    <TextBlock title={item.title} description={item.description} key={index} onHandleClick={() => removePost(item.id)} />

                )
            }

        </div>
    )
}

export default Posts
