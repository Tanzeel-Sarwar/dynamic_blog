import { posts } from '@/lib/posts'
import Link from 'next/link'
import Comments from '@/components/comments'

// type PageProps = {
//   params: { id: any };                  
// 
//};
 type TParams = Promise<{id: string[]}>;

export default async function Post({ params }: {params: TParams}) {
  const id = (await params).id as unknown as string

  const post = await posts.find((p) => p.id === id)
  // const id  =  (params.id as unknown) as string;

  // const post = await posts.find(p => p.id === id);

  if (!post) {
    return <div>Post not found</div>;
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
  );
}
