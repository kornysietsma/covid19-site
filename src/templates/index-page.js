import React from "react"
import Layout from "../components/layout"
import DiaryPagesList from "../components/diary-pages-list"
import { usePageData } from "../hooks/use-page-data"

export default ({ pageContext }) => {
  const { allPages } = usePageData()

  const pages = allPages.filter(page => {
    const categoryMatch =
      pageContext.selectedCategory === null ||
      page.category === pageContext.selectedCategory
    const tagMatch =
      pageContext.selectedTag === null ||
      page.tags.includes(pageContext.selectedTag)
    return categoryMatch && tagMatch
  })
  return (
    <Layout pageContext={pageContext} navMode='pages' metaMode='wiki'>
      <div>
        <h2>Diary:</h2>
        <DiaryPagesList pageContext={pageContext} allPages={pages} ></DiaryPagesList>
      </div>
    </Layout>
  )
}
