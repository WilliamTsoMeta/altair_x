"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogGridStyle2: React.FC = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>ARTICLE</span>
            <h2>
              Read Our Blog To Get All Recent Tech <b>News</b>
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="blog-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog-7.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>

                  <div className="date">9th July, 2022</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link href="/blog/details">
                      How Technology Dominate In The new World In 2022
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eir m od tempor invidunt ut labore.
                  </p>
                  <Link href="/blog/details" className="blog-btn">
                    View More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="blog-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog-8.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>

                  <div className="date">10th July, 2022</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link href="/blog/details">
                      Top 10 Most Famous Technology Trend In 2022
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eir m od tempor invidunt ut labore.
                  </p>
                  <Link href="/blog/details" className="blog-btn">
                    View More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="blog-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog-9.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>

                  <div className="date">11th July, 2022</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link href="/blog/details">
                      Open Source Job Report Show More Openings Fewer
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eir m od tempor invidunt ut labore.
                  </p>
                  <Link href="/blog/details" className="blog-btn">
                    View More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="blog-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog-10.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>

                  <div className="date">12th July, 2022</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link href="/blog/details">
                      Tech Products That Makes Its Easier To Stay At Home
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eir m od tempor invidunt ut labore.
                  </p>
                  <Link href="/blog/details" className="blog-btn">
                    View More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="blog-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog-11.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>

                  <div className="date">13th July, 2022</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link href="/blog/details">
                      Necessity May Give Us Your Best Virtual Court System
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eir m od tempor invidunt ut labore.
                  </p>
                  <Link href="/blog/details" className="blog-btn">
                    View More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="blog-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog-12.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>

                  <div className="date">14th July, 2022</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link href="/blog/details">
                      How Technology Helps In The Education System In The World
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eir m od tempor invidunt ut labore.
                  </p>
                  <Link href="/blog/details" className="blog-btn">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-shape-1">
          <Image
            src="/images/blog/blog-shape-1.png"
            alt="image"
            width={226}
            height={240}
          />
        </div>
      </div>
    </>
  );
};

export default BlogGridStyle2;
