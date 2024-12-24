import Link from 'next/link'
import { posts } from '@/lib/posts'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">My Programming Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          // Use the post id as the key for efficient list rendering
          <div key={post.id} className="border p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-2">
              {/* Use Next.js Link component for client-side navigation */}
              <Link href={`/post/${post.id}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600">{post.content.substring(0, 150)}...</p>
            <p className="text-sm text-gray-500 mt-2">Posted on: {post.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

