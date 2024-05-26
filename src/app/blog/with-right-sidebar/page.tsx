"use client";

import React from 'react'
import NavbarTwo from '@/components/Layouts/NavbarTwo'
import BlogWithRightSidebar from '@/components/Blog/BlogWithRightSidebar'
import CTO from '@/components/Common/CTO'
import Footer from '@/components/Layouts/Footer'
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Blog Right Sidebar"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-2.jpg"
      />

      <BlogWithRightSidebar />

      <CTO />

      <Footer />
    </>
  )
}
