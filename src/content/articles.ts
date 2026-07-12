export const areas = [
  "全国",
  "東京",
  "大阪",
  "名古屋",
  "福岡",
  "札幌",
  "仙台",
  "神奈川",
  "千葉",
] as const;

export type Area = (typeof areas)[number];

export type Article = {
  id: string;
  area: Exclude<Area, "全国">;
  title: string;
  excerpt: string;
  tags: string[];
  publishedAt?: string;
  regularPrice: number;
  salePrice: number;
  /** Codocと共通で使う、960×540（16:9）のサムネイル画像パス */
  thumbnail: string;
  href: string;
};

export const articles: Article[] = [
  {
    id: "osaka-ns-white-gyaru-experience",
    area: "大阪",
    title: "【大阪NS】トップキャバ譲レベルの白ギャルを死ぬほど生チ◯ポでハ◯たおす極上体験！",
    excerpt:
      "当てはまったら買うべき。トップキャバ嬢レベルの顔面激つよ美女と生S◯Xしたい人、NSを超高確率で体験したい人、爆美女に「入れて♡」と言われたい人におすすめです。",
    tags: ["おすすめ", "NS", "HR", "ギャル", "巨乳", "スレンダー"],
    publishedAt: "2026-07-12",
    regularPrice: 1200,
    salePrice: 1000,
    thumbnail: "/images/articles/osaka-ns-white-gyaru-experience.webp",
    href: "https://codoc.jp/sites/OHIQksoN5w/entries/BEMMqgu1kw",
  },
  {
    id: "tokyo-shinjuku-nn-actress-experience",
    area: "東京",
    title: "【新宿 99％NN】フォロワー数万越えのA◯女優とバチバチ中◯しセ◯クス体験！！",
    excerpt:
      "多くは語りません。サムネイルで全てわかると思うので（笑）かな～りオススメです！",
    tags: ["NN", "有名人", "巨乳", "綺麗系"],
    publishedAt: "2026-07-12",
    regularPrice: 1500,
    salePrice: 1000,
    thumbnail: "/images/articles/tokyo-shinjuku-nn-actress-experience.webp",
    href: "https://codoc.jp/sites/OHIQksoN5w/entries/DvCuHf3P3g",
  },
  {
    id: "tokyo-free-nn-e-cup-beauty",
    area: "東京",
    title: "【無課金NN】顔面最強なのに性◯魔人のE杯美女に大量NN！！",
    excerpt:
      "今回は顔面特化です。え？？なんでこの人メンエスしてるの？？そのぐらい美人な人に出会ってしまいました....キャバ嬢ルックス美女に無課金大量NNしてきました...",
    tags: ["おすすめ", "NN", "巨乳", "神コスパ"],
    publishedAt: "2026-07-12",
    regularPrice: 1500,
    salePrice: 1000,
    thumbnail: "/images/articles/tokyo-free-nn-e-cup-beauty.webp",
    href: "https://codoc.jp/sites/OHIQksoN5w/entries/V977xWTfwg",
  },
  {
    id: "osaka-premium-hr-therapist-list-5",
    area: "大阪",
    title: "【大阪】神HRできた極上セラピ5選！！NN、NSありの厳選セラピストをご紹介！！",
    excerpt:
      "今回は直近1年以内にNN、NS、HRができた幻の5人をご紹介しちゃいます！メンエス仲間もHRできた子もいるので高確率で極上体験できると思います！どれも粒揃いなのでお楽しみに（笑）",
    tags: ["まとめ系", "NN", "NS", "HR", "スレンダー", "ギャル", "綺麗系", "巨乳", "大人系"],
    publishedAt: "2026-07-11",
    regularPrice: 3000,
    salePrice: 1800,
    thumbnail: "/images/articles/osaka-premium-hr-therapist-list-5.webp",
    href: "https://codoc.jp/sites/OHIQksoN5w/entries/1E0Epp0Iog",
  },
  {
    id: "tokyo-secret-busty-hr-list-5",
    area: "東京",
    title: "【東京】㊙超厳選巨乳HRリスト5名！A◯女優、2回戦HR、NSあり。",
    excerpt:
      "メンエス歴8年の視点から、無課金HR・NS・二回戦無課金HR・Iカップ現役AV女優などを含む、超厳選した最強セラピスト5名をまとめた極秘巨乳HRリストです。",
    tags: ["おすすめ", "まとめ系", "NS", "HR", "PZR", "F", "巨乳", "2回戦以上", "有名人", "神コスパ"],
    publishedAt: "2026-07-11",
    regularPrice: 2700,
    salePrice: 1500,
    thumbnail: "/images/articles/tokyo-secret-busty-hr-list-5-v2.webp",
    href: "https://codoc.jp/sites/OHIQksoN5w/entries/uc4e7wyRBg",
  },
];
