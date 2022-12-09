import { Star } from "../ui/star";

export function HomeTopProduct() {
  return (
    <section>
      <div className="container">
        <header className="flex justify-center">
          <h2 className="text-2xl md:text-4xl title-bold text-center max-w-[324px]">
            Top Picks Product Of The Week
          </h2>
        </header>
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-10 mt-8">
          <div className="flex flex-col items-center">
            <figure className="w-[250px] h-[315px] bg-secondary-color rounded-lg flex items-center justify-center">
              <img
                src="/images/top-product-1.png"
                alt="plastic chair"
                className="w-[208px] h-[216px]"
              />
            </figure>
            <h3 className="text-xl title-regular mt-4">Seated sofa</h3>
            <h4 className="text-xl title-bold mt-1">$25.00</h4>
            <div className="flex items-center gap-x-1 mt-2">
              <Star count={5} />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <figure className="w-[250px] h-[315px] bg-secondary-color rounded-lg flex items-center justify-center">
              <img
                src="/images/top-product-2.png"
                alt="plastic chair"
                className="w-[178px] h-[205px]"
              />
            </figure>
            <h3 className="text-xl title-regular mt-4">Womb chair</h3>
            <h4 className="text-xl title-bold mt-1">$25.00</h4>
            <div className="flex items-center gap-x-1 mt-2">
              <Star count={5} />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <figure className="w-[250px] h-[315px] bg-secondary-color rounded-lg flex items-center justify-center">
              <img
                src="/images/top-product-3.png"
                alt="plastic chair"
                className="w-[279px] h-[232px]"
              />
            </figure>
            <h3 className="text-xl title-regular mt-4">Guest chair</h3>
            <h4 className="text-xl title-bold mt-1">$25.00</h4>
            <div className="flex items-center gap-x-1 mt-2">
              <Star count={5} />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <figure className="w-[250px] h-[315px] bg-secondary-color rounded-lg flex items-center justify-center">
              <img
                src="/images/top-product-4.png"
                alt="plastic chair"
                className="w-[209px] h-[209px]"
              />
            </figure>
            <h3 className="text-xl title-regular mt-4">Leather chair</h3>
            <h4 className="text-xl title-bold mt-1">$25.00</h4>
            <div className="flex items-center gap-x-1 mt-2">
              <Star count={5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
