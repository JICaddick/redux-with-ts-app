import React, { useState } from 'react'

// title and content's types are inferred from the useState() call. We don't need to specify them explicitly.
export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  // we had to change the type of the event handler to React.ChangeEvent<HTMLInputElement> because the event.target.value property is only available on input elements. The same is true for the textarea element. If we tried to use event.target.value on a button element, TypeScript would complain that the property doesn't exist on that type of element.
  const onTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)
  const onContentChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value)

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button">Save Post</button>
      </form>
    </section>
  )
}