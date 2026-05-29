import Image from "next/image";
import Link from "next/link";

type PropertyPhotoShowcaseProps = {
  title: string;
  slug: string;
  images: string[];
};

export function PropertyPhotoShowcase({ title, slug, images }: PropertyPhotoShowcaseProps) {
  const galleryHref = `/imoveis/${slug}/fotos`;
  const [mainImage, ...secondaryImages] = images;
  const desktopImages = secondaryImages.slice(0, 4);
  const mobileImages = images.slice(1);

  if (!mainImage) {
    return null;
  }

  return (
    <section className="bg-background pt-6 pb-8 sm:pt-8 lg:pb-10">
      <div className="site-shell">
        <div className="relative overflow-hidden rounded-[28px] border border-line bg-deep shadow-lift lg:rounded-[34px]">
          <div className="grid gap-px bg-deep lg:grid-cols-[1.35fr_0.9fr]">
            <Link
              href={galleryHref}
              className="group relative block aspect-[4/3] overflow-hidden bg-accentSoft lg:aspect-[16/10]"
              aria-label={`Ver todas as fotos de ${title}`}
            >
              <Image
                src={mainImage}
                alt={title}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.025]"
              />
              <span className="absolute inset-0 bg-deep/0 transition duration-300 group-hover:bg-deep/10" />
            </Link>

            <div className="hidden h-full grid-cols-2 grid-rows-2 gap-px lg:grid">
              {desktopImages.map((image, index) => {
                const isLastVisible = index === desktopImages.length - 1;

                return (
                  <Link
                    key={image}
                    href={galleryHref}
                    className="group relative block overflow-hidden bg-accentSoft"
                    aria-label={`Ver fotos de ${title}`}
                  >
                    <Image
                      src={image}
                      alt={`${title} - foto ${index + 2}`}
                      fill
                      sizes="21vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="absolute inset-0 bg-deep/0 transition duration-300 group-hover:bg-deep/[0.14]" />
                    {isLastVisible ? (
                      <span className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-deep/[0.54] via-deep/[0.08] to-transparent p-5">
                        <span className="inline-flex min-h-11 items-center justify-center rounded-full border border-pearl/[0.28] bg-deep/[0.72] px-5 text-sm font-bold text-pearl shadow-[0_16px_38px_rgba(0,0,0,0.32)] backdrop-blur-xl transition group-hover:border-accent/60 group-hover:text-accent">
                          Ver todas as fotos
                        </span>
                      </span>
                    ) : null}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 border-t border-pearl/10 bg-deep p-4 lg:hidden">
            {mobileImages.length ? (
              <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
                {mobileImages.map((image, index) => (
                  <Link
                    key={image}
                    href={galleryHref}
                    className="relative block aspect-[4/3] w-[72vw] max-w-[280px] shrink-0 overflow-hidden rounded-2xl bg-accentSoft"
                    aria-label={`Ver foto ${index + 2} de ${title}`}
                  >
                    <Image
                      src={image}
                      alt={`${title} - foto ${index + 2}`}
                      fill
                      sizes="72vw"
                      className="object-cover"
                    />
                  </Link>
                ))}
              </div>
            ) : null}

            <Link href={galleryHref} className="button-primary w-full">
              Ver todas as fotos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
