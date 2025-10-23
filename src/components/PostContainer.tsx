import React, {useEffect, useState} from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'
import { IPost } from '../models/IPost'

const PostContainer = () => {
  const [limit, setLimit] = useState(100)
  const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit)
  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [deletePost, {}] = postAPI.useDeletePostMutation()

//  {
//    pollingInterval: 10000      // getting renewed data in interval
//  })

//  useEffect(() => {
//    setTimeout(() => {
//      setLimit(5)
//    }, 5000)
// }, [])

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
        <button onClick={() => refetch()}>Refetch</button>
        {posts?.map(post => 
          <PostItem post={post} remove={handleRemove} update={handleUpdate}  />
          )}
      </div>
    </div>
  )
}

export default PostContainer