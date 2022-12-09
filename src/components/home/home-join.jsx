export function HomeJoin() {
  return (
    <section>
      <div className="container flex flex-col gap-y-20 lg:flex-row lg:items-center lg:justify-between lg:gap-x-44">
        <div>
          <h3 className="text-3xl title-semibold">Join Our Mail List</h3>
          <p className="text-base subtitle-regular max-w-[350px] mt-2">
            Don’t miss out, join us and get interesting discounts from us
          </p>
        </div>
        <div className="flex-1">
          <div className="relative">
            <input
              type="email"
              className="w-full text-subtitle-color border-b border-b-subtitle-color pb-2 outline-none"
              placeholder="Enter your email address"
            />
            <button className="absolute top-0 right-0 text-xl title-semibold">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
