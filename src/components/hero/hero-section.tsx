export function HeroSection() {
  return (
    <main className="relative isolate flex min-h-[360px] overflow-x-clip bg-[#090909] text-[#f7f5f0] sm:min-h-[440px] lg:min-h-[520px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_75%_48%_at_78%_18%,rgba(180,145,71,0.15),transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-28%] top-[22%] -z-10 h-[28rem] w-[28rem] rounded-full border border-[#b49147]/15 sm:right-[-12%] sm:h-[42rem] sm:w-[42rem]"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-4 pt-5 sm:px-10 sm:pb-5 sm:pt-7 lg:px-16 lg:pb-7">
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="grid size-7 place-items-center border border-[#c5a35f]/75"
          >
            <span className="size-2 rotate-45 border border-[#d9bd7f]" />
          </span>
          <span className="text-[0.7rem] font-medium tracking-[0.32em] text-[#f7f5f0]">
            UNREAL
          </span>
        </header>

        <section className="pt-10 sm:pt-12 lg:pt-20">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-3 text-[0.65rem] font-medium tracking-[0.24em] text-[#c5a35f]">
              <span className="h-px w-8 bg-[#c5a35f]" />
              PRIVATE EDITORIAL
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
