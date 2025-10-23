import React from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'
import { IPost } from '../models/IPost'

const PostContainer2 = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(10)
  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [deletePost, {}] = postAPI.useDeletePostMutation()

  const handleRemove = (post: IPost) => {
    deletePost(post)
  }

  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  
  return (
    <div>
      <div className="post__list">
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Something went wrong.</h1>}
        {posts?.map(post => 
          <PostItem post={post} remove={handleRemove} update={handleUpdate} />
          )}
      </div>
    </div>
  )
}

export default PostContainer2