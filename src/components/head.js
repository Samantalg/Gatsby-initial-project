import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'


const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    console.log(title)
    return (
        <Helmet title={title}>
            <title>
                {/* {`${title} | ${data.site.siteMetadata.title}`} */}
                {title}
            </title>
        </Helmet>
    )
}

export default Head
