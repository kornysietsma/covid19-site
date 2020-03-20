import React from "react"
import "mini.css/dist/mini-nord.min.css"
import { usePageData } from "../hooks/use-page-data"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DiaryPagesList from "../components/diary-pages-list"

const IndexPage = () => {
  const { allPages, allCategories, allTags } = usePageData()
  const pageContext = {
    selectedCategory: null,
    selectedTag: null,
    allCategories,
    allTags,
  }

  const pages = allPages.filter(page => {
    const categoryMatch =
      pageContext.selectedCategory === null ||
      page.category === pageContext.selectedCategory
    const tagMatch =
      pageContext.selectedTag === null ||
      page.tags.includes(pageContext.selectedTag)
    return categoryMatch && tagMatch
  })

  // TODO: show most recent pages
  return (
    <Layout pageContext={pageContext} navMode="pages" metaMode="wiki">
      <SEO title="Home" />
      <h1>Welcome to Korny's covid-19 info site</h1>
      <div>
      <p>See the <a href="/-/-/wiki/about/">About</a> page for more background, how to contribute, etc.</p>
      <p>This is a work in progress - I'll add more here as I find time.</p>
      <h3>Good starting points:</h3>
      <a href="category/parenting">The Parenting category, for parent resources</a>
      </div>
      <hr />
      <h2>Diary:</h2>
      <DiaryPagesList
        pageContext={pageContext}
        allPages={pages}
      ></DiaryPagesList>
    </Layout>
  )
}
export default IndexPage
