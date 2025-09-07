import { Layout } from "../components/Layout";
import { BrandHeading } from "../components/BrandHeading";
import { BrandButton } from "../components/BrandButton";
import { BrandCard } from "../components/BrandCard";
import { FeaturedVideoCard } from "../components/FeaturedVideoCard";

export default function Home() {
  const featuredVideos = [
    { title: "Wellness Tips for Daily Life", youtubeId: "YOUTUBE_ID_1" },
    { title: "Building Strong Relationships", youtubeId: "YOUTUBE_ID_2" },
    { title: "Personal Growth Strategies", youtubeId: "YOUTUBE_ID_3" },
  ];

  const blogPosts = [
    {
      title: "Mindful Living Practices",
      excerpt: "Learn how to integrate mindfulness into your daily routine.",
      link: "#",
    },
    {
      title: "Healthy Eating Habits",
      excerpt: "Simple ways to improve your diet and energy levels.",
      link: "#",
    },
    {
      title: "Communication in Relationships",
      excerpt: "Tips for better connection with your loved ones.",
      link: "#",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-black text-gray-100 py-20 px-6 text-center">
        <BrandHeading
          level={1}
          className="text-4xl md:text-6xl mb-4 animate-fadeIn"
        >
          Welcome to Digilani Media
        </BrandHeading>
        <p className="text-gray-300 text-lg md:text-xl mb-6 animate-fadeIn">
          Lifestyle, wellness, personal growth, and relationships content curated
          by Jamel "JJ" Jelani.
        </p>
        <BrandButton className="animate-fadeIn">Explore Our Videos</BrandButton>
      </section>

      {/* Featured Videos */}
      <section id="videos" className="max-w-6xl mx-auto py-20 px-6">
        <BrandHeading
          level={2}
          className="text-3xl md:text-4xl text-center mb-12 animate-fadeIn"
        >
          Featured Videos
        </BrandHeading>
        <div className="grid gap-8 md:grid-cols-3">
          {featuredVideos.map((video, idx) => (
            <FeaturedVideoCard
              key={idx}
              title={video.title}
              youtubeId={video.youtubeId}
              className="animate-fadeIn"
            />
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="bg-neutral-900 py-20 px-6">
        <BrandHeading
          level={2}
          className="text-3xl md:text-4xl text-center mb-12 animate-fadeIn"
        >
          From Our Blog
        </BrandHeading>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {blogPosts.map((post, idx) => (
            <BrandCard
              key={idx}
              title={post.title}
              excerpt={post.excerpt}
              link={post.link}
              className="animate-fadeIn"
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 text-center max-w-4xl mx-auto">
        <BrandHeading
          level={2}
          className="text-3xl md:text-4xl mb-6 animate-fadeIn"
        >
          About JJ Jelani
        </BrandHeading>
        <p className="text-gray-300 text-lg md:text-xl mb-6 animate-fadeIn">
          Jamel "JJ" Jelani is passionate about helping people improve their
          lifestyle, wellness, relationships, and personal growth. Through
          videos, blogs, and tips, Digilani Media empowers viewers to live their
          best lives.
        </p>
        <BrandButton className="animate-fadeIn">Learn More</BrandButton>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="bg-black py-20 px-6 text-center">
        <BrandHeading
          level={2}
          className="text-3xl md:text-4xl mb-6 animate-fadeIn"
        >
          Subscribe to Our Newsletter
        </BrandHeading>
        <p className="text-gray-300 mb-6 animate-fadeIn">
          Get updates on our latest videos, blogs, and wellness tips.
        </p>
        <form
          action="#"
          method="post"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 animate-fadeIn"
        >
          <input
            type="email"
            name="EMAIL"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl text-black"
            required
          />
          <BrandButton type="submit">Subscribe</BrandButton>
        </form>
      </section>
    </Layout>
  );
}
