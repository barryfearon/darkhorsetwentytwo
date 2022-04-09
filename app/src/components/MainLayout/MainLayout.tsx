import Head from 'next/head'
import React from 'react'
import Container from 'react-bootstrap/Container'

import Footer from './Footer'
import Header from './Header'
import styles from './MainLayout.module.scss'

interface IMainLayoutProps {
  children?: JSX.Element[] | JSX.Element | null
  metaTitle?: string | null
  pageTitle?: string | null
  siteTitle?: string | null
}

export const MainLayout: React.FC<IMainLayoutProps> = ({
  children,
  metaTitle,
  pageTitle,
  siteTitle
}) => {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WDSV6BC');`
          }}
        />
        <title>{metaTitle || `${pageTitle || ''} | ${siteTitle || ''}`}</title>
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDSV6BC" height="0" width="0"
      style="display:none;visibility:hidden"></iframe>`
        }}
      />
      <main className={`${styles.mainContent} bg-black text-white`}>
        <Container fluid={true} className={`${styles.mainContainer}`}>
          {children}
        </Container>
        <Footer siteLogo='' />
      </main>
    </>
  )
}

export default MainLayout
