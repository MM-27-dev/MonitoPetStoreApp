import React from "react";
import articles from "../data/articlesDatat";

const PetKnowledgeSection = () => {
  return (
    <section className="px-6 py-12 md:px-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002D56]">
          Useful Pet Knowledge
        </h2>
        <button className="border border-[#002D56] text-[#002D56] font-medium px-5 py-2 rounded-full hover:bg-[#002D56] hover:text-white transition">
          View more →
        </button>
      </div>

      {/* Card Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-5">
              <span className="inline-block bg-[#00B2FF] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                {article.tag}
              </span>
              <h3 className="font-semibold text-[#002D56] text-lg mb-2">
                {article.title}
              </h3>
              <p className="text-[#4B5563] text-sm">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetKnowledgeSection;
