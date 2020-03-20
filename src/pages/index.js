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
      <h1>Welcome to Korny's covid-19 site</h1>
      <div>
      <p>This is just somewhere I threw together quickly to collect and share useful resources related to covid-19 aka CoronaVirus.</p>
      <p>I'm happy to receive suggested changes, either by email or (for techy folks) pull requests!  All the content is markdown or JSON, the file formats should be pretty self evident.</p>
      <p>The CSS is pretty minimal - it's sort of responsive, but not very pretty.</p>
      </div>
      <div>
      <p>See my blog post at <a href="https://blog.korny.info/2020/03/19/gatsby-digital-garden.html">https://blog.korny.info/2020/03/19/gatsby-digital-garden.html</a> for more about how this kind of site works.</p>
      <p>This is a work in progress - I'll add more here as I find time.</p>
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
