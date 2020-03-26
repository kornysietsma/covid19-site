# Korny's Covid19 resource site

This is a basic "digital garden" site built [GatsbyJS](https://www.gatsbyjs.org/).

You can see the published site at <https://covid19.korny.info/>

If you want to add content, you can raise a PR on anything in the `/content` directory and I'll look at merging and publishing it.

If you want to run this yourself, clone it, make sure you have nodejs and npm set up, then:

```
npm install -g gatsby-cli

npm install

gatsby develop
```

This project is based on the default gatsby starter as used in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/) - have a look there if you want more details on how this works.

Note to self: publish changes to github site with:
`npm run deploy`

There's a special "/duplicates" url to show duplicate links!

NOTE: I've had to lock the version of normalize-url to 4.0 because of https://github.com/sindresorhus/normalize-url/issues/105

