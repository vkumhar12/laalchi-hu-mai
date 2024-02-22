import Head from "next/head";
import AdminDrawer from "./AdminDrawer";
import Navbar from "./Navbar";

export default function AdminLayout({
  title = "Welcome To Panel",
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
        <meta property="og:url" content="https://laalchi-hu-mai.vercel.app/" />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <section className="w-full h-screen bg-[url('/')] bg-center bg-cover bg-no-repeat overflow-hidden">
        <div className="relative w-full flex items-start justify-between gap-5 p-5">
          <AdminDrawer />

          <aside className="w-full max-w-[2048px] mx-auto">
            <Navbar />
            <article className="h-[calc(100vh-124px)] overflow-y-scroll w-full">
              {children}
            </article>
          </aside>
        </div>
      </section>
    </>
  );
}
