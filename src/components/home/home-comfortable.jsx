export function HomeComfortable() {
  return (
    <section>
      <div className="container flex flex-wrap items-center gap-x-24 gap-y-10">
        <figure>
          <img
            src="/images/sofa.png"
            alt="blue sofa"
            className="w-full h-auto md:w-[558px] md:h-[550px]"
          />
        </figure>
        <div className="max-w-[500px]">
          <h2 className="text-3xl md:text-4xl title-bold">
            Experienced in making your home more modern and comfortable
          </h2>
          <ul className="space-y-3 mt-6">
            <li className="before:content-[''] before:block before:w-3 before:h-3 before:rounded-full before:bg-title-color before:shrink-0 flex items-center gap-x-3 text-base title-regular">
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="before:content-[''] before:block before:w-3 before:h-3 before:rounded-full before:bg-title-color before:shrink-0 flex items-center gap-x-3 text-base title-regular">
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </li>
            <li className="before:content-[''] before:block before:w-3 before:h-3 before:rounded-full before:bg-title-color before:shrink-0 flex items-center gap-x-3 text-base title-regular">
              Arms, backs and seats are structurally reinforced
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
