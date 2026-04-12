import React, { Suspense } from 'react'
import { remark } from 'remark'
import matter from 'gray-matter'
import gfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { getPostsContent } from '@/utils/getPostsContent'
import NewsList from './NewsList'

// Yes, all minutes are passed to client. This is fine as it wont be a lot of data.
// We do this as we want a search feature on the client side (due to static generation site).
const Page = async () => {
  const posts = await getPostsContent('news')

  const postPreviewPromises = posts.map(async ({ content }) => {
    const { content: previewContent } = matter(content)
    const processedContent = await remark()
      .use(remarkParse)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeKatex)
      .use(remarkMath)
      .use(gfm)
      .use(rehypeStringify)
      .process(previewContent)
    const contentHtml = processedContent.toString().slice(0, 180)

    return contentHtml
  })

  const postPreviews = await Promise.all(postPreviewPromises)

  const postsWithPreview = posts.map((post, idx) => {
    const preview = postPreviews[idx]
    return { ...post, preview: preview }
  })

  return (
    <Suspense>
      <NewsList posts={postsWithPreview} />
    </Suspense>
  )
}

export default Page
