import { PrimaryButton } from "../ui/button/primary-button";

export function HomeDiscount() {
  return (
    <section className="container">
      <div className=" relative flex flex-wrap items-center gap-x-40 h-[400px] bg-secondary-color rounded-lg px-6">
        <div className="w-auto hidden xl:block">
          <figure className="absolute left-10 top-0">
            <img
              src="/images/lamp.png"
              alt="lamp"
              className="w-[146px] h-[146px]"
            />
          </figure>
          <figure className="absolute bottom-0">
            <img
              src="/images/table.png"
              alt="table"
              className="w-[184px] h-[281px]"
            />
          </figure>
          <figure className="relative left-28 top-14">
            <img
              src="/images/soft-chair.png"
              alt="soft chair"
              className="w-[412px] h-[352px]"
            />
          </figure>
        </div>
        <div>
          <p className="text-xl title-regular">New Arrival</p>
          <h2 className="text-4xl lg:text-5xl title-semibold max-w-[444px] mt-2">
            This friday 25% off & special gift
          </h2>
          <PrimaryButton className="mt-7">Shop Now</PrimaryButton>
        </div>

        <figure className="absolute bottom-7 md:bottom-11 right-16 md:right-28">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6667 15.9998L15 24.9998L12.3333 15.9998L3.33334 13.3332L12.3333 10.6665L15 1.6665L17.6667 10.6665L26.6667 13.3332L17.6667 15.9998ZM28.3333 23.6665L35 19.9998L31.3333 26.6665L35 33.3332L28.3333 29.6665L21.6667 33.3332L25.3333 26.6665L21.6667 19.9998L28.3333 23.6665ZM16.6667 26.6665L13.8333 31.6665L16.6667 36.6665L11.6667 33.8332L6.66668 36.6665L9.50001 31.6665L6.66668 26.6665L11.6667 29.4998L16.6667 26.6665Z"
              fill="#1B2430"
            />
          </svg>
        </figure>
        <figure className="absolute bottom-20 md:bottom-24 right-6 md:right-14">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6667 15.9998L15 24.9998L12.3333 15.9998L3.33334 13.3332L12.3333 10.6665L15 1.6665L17.6667 10.6665L26.6667 13.3332L17.6667 15.9998ZM28.3333 23.6665L35 19.9998L31.3333 26.6665L35 33.3332L28.3333 29.6665L21.6667 33.3332L25.3333 26.6665L21.6667 19.9998L28.3333 23.6665ZM16.6667 26.6665L13.8333 31.6665L16.6667 36.6665L11.6667 33.8332L6.66668 36.6665L9.50001 31.6665L6.66668 26.6665L11.6667 29.4998L16.6667 26.6665Z"
              fill="#1B2430"
            />
          </svg>
        </figure>
      </div>
    </section>
  );
}
