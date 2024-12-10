// pages/blog/[slug].tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { blogPosts } from '../../data/postsData';
import { slugify } from '../../utils/slugify';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogPost {
  title: string;
  description?: string;
  image?: string;
  date: string;
  link: string;
  featured?: boolean;
  content?: string;
}

interface PostDetailProps {
  post: BlogPost;
}

export default function PostDetail({ post }: PostDetailProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: post.image ? [post.image] : undefined,
    datePublished: post.date,
    description: post.description || "Blog post by Linconwaves Innovation",
    author: {
      "@type": "Organization",
      name: "Linconwaves Innovation",
    },
    publisher: {
      "@type": "Organization",
      name: "Linconwaves Innovation",
      logo: {
        "@type": "ImageObject",
        url: "https://example.com/logo.png"
      }
    }
  };

  return (
    <>
      <Head>
        <title>{post.title} | Linconwaves Innovation</title>
        <meta
          name="description"
          content={post.description || "Linconwaves Innovation Blog Post"}
        />
        <meta property="og:title" content={`${post.title} | Linconwaves Innovation`} />
        <meta
          property="og:description"
          content={post.description || "Linconwaves Innovation Blog Post"}
        />
        {post.image && <meta property="og:image" content={post.image} />}

        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className="bg-black text-white pt-16 min-h-screen">
        <Navbar />

        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              {post.image && (
                <div className="relative w-full h-64 mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <p className="text-gray-400 mb-6">{post.date}</p>
              {post.description && (
                <p className="text-gray-300 mb-6">{post.description}</p>
              )}

              {/* Render Markdown Content */}
              {post.content && (
                <div className="prose prose-invert max-w-none text-gray-300">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {post.content}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: slugify(post.title) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };

  const postData = blogPosts.find((p) => slugify(p.title) === slug);

  if (!postData) {
    return { notFound: true };
  }

  return {
    props: {
      post: postData,
    },
  };
};
