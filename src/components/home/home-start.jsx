import { PrimaryButton } from "../ui/button/primary-button";

export function HomeStart() {
  return (
    <section className="h-full xl:h-[700px] bg-secondary-color">
      <div className="container flex flex-wrap items-center justify-between gap-y-20 pt-[104px]">
        <div>
          <h1 className="text-4xl md:text-5xl title-bold">
            Choose Our Top <br /> Picks Furniture
          </h1>
          <p className="text-base subtitle max-w-[499px] mt-5">
            We stand for beauty & style in your house. We have an impressive
            selection of furniture that you’ll love
          </p>
          <PrimaryButton className="mt-9">Shop Now</PrimaryButton>
          <div className="flex items-center gap-x-10 mt-14">
            <div>
              <h2 className="text-3xl title-bold">1534</h2>
              <span className="text-base subtitle">Total Products</span>
            </div>
            <div>
              <h2 className="text-3xl title-bold">12750+</h2>
              <span className="text-base subtitle">Happy Customers</span>
            </div>
          </div>
        </div>
        <figure>
          <img
            src="/images/hero-image.png"
            alt="sofa"
            className="w-full h-auto md:w-[541px] md:h-[558px]"
          />
        </figure>
      </div>
    </section>
  );
}
