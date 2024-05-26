"use client";
  
import React from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";

const SingleBlogContent: React.FC = () => {
  return (
    <>
      <div className="blog-details-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <Image
                    src="/images/blog-details/blog-details.jpg"
                    alt="image"
                    width={1250}
                    height={750}
                  />
                </div>

                <div className="article-content">
                  <ul className="entry-list">
                    <li>
                      By <a href="#">Admin</a>
                    </li>
                    <li>12th August 2022</li>
                  </ul>
                  <h3>How Technology Dominate In The New World In 2022</h3>
                  <p>
                    Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                    diam nonumy eirmod tempor invidunt ut labore dolore magna
                    aliquyam erat sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Steter clita kasd gubergren
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                    diam nonumy eirmod tempor invidunt ut labore dolore magna
                    aliquyam erat sed diam voluptua.
                  </p>

                  <ul className="list">
                    <li>
                      <h4>What You Will Get Under This Service</h4>
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> Lorem ipsum
                      dolor sit amet consetetur sadipscing elitr sed diam nonumy
                      eirmod tempor invidunt ut
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> Dolor sit amet
                      consetetur sadipscing elitr sed diam nonumy eirmod tempor
                      invidunt.
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> Consetetur
                      sadipscing elitr sed diam nonumy eirmod tempor invidunt.
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> Sadipscing
                      elitr sed diam nonumy eirmod tempor invidunt ut labore
                      dolore magna aliquyam erat.
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> Sed diam
                      nonumy eirmod tempor invidunt ut labore dolore magna
                      aliquyam erat.
                    </li>
                  </ul>

                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-sm-6">
                      <div className="block-item">
                        <Image
                          src="/images/blog-details/blog-details-2.jpg"
                          alt="image"
                          width={750}
                          height={650}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="block-item">
                        <Image
                          src="/images/blog-details/blog-details-3.jpg"
                          alt="image"
                          width={750}
                          height={650}
                        />
                      </div>
                    </div>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                    diam nonumy eirmod tempor invidunt ut labore dolore magna
                    aliquyam erat sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Steter clita kasd gubergren
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                    diam nonumy eirmod tempor invidunt ut labore dolore magna
                    aliquyam erat sed diam voluptua.
                  </p>

                  <div className="article-quote">
                    <i className="ri-double-quotes-l"></i>
                    <p>
                      Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat sed diam.
                    </p>

                    <div className="quote-shape">
                      <Image
                        src="/images/blog-details/circle-shape.png"
                        alt="image"
                        width={150}
                        height={150}
                      />
                    </div>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                    diam nonumy eirmod tempor invidunt ut labore dolore magna
                    aliquyam erat sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Steter clita kasd gubergren
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                    diam nonumy eirmod tempor invidunt ut labore dolore magna
                    aliquyam erat sed diam voluptua.
                  </p>
                </div>

                <div className="article-share">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                      <div className="share-content">
                        <h4>Share The Article:</h4>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <ul className="share-social text-end">
                        <li>
                          <a
                            href="https://www.facebook.com/EnvyTheme"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-facebook-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/?lang=en"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-twitter-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-youtube-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://vimeo.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-vimeo-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-instagram-line"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="article-comments">
                  <h3>03 Comments:</h3>

                  <div className="comments-list">
                    <Image
                      src="/images/blog-details/image-1.jpg"
                      alt="image"
                      width={150}
                      height={150}
                    />
                    <h5>
                      Daniel John, <span>2 months ago</span>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                    <a href="#" className="reply-btn">
                      Reply
                    </a>
                  </div>

                  <div className="comments-list children">
                    <Image
                      src="/images/blog-details/image-2.jpg"
                      alt="image"
                      width={150}
                      height={150}
                    />
                    <h5>
                      Suzana Zamal, <span>2 months ago</span>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                    <a href="#" className="reply-btn">
                      Reply
                    </a>
                  </div>
                  
                  <div className="comments-list">
                    <Image
                      src="/images/blog-details/image-3.jpg"
                      alt="image"
                      width={150}
                      height={150}
                    />
                    <h5>
                      Victor James, <span>2 months ago</span>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                    <a href="#" className="reply-btn">
                      Reply
                    </a>
                  </div>
                </div>

                <div className="article-leave-comment">
                  <h3>Leave a reply</h3>

                  <form>
                    <div className="row justify-content-center">
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter name"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email address"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Website"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control"
                            placeholder="Your message"
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <p className="form-check form-cookies-consent">
                          <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="" 
                            id="flexCheckDefault" 
                          />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            Save my name, email, and website in this browser for the next time I comment.
                          </label>
                        </p>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <button type="submit" className="default-btn">
                          Post A Comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogContent;
