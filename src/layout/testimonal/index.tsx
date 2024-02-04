// import { useAppContext } from "contexts";
import Head from "next/head";
import TestimonalBar from "./TestimonalBar";
import TestimonalDrawer from "./TestimonalDrawer";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
  arr?: any;
};
export default function TestimonalLayout({
  children = <></>,
  title = "",
  description,
  ogImage,
  arr,
}: Props) {
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
        <TestimonalBar />
        <section className="flex flex-col gap-5 lg:flex-row main-container">
          <div className="w-1/4">
            <TestimonalDrawer />
          </div>
          <div className="">{children}</div>
        </section>
      </main>
    </>
  );
}
