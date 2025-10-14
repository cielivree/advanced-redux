import React from 'react'
import { postAPI } from '../services/PostService'

const PostContainer = () => {
  const {data: posts} = postAPI.useFetchAllPostsQuery(5)
  
  return (
    <div>
      <div className="post_list">
        {posts?.map(post => 
          <PostItem/>
          )}
      </div>
    </div>
  )
}

export default PostContainer