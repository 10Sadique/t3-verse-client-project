import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Blog = () => {
    return (
        <div>
            <h1 className="mb-10 text-4xl font-bold text-center">Blog Posts</h1>
            <Accordion className="overflow-hidden font-semibold text-gray-800 bg-gray-100 divide-y-2 rounded-lg">
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            what is <span className="kbd kbd-sm">CORS</span>?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="text-gray-500">
                            Cross-Origin Resource Sharing{' '}
                            <span className="kbd kbd-sm">CORS</span> is an
                            HTTP-header based mechanism that allows a server to
                            indicate any origins (domain, scheme, or port) other
                            than its own from which a browser should permit
                            loading resources.
                        </p>
                        <p className="mt-3 text-gray-500">
                            <span className="kbd kbd-sm">CORS</span> also relies
                            on a mechanism by which browsers make a "preflight"
                            request to the server hosting the cross-origin
                            resource, in order to check that the server will
                            permit the actual request.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Why are you using{' '}
                            <span className="kbd kbd-sm">Firebase</span>? What
                            other options do you have to implement
                            authentication?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="text-gray-500">
                            Google Firebase offers many features that pitch it
                            as the go-to backend development tool for web and
                            mobile apps. It reduces development workload and
                            time. And it's a perfect prototyping tool. Firebase
                            is simple, lightweight, friendly, and industrially
                            recognized. With Firebase, it's pretty simple to
                            connect and use built-in third-party authentication
                            providers, including Google, Facebook, Twitter,
                            among others.
                        </p>
                        <p className="mt-3 text-gray-500">
                            There are other options to implement authentication.{' '}
                            <span className="kbd kbd-sm">Auth0</span>,{' '}
                            <span className="kbd kbd-sm">Suberbase</span>,{' '}
                            <span className="kbd kbd-sm">Ory</span>,{' '}
                            <span className="kbd kbd-sm">Okta</span>,{' '}
                            <span className="kbd kbd-sm">NextAuthJS</span> etc.
                            also provides authentication services.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How does the private route work?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="text-gray-500">
                            The private route component is similar to the public
                            route, the only change is that redirect URL and
                            authenticate condition.
                        </p>
                        <p className="mt-3 text-gray-500">
                            If the user is not authenticated he will be
                            redirected to the login page and the user can only
                            access the authenticated routes If he is
                            authenticated (Logged in). After logging in the user
                            will be redirected to the previous page that he came
                            from.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is Node? How does Node work?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="text-gray-500">
                            The Node.js run-time environment includes everything
                            you need to execute a program written in JavaScript.
                            Node allows developers to write JavaScript code that
                            runs directly in a computer process itself instead
                            of in a browser. Node can, therefore, be used to
                            write server-side applications with access to the
                            operating system, file system, and everything else
                            required to build fully-functional applications.
                        </p>
                        <p className="mt-3 text-gray-500">
                            Node.js accepts the request from the clients and
                            sends the response, while working with the request
                            node.js handles them with a single thread. To
                            operate I/O operations or requests node.js use the
                            concept of threads. Thread is a sequence of
                            instructions that the server needs to perform. It
                            runs parallel on the server to provide the
                            information to multiple clients. Node.js is an event
                            loop single-threaded language. It can handle
                            concurrent requests with a single thread without
                            blocking it for one request.
                        </p>
                        <p className="mt-3 text-gray-500">
                            Node.js basically works on two concept,{' '}
                            <span className="kbd kbd-sm">Asynchronous</span>,{' '}
                            <span className="kbd kbd-sm">Non-blocking I/O</span>
                            .
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Blog;
