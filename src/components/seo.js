import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ post }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          url
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;

  if (defaults.url === '' && typeof window !== 'undefined') {
    defaults.url = window.location.origin;
  }

  if (defaults.url === '') {
    console.error('Please set a Url in your site metadata!');
    return null;
  }

  const title = post.title || defaults.title;
  const description = post.description || defaults.description;
  const url = new URL(post.path || '', defaults.url);
  const image = post.image ? new URL(post.image, defaults.url) : false;

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={post.author.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default Seo;