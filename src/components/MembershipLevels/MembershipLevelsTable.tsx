"use client";
  
import React from "react";
import Link from "next/link";

const MembershipLevelsTable: React.FC = () => {
  return (
    <>
      <div className="membership-levels-area ptb-100">
        <div className="container">
          <div className="membership-levels-table table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th></th>
                  <th>
                    <span className="desc-1">$500</span>
                    <span className="desc-2">Silver Membership</span>
                    <span className="desc-3">You can view few features</span>
                  </th>
                  <th>
                    <span className="desc-1">$1,000</span>
                    <span className="desc-2">Gold Membership</span>
                    <span className="desc-3">You can view most features</span>
                  </th>
                  <th>
                    <span className="desc-1">$1,500</span>
                    <span className="desc-2">Diamond Membership</span>
                    <span className="desc-3">You can view all features</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Number of features</td>
                  <td>4</td>
                  <td>8</td>
                  <td>15</td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">
                      Investment Fundamentals & Data Analytics
                    </Link>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">Hands-On Python & R In Data Science</Link>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">Complete Data Science Bootcamp</Link>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">
                      Programming MasterclassName for Developers
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">Hands-On Artificial Neural Networks</Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">
                      PRINCE2® Practitioner Certification Training
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">PMI-RMP® Certification Training</Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">
                      PRINCE2® Foundation Certification Training
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">PMP® Plus</Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">PMP® Renewal Pack</Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">Digital Project Manager</Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">
                      Agile Project Management; Agile Delivery
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">Vue JS 2 - The Complete Guide</Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">
                      Everything You Need to Program in Python
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">
                      Mathematical Foundation For Machine Learning
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">Drawing Course - Beginner to Advanced</Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">
                      Deep Learning and Artificial Intelligence
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">Information About UI/UX Design Degree</Link>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link href="#">Photography Photo modify and Beautiful</Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                
                <tr>
                  <td>
                    <Link href="#">
                      Professional IT Expert Certificate Course
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                
                <tr>
                  <td></td>
                  <td>
                    <Link href="#" className="select-btn">
                      Get it now
                    </Link>
                  </td>
                  <td>
                    <Link href="#" className="select-btn">
                      Get it now
                    </Link>
                  </td>
                  <td>
                    <Link href="#" className="select-btn">
                      Get it now
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembershipLevelsTable;
