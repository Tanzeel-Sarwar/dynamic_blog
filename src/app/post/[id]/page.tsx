import { posts } from '@/lib/posts'
import Link from 'next/link'
import Comments from '@/components/comments'

// Define the correct type for params
type Params = {
  id: string;
}

// Define the correct props type for the page component
type PageProps = {
  params: Params;
  searchParams: { [key: string]: string | string[] | undefined };
}

// Use the correct prop type and make the component async
export default async function Post({ params, searchParams }: PageProps) {
  // Since params is no longer a Promise, we can directly use the id
  const { id } = params;

  // Find the post that matches the id from the URL
  const post = posts.find(p => p.id === id)

  if (!post) {
    return <div>Post not found</div>
  }
  
  return (
    <div className="container mx-auto px-4">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to all posts
      </Link>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-2">Posted on: {post.date}</p>
      <div className="prose max-w-none mb-8">
        <p>{post.content}</p>
      </div>
      <Comments postId={post.id} />
    </div>
  )
}

