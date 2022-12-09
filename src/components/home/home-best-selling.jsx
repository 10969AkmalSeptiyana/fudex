export function HomeBestSelling() {
  return (
    <section>
      <div className="container">
        <header className="flex items-center max-w-[1078px] mx-auto">
          <h2 className="text-2xl md:text-4xl title-bold flex-1">
            Best Selling Product
          </h2>
          <button className="text-lg text-primary-color font-regular">
            See All
          </button>
        </header>
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-10 mt-8">
          <div>
            <figure className="w-[250px] h-[315px] bg-secondary-color rounded-lg flex items-center justify-center">
              <img
                src="/images/best-selling-1.png"
                alt="plastic chair"
                className="w-[208px] h-[216px]"
              />
            </figure>
            <h3 className="text-xl title-regular mt-4">Comfort Handy Craft</h3>
            <h4 className="text-xl title-bold mt-1">$25.00</h4>
          </div>
          <div>
            <figure className="w-[250px] h-[315px] bg-secondary-color rounded-lg flex items-center justify-center">
              <img
                src="/images/best-selling-2.png"
                alt="plastic chair"
                className="w-[178px] h-[205px]"
              />
            </figure>
            <h3 className="text-xl title-regular mt-4">Cantilever Chair</h3>
            <h4 className="text-xl title-bold mt-1">$25.00</h4>
          </div>
          <div>
            <figure className="w-[250px] h-[315px] bg-secondary-color rounded-lg flex items-center justify-center">
              <img
                src="/images/best-selling-3.png"
                alt="plastic chair"
                className="w-[197px] h-[197px]"
              />
            </figure>
            <h3 className="text-xl title-regular mt-4">Plastic Chair</h3>
            <h4 className="text-xl title-bold mt-1">$25.00</h4>
          </div>
          <div>
            <figure className="w-[250px] h-[315px] bg-secondary-color rounded-lg flex items-center justify-center">
              <img
                src="/images/best-selling-4.png"
                alt="plastic chair"
                className="w-[209px] h-[209px]"
              />
            </figure>
            <h3 className="text-xl title-regular mt-4">Chair Oak Blue</h3>
            <h4 className="text-xl title-bold mt-1">$25.00</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
