"use client";

import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const FaqContent: React.FC = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>FAQ</span>
            <h2>Frequently Ask Questions</h2>
          </div>

          <div className="faq-accordion">
            <Accordion preExpanded={['a']}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Why Are Consultants Important?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
                    nibh felis tortor viverra pulvinar nibh tincidunt
                    pellentesque dolor. Sem lectus magna metus sit felis, ipsum,
                    et. Auctor tellus id nunc nibh felis aliquam.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is The Purpose of a Consultant?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
                    nibh felis tortor viverra pulvinar nibh tincidunt
                    pellentesque dolor. Sem lectus magna metus sit felis, ipsum,
                    et. Auctor tellus id nunc nibh felis aliquam.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What Attracts You To The Role of a Consultant?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
                    nibh felis tortor viverra pulvinar nibh tincidunt
                    pellentesque dolor. Sem lectus magna metus sit felis, ipsum,
                    et. Auctor tellus id nunc nibh felis aliquam.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What Are The Advantages of Being a Consultant?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
                    nibh felis tortor viverra pulvinar nibh tincidunt
                    pellentesque dolor. Sem lectus magna metus sit felis, ipsum,
                    et. Auctor tellus id nunc nibh felis aliquam.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is Consulting a Good Career?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
                    nibh felis tortor viverra pulvinar nibh tincidunt
                    pellentesque dolor. Sem lectus magna metus sit felis, ipsum,
                    et. Auctor tellus id nunc nibh felis aliquam.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="f">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How is Working in Consulting?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
                    nibh felis tortor viverra pulvinar nibh tincidunt
                    pellentesque dolor. Sem lectus magna metus sit felis, ipsum,
                    et. Auctor tellus id nunc nibh felis aliquam.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}

export default FaqContent
