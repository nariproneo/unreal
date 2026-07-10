"use client";

import {
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import Image from "next/image";
import { areas, articles, type Area, type Article } from "@/content/articles";

const INITIAL_VISIBLE_COUNT = 10;

function formatPrice(price: number) {
  return `¥${String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

type ArticleCardProps = {
  article: Article;
  isPressed: boolean;
  onPress: () => void;
  onClick: (event: MouseEvent<HTMLAnchorElement>) => void;
};

function ArticleCard({ article, isPressed, onPress, onClick }: ArticleCardProps) {
  return (
    <a
      href={article.href}
      onPointerDown={onPress}
      onTouchStart={onPress}
      onClick={onClick}
      className={`group block touch-manipulation overflow-hidden border transition duration-150 ${
        isPressed
          ? "border-[#d7b874] bg-white/[0.08]"
          : "border-white/10 bg-white/[0.025] hover:border-[#c5a35f]/65 hover:bg-white/[0.045] active:border-[#d7b874] active:bg-white/[0.08]"
      }`}
    >
      <div className="flex flex-col">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={article.thumbnail}
            alt={`${article.title}のサムネイル`}
            fill
            sizes="(max-width: 1024px) 100vw, 960px"
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4 text-[0.62rem] font-medium tracking-[0.18em] text-[#c5a35f]">
            <span>{article.area}</span>
            <span className="text-white/35">PREMIUM NOTE</span>
          </div>
          <h2 className="mt-3 text-lg font-normal leading-snug tracking-[-0.025em] text-white sm:text-xl">
            {article.title}
          </h2>
          <p className="mt-3 line-clamp-3 text-sm font-light leading-6 text-white/60">
            {article.excerpt}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="border border-white/10 px-2 py-1 text-[0.6rem] tracking-[0.12em] text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-5 flex items-end justify-between gap-4 border-t border-white/10 pt-4">
            <div className="flex items-baseline gap-2 text-sm">
              <span className="text-white/35 line-through">
                {formatPrice(article.regularPrice)}
              </span>
              <span className="font-medium text-[#d7b874]">
                {formatPrice(article.salePrice)}
              </span>
            </div>
            <span className={`border px-3 py-2 text-[0.65rem] font-medium tracking-[0.12em] transition group-hover:bg-[#c5a35f] group-hover:text-[#17130d] ${
              isPressed
                ? "border-[#e2c982] bg-[#c5a35f] text-[#17130d]"
                : "border-[#c5a35f]/70 text-[#e1c889] group-active:border-[#e2c982] group-active:bg-[#c5a35f] group-active:text-[#17130d]"
            }`}>
              記事を見る
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export function ArticleExplorer() {
  const [selectedArea, setSelectedArea] = useState<Area>("全国");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [pressedArticleId, setPressedArticleId] = useState<string | null>(null);
  const hasPendingArticleNavigation = useRef(false);

  const filteredArticles = useMemo(
    () =>
      selectedArea === "全国"
        ? articles
        : articles.filter((article) => article.area === selectedArea),
    [selectedArea],
  );
  const visibleArticles = filteredArticles.slice(0, visibleCount);

  function handleAreaSelect(area: Area) {
    setSelectedArea(area);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }

  function handleArticleClick(
    event: MouseEvent<HTMLAnchorElement>,
    article: Article,
  ) {
    event.preventDefault();
    if (hasPendingArticleNavigation.current) return;

    hasPendingArticleNavigation.current = true;
    setPressedArticleId(article.id);
    window.setTimeout(() => {
      window.location.assign(article.href);
    }, 150);
  }

  return (
    <section className="relative z-20 bg-[#090909] pb-20 pt-3 text-[#f7f5f0] sm:pb-28">
      <div className="mx-auto max-w-5xl">
        <div className="border-y border-white/10 py-4">
          <div className="mb-3 flex items-center justify-between px-6 sm:px-10 lg:px-0">
            <p className="text-[0.65rem] font-medium tracking-[0.2em] text-[#c5a35f]">
              LATEST ARTICLES
            </p>
            <p className="text-xs text-white/40">{filteredArticles.length} articles</p>
          </div>
          <div className="relative">
            <div className="no-scrollbar relative z-10 flex gap-2 overflow-x-auto px-6 pb-1 pr-14 sm:px-10 sm:pr-10 lg:px-0">
              {areas.map((area) => {
                const isSelected = selectedArea === area;

                return (
                  <button
                    key={area}
                    type="button"
                    aria-pressed={isSelected}
                    onPointerDown={() => handleAreaSelect(area)}
                    onTouchStart={() => handleAreaSelect(area)}
                    onClick={() => handleAreaSelect(area)}
                    className={`relative z-30 shrink-0 touch-manipulation border px-4 py-2.5 text-sm transition active:scale-[0.98] ${
                      isSelected
                        ? "border-[#c5a35f] bg-[#c5a35f] text-[#17130d]"
                        : "border-white/15 text-white/60 hover:border-[#c5a35f]/65 hover:text-white"
                    }`}
                  >
                    {area}
                  </button>
                );
              })}
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-20 w-14 bg-gradient-to-l from-[#090909] via-[#090909]/90 to-transparent sm:hidden"
            />
          </div>
        </div>

        <div className="space-y-4 px-6 pt-6 sm:px-10 sm:pt-8 lg:px-0">
          {visibleArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              isPressed={pressedArticleId === article.id}
              onPress={() => setPressedArticleId(article.id)}
              onClick={(event) => handleArticleClick(event, article)}
            />
          ))}
        </div>

        {visibleCount < filteredArticles.length && (
          <div className="px-6 pt-8 text-center sm:px-10 lg:px-0">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + INITIAL_VISIBLE_COUNT)}
              className="border border-[#c5a35f]/70 px-8 py-3 text-xs font-medium tracking-[0.18em] text-[#e1c889] transition hover:bg-[#c5a35f] hover:text-[#17130d]"
            >
              もっと見る
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
