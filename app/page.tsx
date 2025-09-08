// app/page.tsx
import { Layout } from "../components/Layout";
import { BrandHeading } from "../components/BrandHeading";
import { BrandCard } from "../components/BrandCard";
import { BrandButton } from "../components/BrandButton";
import { FeaturedVideoCard } from "../components/FeaturedVideoCard";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <BrandHeading level={1} className="text-brand text-5xl font-bold mb-6">
            Welcome to Digilani Media
          </BrandHeading>
          <p className="text-gray-300 text-lg mb-8">
            We create premium content, marketing campaigns, and consulting services that elevate your brand.
          </p>
          <BrandButton className="px-8 py-4 text-black bg-brand rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform">
            Get Started
          </BrandButton>
        </div>
      </section>

      {/* Services / Brand Cards */}
      <section className="bg-neutral-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <BrandCard
              title="Content Creation"
              excerpt="High-quality videos and media content that tell your story."
              link="#"
            />
            <BrandCard
              title="Marketing Strategy"
              excerpt="Customized campaigns that grow your brand online and offline."
              link="#"
            />
            <BrandCard
              title="Consulting Services"
              excerpt="Expert advice and insights to scale your business effectively."
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <BrandHeading level={2} className="text-4xl font-bold mb-6">
            Our Latest Campaign
          </BrandHeading>
          <FeaturedVideoCard
            title="Digilani Media in Action"
            youtubeId="dQw4w9WgXcQ" // replace with your actual video
          />
        </div>
      </section>
    </Layout>
  );
}
