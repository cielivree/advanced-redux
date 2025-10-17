import React from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer2 = () => {
  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(10)
  
  return (
    <div>
      <div className="post__list">
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Something went wrong.</h1>}
        {posts?.map(post => 
          <PostItem post={post} />
          )}
      </div>
    </div>
  )
}

export default PostContainer2