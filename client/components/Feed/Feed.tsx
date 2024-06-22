/* eslint-disable react-hooks/exhaustive-deps */
import FeedPost from '../FeedPost/FeedPost'
import { useState, useEffect } from 'react'
import { Post } from '../../../models/postFeed'
import { getAllPosts } from '../../apis/posts'
interface FeedProps {
  posts: Post[]
}

export default function Feed(props: FeedProps) {
  const pageSize = 2

  const [items, setItems] = useState(props.posts.slice(0, pageSize))
  const [page, setPage] = useState(1)
  const loadItems = async () => {
    const start = items.length
    const lastPost = props.posts.length
    let end = start + pageSize
    if (end > lastPost) end = lastPost
    const data = await getAllPosts()
    items.push(...data.slice(start, end))

    setItems(items)
  }
  useEffect(() => {
    loadItems()
  }, [loadItems, page])

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how close the user is to the bottom
      const scrollPosition = window.innerHeight + window.scrollY
      const scrollMax = document.body.offsetHeight - 10

      if (scrollPosition >= scrollMax) {
        // User has reached the bottom, load more items
        setPage(page + 1)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [page])
  return (
    <>
      {items ? (
        items.map((postData, index) => {
          return <FeedPost key={index} postData={postData} />
        })
      ) : (
        <span>Loading data...</span>
      )}
    </>
  )
}
