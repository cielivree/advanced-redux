import React, {useEffect, useState} from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
  const [limit, setLimit] = useState(10)
  const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, {
    pollingInterval: 10000      // getting renewed data in interval
  })

  useEffect(() => {
    setTimeout(() => {
      setLimit(5)
    }, 5000)
  }, [])

  return (
    <div>
      <div className="post__list">
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Something went wrong.</h1>}
        <button onClick={() => refetch()}>Refetch</button>
        {posts?.map(post => 
          <PostItem post={post} />
          )}
      </div>
    </div>
  )
}

export default PostContainer