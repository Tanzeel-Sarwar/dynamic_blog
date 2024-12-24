'use client'

import { useState } from 'react'

interface Comment {
  id: number;
  text: string;
}

export default function Comments({ postId }: { postId: string }) {
  // Use useState hook to manage comments state
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      // Add new comment to the comments array
      setComments([...comments, { id: Date.now(), text: newComment }])
      // Clear the input field
      setNewComment('')
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded"
          rows={3}
          placeholder="Add a comment..."
        />
        <button 
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Comment
        </button>
      </form>
      <div className="space-y-2">
        {comments.map((comment) => (
          <div key={comment.id} className="p-2 bg-gray-100 rounded">
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

