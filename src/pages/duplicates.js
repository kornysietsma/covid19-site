import React from "react"
import "mini.css/dist/mini-nord.min.css"
import { usePageData } from "../hooks/use-page-data"
import { useFirehoseData } from "../hooks/use-firehose-data"
import Layout from "../components/layout"
import SEO from "../components/seo"

const firehoseUrls = (fh) => {
  const {file, urls} = fh;
  return {file, urls};
}

const pageUrls = (pageEntry) => {
  const {file, urls} = pageEntry;
  return {file, urls};
}

const DuplicatesPage = () => {
  const { allPages, allCategories, allTags } = usePageData()
  const {firehoseEntries} = useFirehoseData()
  const firehoseUrlData = firehoseEntries.map(e => firehoseUrls(e)).filter(e => e.urls.length > 0);
  const pageUrlData = allPages.map(e => pageUrls(e)).filter(e => e.urls.length > 0);

  var urlMap = new Map();
  firehoseUrlData.forEach(({file, urls}) => {
    console.log("handling file:", file, urls)
    urls.forEach(url => {
      if (!urlMap.has(url)) {
        urlMap.set(url,[]);
      }
      var entry = urlMap.get(url);
      console.log(entry);
      urlMap.set(url, [...entry, file]);
    })
  })
  console.log(urlMap);
  pageUrlData.forEach(({file, urls}) => {
    urls.forEach(url => {
      if (!urlMap.has(url)) {
        urlMap.set(url,[]);
      }
      var entry = urlMap.get(url);
      urlMap.set(url, [...entry, file]);
    })
  })
  const dupUrls = Array.from(urlMap).filter(([url, files]) => files.length > 1).sort(([url1,files1],[url2, files2]) => files2.length - files1.length)

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

  return (
    <Layout pageContext={pageContext} navMode="pages" metaMode="wiki">
      <SEO title="Home" />
      <h1>Welcome to Korny's private info garden</h1>
      <hr />
      <h2>Duplicates:</h2>
      <ul>
        {dupUrls.map(([url, files]) => (
          <li><a href={url}>{url}</a><ul>
            {files.map((file) => (
              <li>{file}</li>
            ))}
            </ul></li>
        ))}
      </ul>

    </Layout>
  )
}
export default DuplicatesPage
