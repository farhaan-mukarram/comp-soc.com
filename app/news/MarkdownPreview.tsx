const PostMarkdown = ({ content }: { content: string }) => {
  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: content }}
      className="prose prose-invert prose-lg max-w-none
                  prose-headings:font-tomorrow prose-headings:text-white prose-headings:border-b prose-headings:border-border/30 prose-headings:pb-3 prose-headings:mb-6
                  prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
                  prose-p:leading-relaxed prose-p:text-zinc-300 prose-p:mb-4
                  prose-li:text-zinc-300 prose-li:mb-2 prose-li:leading-relaxed
                  prose-ul:space-y-2 prose-ol:space-y-2
                  prose-strong:text-white prose-strong:font-semibold
                  prose-em:text-zinc-200 prose-em:italic
                  prose-code:bg-border/50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-csred prose-code:text-sm
                  prose-blockquote:border-l-4 prose-blockquote:border-csred prose-blockquote:bg-border/20 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                  prose-a:text-csred prose-a:no-underline hover:prose-a:underline hover:prose-a:text-csred/80
                  prose-hr:border-border/50 prose-hr:my-8
                "
    />
  )
}

export default PostMarkdown
