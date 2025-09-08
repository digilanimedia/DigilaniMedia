// app/page.tsx
import React from "react";
import { Layout } from "../components/Layout";
import { BrandHeading } from "../components/BrandHeading";
import { BrandButton } from "../components/BrandButton";
import { BrandCard } from "../components/BrandCard";
import { FeaturedVideoCard } from "../components/FeaturedVideoCard";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center py-20 bg-black">
        <BrandHeading level={1} className="text-5xl font-bold text-brand mb-4">
          Welcome to Digilani Media
        </BrandHeading>
        <p className="text-gray-300 text-xl mb-8">
          We craft digital experiences that inspire, educate, and entertain.
        </p>
        <BrandButton className="bg-brand text-black px-8 py-4 rounded-xl font-semibold">
          Get Started
        </BrandButton>
      </section>

      {/* Featured Videos */}
      <section className="py-20 bg-neutral-900">
        <BrandHeading level={2} className="text-4xl font-bold text-white text-center mb-12">
          Featured Videos
        </BrandHeading>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <FeaturedVideoCard title="Our Latest Project" youtubeId="dQw4w9WgXcQ" />
          <FeaturedVideoCard title="Behind the Scenes" youtubeId="9bZkp7q19f0" />
        </div>
      </section>

      {/* Services / Cards */}
      <section className="py-20 bg-black">
        <BrandHeading level={2} className="text-4xl font-bold text-brand text-center mb-12">
          What We Offer
        </BrandHeading>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <BrandCard
            title="Creative Strategy"
            excerpt="We develop strategies that make your brand unforgettable."
            link="#"
          />
          <BrandCard
            title="Content Creation"
            excerpt="High-quality content that tells your story in a compelling way."
            link="#"
          />
          <BrandCard
            title="Digital Marketing"
            excerpt="Boost your reach and grow your audience online effectively."
            link="#"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-neutral-900">
        <BrandHeading level={2} className="text-4xl font-bold text-brand mb-6">
          Ready to Elevate Your Brand?
        </BrandHeading>
        <BrandButton className="bg-brand text-black px-8 py-4 rounded-xl font-semibold">
          Contact Us Today
        </BrandButton>
      </section>
    </Layout>
  );
}
