'use client'

import dynamic from 'next/dynamic'
import { prefix } from '@/utils/prefix'
import Link from 'next/link'

const MarkdownPreview = dynamic(() => import('./MarkdownPreview'), {
  ssr: false,
  loading: () => <div className="h-[5lh] bg-slate-500 animate-pulse" />,
})

type PostPreviewProps = {
  post: {
    slug: string
    content: string
    date: string
    title: string
    preview: string
  }
}

const MAX_POST_TITLE_LENGTH = 50
// (title length - 3) to account for elipsis
const SLICED_TITLE_LENGTH = MAX_POST_TITLE_LENGTH - 3

const PostPreview = ({ post }: PostPreviewProps) => {
  return (
    <Link key={post.slug} href={`${prefix}/news/${post.slug}`}>
      <div className="group mt-4 border border-border p-4  bg-foreground hover:bg-border/30 transition-all duration-200 hover:scale-[1.01]">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-tomorrow text-white group-hover:text-csred transition-colors">
              {post.title.length > MAX_POST_TITLE_LENGTH
                ? `${post.title.slice(0, SLICED_TITLE_LENGTH)}...`
                : post.title}
            </h3>
            <span className="text-sm text-zinc-400 font-space-mono">
              {new Date(post.date).toLocaleDateString('en-GB', {
                weekday: 'long',
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>

        <div className="pt-4 max-h-[5lh] overflow-hidden">
          <MarkdownPreview content={post.preview} />
        </div>
      </div>
    </Link>
  )
}

export default PostPreview
