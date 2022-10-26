import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const FAQ = () => {
    return (
        <div>
            <h1 className="mb-10 text-4xl font-bold text-center">
                Frequently Asked Questions
            </h1>
            <Accordion className="overflow-hidden font-semibold text-gray-800 bg-gray-100 divide-y-2 rounded-lg">
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Do you offer discounts for students?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="text-gray-500">
                            Yes, we offer sales with upto 50% discount during
                            different events.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Do you offer special pricing for big teams?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="text-gray-500">
                            Our courses are sutiable for all sort of teams.
                            Special teams get to taste special privilages too.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is the past experience of your teachers?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="text-gray-500">
                            Our teachers are world renownded and highly skilled
                            in their respective field.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default FAQ;
