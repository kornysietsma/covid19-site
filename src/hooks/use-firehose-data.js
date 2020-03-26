import { useStaticQuery, graphql } from "gatsby"
import moment from "moment"
const urlRegex = require("url-regex")
const normalizeUrl = require("normalize-url")

function safeNormalizeUrl(url) {
  try {
    return normalizeUrl(url, { stripHash: true })
  } catch (e) {
    console.log("Can't normalize:", url, e);
    return url;
  }
}

const firehoseUrls = (title, lines) => {
  const titleUrlMatches = title.match(urlRegex()) || []
  let cleanLines = lines.map(l => l.trim()).filter(l => l.length > 0)
  const lineUrlMatches = cleanLines.flatMap(l => l.match(urlRegex())) || [];
  const allUrls =  [...titleUrlMatches, ...lineUrlMatches];
  const urls = [...new Set(allUrls)].filter(u => u).map(url => safeNormalizeUrl(url)).sort();
  return urls
}

export const useFirehoseData = () => {
  const { allFirehose } = useStaticQuery(graphql`
    query FirehoseQuery {
      allFirehose {
        edges {
          node {
            title
            category
            tags
            lines
            date
            parent {
              ... on File {
                id
                name
                relativePath
              }
            }
          }
        }
      }
    }
  `)

  const firehoseEntries = allFirehose.edges.map(({ node }) => {
    return {
      title: node.title,
      urls: firehoseUrls(node.title, node.lines),
      category: node.category,
      tags: node.tags,
      lines: node.lines,
      date: node.date ? moment(node.date) : null,
      file: node.parent.relativePath,
    }
  })

  const allTags = [...new Set(firehoseEntries.flatMap(p => p.tags))].sort()

  const allCategories = [
    ...new Set(firehoseEntries.flatMap(p => p.category)),
  ].sort()

  // I love reduce, but sadly this is much more efficient
  const categoryCounts = new Map()
  const categoryTagCounts = new Map()
  const tagCounts = new Map()
  firehoseEntries.forEach(entry => {
    if (!categoryCounts.has(entry.category)) {
      categoryCounts.set(entry.category, 1)
    } else {
      categoryCounts.set(entry.category, categoryCounts.get(entry.category) + 1)
    }

    if (!categoryTagCounts.has(entry.category)) {
      categoryTagCounts.set(entry.category, new Map())
    }
    const thisCategoryTagCounts = categoryTagCounts.get(entry.category)
    entry.tags.forEach(tag => {
      if (!thisCategoryTagCounts.has(tag)) {
        thisCategoryTagCounts.set(tag, 1)
      } else {
        thisCategoryTagCounts.set(tag, thisCategoryTagCounts.get(tag) + 1)
      }

      if (!tagCounts.has(tag)) {
        tagCounts.set(tag, 1)
      } else {
        tagCounts.set(tag, tagCounts.get(tag) + 1)
      }
    })
  })

  return {
    allCategories,
    allTags,
    firehoseEntries,
    categoryCounts,
    categoryTagCounts,
    tagCounts,
  }
}
