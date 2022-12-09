export function HomeCategory() {
  return (
    <section className="mt-56">
      <div className="container w-full h-full xl:h-[418px] grid grid-cols-1 xl:grid-cols-4 xl:grid-rows-2 gap-5">
        <div className="flex flex-col xl:flex-row items-start xl:justify-between pt-7 pl-5 bg-secondary-color rounded-xl xl:col-span-2">
          <div>
            <span className="text-base subtitle-regular">#Office</span>
            <h2 className="text-2xl title-semibold max-w-[215px]">
              Make Your Office More Comfortable
            </h2>
          </div>
          <figure className="self-end">
            <img
              src="/images/office.png"
              alt="office chair"
              className=" w-[195px] h-[195px]"
            />
          </figure>
        </div>
        <div className="flex flex-col xl:flex-row items-start xl:justify-between pt-7 pl-5 bg-secondary-color rounded-xl xl:col-span-2 xl:row-end-3">
          <div>
            <span className="text-base subtitle-regular">#Living room</span>
            <h2 className="text-2xl title-semibold max-w-[237px]">
              Discover Our Furniture Collection
            </h2>
          </div>
          <figure className="self-end">
            <img
              src="/images/living-room.png"
              alt="living room chair"
              className=" w-[197px] h-[189px]"
            />
          </figure>
        </div>
        <div className="flex flex-col xl:flex-row items-start pt-12 pl-5 bg-secondary-color rounded-xl xl:col-span-2 xl:row-span-2">
          <div className="flex-1">
            <span className="text-base subtitle-regular">#House</span>
            <h2 className="text-2xl title-semibold w-[214px]">
              Express Your Life Through Furniture
            </h2>
          </div>
          <figure className="self-end">
            <img
              src="/images/house.png"
              alt="house chair"
              className="w-[350px] h-auto xl:w-[455px] xl:h-[318px] object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
