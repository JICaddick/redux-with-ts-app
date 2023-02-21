import { useSelector } from 'react-redux' // Import the `useSelector` hook from React Redux. This hook allows us to read values from the store state, and subscribe to updates to that state.

// the difference between an interface and a type is that a type can be used to declare a primitive, union, or tuple, whereas an interface can only be used to declare an object type. 
interface State {
  posts: {
    id: string
    title: string
    content: string
  }[]
}

const PostsList = () => {
  const posts = useSelector((state: State) => state.posts)

  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList