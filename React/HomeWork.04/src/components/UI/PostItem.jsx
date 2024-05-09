import logo from "../../assets/logo.png";

function PostItem(props) {
    const { title, description } = props
    return (
        <div className="postItem">
            <div className="postItem__text">
                <p>title:{title}</p>
                <p>description:{description}</p>
            </div>
            <img src={logo} alt="" />
        </div>
    )
}

export default PostItem