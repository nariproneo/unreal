import Image from "next/image";

export function HeroSection() {
  return (
    <main className="relative isolate flex min-h-[360px] overflow-x-clip bg-[#090909] text-[#f7f5f0] sm:min-h-[440px] lg:min-h-[520px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/hero-background.webp')] bg-contain bg-center bg-no-repeat sm:bg-cover sm:bg-[position:50%_center] lg:bg-center" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/55 to-black/35 sm:from-black/80 sm:via-black/60 sm:to-black/30"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-4 pt-5 sm:px-10 sm:pb-5 sm:pt-7 lg:px-16 lg:pb-7">
        <header className="flex items-center gap-3">
          <Image
            src="/images/brand-icon.png"
            alt=""
            width={56}
            height={56}
            priority
            sizes="28px"
            className="size-7 rounded-full object-cover"
          />
          <span className="text-[0.7rem] font-medium tracking-[0.32em] text-[#f7f5f0]">
            UNREAL
          </span>
        </header>

        <section className="pt-10 sm:pt-12 lg:pt-20">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-3 text-[0.65rem] font-medium tracking-[0.24em] text-[#c5a35f]">
              <span className="h-px w-8 bg-[#c5a35f]" />
              極秘編集部
            </p>

            <h1 className="max-w-3xl text-[clamp(2.15rem,8.5vw,5.8rem)] font-light leading-[1.16] tracking-[-0.055em] text-balance">
              全国17人の精鋭だけが知る、
              <br className="hidden sm:block" />
              <span className="text-[#d0ae6b]">秘密のメンズエステ情報機関。</span>
            </h1>

            <div className="mt-6 max-w-md border-l border-[#b49147]/65 pl-5 sm:mt-7 sm:pl-6">
              <p className="text-[0.95rem] font-light leading-8 text-[#d2d0cb] sm:text-base">
                実体験だけを厳選したプレミアム記事を掲載。
                <br />
                全国の本当に価値ある情報だけを届けます。
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
