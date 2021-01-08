import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }`)
  return (
    <Layout>
      <Head title='Home'/>
      <h1>Hello</h1>
      <p>I'm {data.site.siteMetadata.author}</p>
      <p>Go to <Link to='/contact'>my contact page</Link></p>
    </Layout>
  )
}

export default IndexPage