import React from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
  const {data: posts} = postAPI.useFetchAllPostsQuery(5)
  
  return (
    <div>
      <div className="post_list">
        {posts?.map(post => 
          <PostItem post={post} />
          )}
      </div>
    </div>
  )
}

export default PostContainer