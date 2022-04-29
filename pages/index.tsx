import BlogPost from '../public/components/blogpost'
import React from 'react'
import { GetServerSideProps} from "next"
import CreatePostButton from '../public/components/createPost'
import fetch from "node-fetch"

export function AllBlogPosts(props): any {
  var posts = []
  for(const post of props.posts){
    var singlePost = React.createElement(BlogPost, {
      title: post.title,
      timestamp: post.timestamp,
      id: post.id,
      text: post.text
    })
    posts.push(singlePost)
  }
  return posts
}

export default function Home(props) {
  return (
    <React.Fragment>
      <CreatePostButton/>
      <AllBlogPosts posts={props.data.response}/>
    </React.Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async( {
  params,
  res
}) => {
  const result = await fetch("https://us-central1-mbtcandidate.cloudfunctions.net/posts/jjohnson")
  const data = await result.json()
  return {
    props: { data }
  }
};
