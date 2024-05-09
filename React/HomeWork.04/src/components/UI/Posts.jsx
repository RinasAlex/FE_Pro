import PostItem from "./PostItem"



function Posts(props) {
  const arr = [
    {
      title: "first",
      description: "first",
    },
    {
      title: "second",
      description: "second",
    },
    {
      title: "third",
      description: "third",
    },
    {
      title: "fourth",
      description: "fourth",
    }
  ]

  return (
    <div className="posts__container">
      <h3>POSTS</h3>
      {arr.map((item, index) => (
        <PostItem title={item.title} description={item.description} key={index} />
      ))}
    </div>
  )
}

export default Posts