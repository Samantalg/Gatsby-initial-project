import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title='Contact'/>
            <p>This is my phone</p>
            <p>This is my twitter <a href='https://twitter.com/samantablg'>@samantablg</a></p>
        </Layout>
    )
}

export default ContactPage
