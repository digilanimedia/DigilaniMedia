export default function Head() {
  const title = "Digilani Media | Lifestyle, Wellness, Personal Growth & Relationships"
  const description =
    "Digilani Media by Jamel 'JJ' Jelani brings you lifestyle, wellness, personal growth, and relationship insights to help you live your best life."
  const url = "https://www.digilanimedia.com"
  const image = "/og-image.jpg" // place in /public folder

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#e49400" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Fonts (optional - modern clean style) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </>
  )
}
