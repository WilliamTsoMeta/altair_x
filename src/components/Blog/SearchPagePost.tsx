"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const SearchPagePost: React.FC = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="blog-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog-1.jpg"
                      alt="image"
                      width={750}
                      height={800}
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
                      src="/images/blog/blog-2.jpg"
                      alt="image"
                      width={750}
                      height={800}
                    />
                  </Link>

                  <div className="date">9th July, 2022</div>
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
                      src="/images/blog/blog-3.jpg"
                      alt="image"
                      width={750}
                      height={800}
                    />
                  </Link>

                  <div className="date">9th July, 2022</div>
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
                      src="/images/blog/blog-4.jpg"
                      alt="image"
                      width={750}
                      height={800}
                    />
                  </Link>

                  <div className="date">9th July, 2022</div>
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
                      src="/images/blog/blog-5.jpg"
                      alt="image"
                      width={750}
                      height={800}
                    />
                  </Link>

                  <div className="date">9th July, 2022</div>
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
                      src="/images/blog/blog-6.jpg"
                      alt="image"
                      width={750}
                      height={800}
                    />
                  </Link>

                  <div className="date">9th July, 2022</div>
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

export default SearchPagePost;
