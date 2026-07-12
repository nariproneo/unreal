import { HeroSection } from "@/components/hero/hero-section";
import { areas, type Area } from "@/content/articles";
import { ArticleExplorer } from "@/features/articles/article-explorer";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ area?: string; tag?: string | string[] }>;
}) {
  const params = await searchParams;
  const selectedArea = areas.includes(params.area as Area)
    ? (params.area as Area)
    : "全国";
  const selectedTags = Array.from(
    new Set(
      (Array.isArray(params.tag) ? params.tag : [params.tag]).filter(
        (tag): tag is string => Boolean(tag) && tag !== "すべて",
      ),
    ),
  );

  return (
    <>
      <HeroSection />
      <ArticleExplorer selectedArea={selectedArea} selectedTags={selectedTags} />
    </>
  );
}
