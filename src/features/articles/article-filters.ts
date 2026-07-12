import type { Area, Article } from "@/content/articles";

export const ALL_TAG = "すべて";

/**
 * 記事データから生成したタグに適用する、編集上の優先表示順。
 * ここにないタグは、記事データに初めて現れた順でこのリストの後に表示する。
 */
export const TAG_DISPLAY_ORDER = [
  "おすすめ",
  "まとめ系",
  "NN",
  "NS",
  "HR",
  "PZR",
  "F",
  "ギャル",
  "綺麗系",
  "大人系",
  "巨乳",
  "スレンダー",
  "2回戦以上",
  "有名人",
  "神コスパ",
] as const;

export function filterArticlesByArea(
  articleList: Article[],
  area: Area,
) {
  return area === "全国"
    ? articleList
    : articleList.filter((article) => article.area === area);
}

export function getAvailableTags(articleList: Article[]) {
  const generatedTags = Array.from(
    new Set(articleList.flatMap((article) => article.tags)),
  );
  const generatedTagSet = new Set(generatedTags);
  const orderedTagSet = new Set<string>(TAG_DISPLAY_ORDER);
  const orderedTags = TAG_DISPLAY_ORDER.filter((tag) =>
    generatedTagSet.has(tag),
  );

  return [
    ...orderedTags,
    ...generatedTags.filter((tag) => !orderedTagSet.has(tag)),
  ];
}

export function filterArticlesByTags(articleList: Article[], tags: string[]) {
  return tags.length === 0
    ? articleList
    : articleList.filter((article) =>
        tags.every((tag) => article.tags.includes(tag)),
      );
}
