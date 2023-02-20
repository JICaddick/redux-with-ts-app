import React from 'react'
import { useSelector } from 'react-redux'

interface State {
  posts: {
    id: string
    title: string
    content: string
  }[]
}

export const PostsList = () => {

  const posts = useSelector((state: State) => state.posts)
// FIX! Dis too, fix dis.
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