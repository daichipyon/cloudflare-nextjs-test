import { GetServerSideProps } from 'next'

type Post = {
  userId: number,
  title: string,
  body: string
}

type Props = {
  posts: Post[]
}

// 投稿一覧
export default function Home(props: { posts: Post[] }) {
  return (
    <>
      <h1>投稿一覧</h1>
      <ul>
        {props.posts.map((post) => (
          <li key={post.userId}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}

      </ul>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await res.json()
  return {
    props: {
      posts
    }
  }
}


