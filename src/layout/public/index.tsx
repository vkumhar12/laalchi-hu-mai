import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({
  title = "Welcome To B2C Panel",
  children = <></>,
  description,
  ogImage,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
}) {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://yourwebsitename.com/" />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
