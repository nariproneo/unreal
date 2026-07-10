export const areas = [
  "全国",
  "東京",
  "大阪",
  "名古屋",
  "福岡",
  "札幌",
  "仙台",
  "横浜",
] as const;

export type Area = (typeof areas)[number];

export type Article = {
  id: string;
  area: Exclude<Area, "全国">;
  title: string;
  excerpt: string;
  tags: string[];
  regularPrice: number;
  salePrice: number;
  /** Codocと共通で使う、960×540（16:9）のサムネイル画像パス */
  thumbnail: string;
  href: string;
};

export const articles: Article[] = [
  {
    id: "tokyo-private-suite",
    area: "東京",
    title: "静けさまで設計された、都心のプライベートスイート",
    excerpt: "接客、空間、余韻まで。実体験をもとに、予約前に知っておきたい本質だけをまとめました。",
    tags: ["東京", "完全個室", "初回向け"],
    regularPrice: 1980,
    salePrice: 1480,
    thumbnail: "/images/articles/placeholder-16x9.svg",
    href: "https://codoc.jp/@unreal/tokyo-private-suite",
  },
  {
    id: "osaka-night-guide",
    area: "大阪",
    title: "大阪で選ぶなら外せない、夜のための厳選3店",
    excerpt: "アクセスだけでは見えない違いを比較。仕事帰りにも使いやすい店舗を実体験で選びました。",
    tags: ["大阪", "夜利用", "比較"],
    regularPrice: 1780,
    salePrice: 1280,
    thumbnail: "/images/articles/placeholder-16x9.svg",
    href: "https://codoc.jp/@unreal/osaka-night-guide",
  },
  {
    id: "nagoya-first-choice",
    area: "名古屋",
    title: "初めてでも迷わない、名古屋の信頼できる一軒",
    excerpt: "はじめて利用する人が安心して選べるよう、予約から退店までの流れを丁寧に検証しました。",
    tags: ["名古屋", "初心者", "検証済み"],
    regularPrice: 1580,
    salePrice: 1180,
    thumbnail: "/images/articles/placeholder-16x9.svg",
    href: "https://codoc.jp/@unreal/nagoya-first-choice",
  },
  {
    id: "fukuoka-hidden-gem",
    area: "福岡",
    title: "福岡・薬院で見つけた、紹介したくなる隠れた名店",
    excerpt: "派手な宣伝には出ない一軒を訪問。価格以上の満足感につながる理由を記録しました。",
    tags: ["福岡", "薬院", "隠れ家"],
    regularPrice: 1680,
    salePrice: 1280,
    thumbnail: "/images/articles/placeholder-16x9.svg",
    href: "https://codoc.jp/@unreal/fukuoka-hidden-gem",
  },
  {
    id: "sapporo-winter-care",
    area: "札幌",
    title: "札幌で長く通いたい、冬の夜に選ぶ上質な時間",
    excerpt: "落ち着いた接客と清潔感を軸に選定。リピート目線で見た、通う価値のある店舗です。",
    tags: ["札幌", "リピート", "上質"],
    regularPrice: 1880,
    salePrice: 1380,
    thumbnail: "/images/articles/placeholder-16x9.svg",
    href: "https://codoc.jp/@unreal/sapporo-winter-care",
  },
  {
    id: "sendai-quiet-luxury",
    area: "仙台",
    title: "仙台で出会う、気取らない上質を知るための案内",
    excerpt: "一過性の話題ではなく、また訪れたくなる理由がある店舗だけを厳選して紹介します。",
    tags: ["仙台", "落ち着き", "厳選"],
    regularPrice: 1480,
    salePrice: 980,
    thumbnail: "/images/articles/placeholder-16x9.svg",
    href: "https://codoc.jp/@unreal/sendai-quiet-luxury",
  },
  {
    id: "yokohama-harbor-guide",
    area: "横浜",
    title: "横浜の夜を整える、港町のプライベートケア案内",
    excerpt: "駅からの導線、空間の安心感、技術の安定感をもとに、選ぶ基準を整理しました。",
    tags: ["横浜", "駅近", "プライベート"],
    regularPrice: 1980,
    salePrice: 1480,
    thumbnail: "/images/articles/placeholder-16x9.svg",
    href: "https://codoc.jp/@unreal/yokohama-harbor-guide",
  },
  {
    id: "tokyo-weekend-edit",
    area: "東京",
    title: "週末のために保存したい、東京・西側の実力店",
    excerpt: "混雑を避けながら満足度を上げるために。予約しやすさも含めて実地で比較しました。",
    tags: ["東京", "週末", "予約"],
    regularPrice: 1780,
    salePrice: 1280,
    thumbnail: "/images/articles/placeholder-16x9.svg",
    href: "https://codoc.jp/@unreal/tokyo-weekend-edit",
  },
  {
    id: "osaka-business-trip",
    area: "大阪",
    title: "出張の夜に頼れる、大阪駅周辺の一軒を徹底検証",
    excerpt: "限られた時間でも失敗しないように。立地とサービスのバランスを実体験から解説します。",
    tags: ["大阪", "出張", "大阪駅"],
    regularPrice: 1580,
    salePrice: 1180,
    thumbnail: "/images/articles/placeholder-16x9.svg",
    href: "https://codoc.jp/@unreal/osaka-business-trip",
  },
  {
    id: "tokyo-editor-choice",
    area: "東京",
    title: "編集部が再訪した、東京で一度は体験したい一軒",
    excerpt: "過度な演出ではなく、細部に宿る誠実さを評価。満足度を左右する要素を公開します。",
    tags: ["東京", "編集部推薦", "再訪"],
    regularPrice: 2180,
    salePrice: 1680,
    thumbnail: "/images/articles/placeholder-16x9.svg",
    href: "https://codoc.jp/@unreal/tokyo-editor-choice",
  },
  {
    id: "fukuoka-evening-standard",
    area: "福岡",
    title: "福岡で失敗しないための、夜利用スタンダード",
    excerpt: "初回の不安をなくすために、予約時に確認したいポイントと実際の印象をまとめました。",
    tags: ["福岡", "夜利用", "初回向け"],
    regularPrice: 1480,
    salePrice: 980,
    thumbnail: "/images/articles/placeholder-16x9.svg",
    href: "https://codoc.jp/@unreal/fukuoka-evening-standard",
  },
  {
    id: "yokohama-private-room",
    area: "横浜",
    title: "横浜・関内で選ぶ、余白のある完全個室体験",
    excerpt: "静かな時間を大切にしたい人へ。設備、接客、空気感を実際に確かめて選びました。",
    tags: ["横浜", "関内", "完全個室"],
    regularPrice: 1880,
    salePrice: 1380,
    thumbnail: "/images/articles/placeholder-16x9.svg",
    href: "https://codoc.jp/@unreal/yokohama-private-room",
  },
];
