import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

type Props = {
  children?: ReactNode;
  title?: string;
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <Elements stripe={stripePromise}>
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
          <Link href="/users">Users List</Link> |{" "}
          <a href="/api/users">Users API</a>
        </nav>
      </header>
      {children}
    </div>
  </Elements>
);

export default Layout;
