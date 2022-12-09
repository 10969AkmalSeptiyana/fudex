export function HomeRating() {
  return (
    <section className="container">
      <article className="flex flex-col items-center justify-center h-[350px] bg-secondary-color rounded-lg px-5">
        <figure>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 18.5C32 22.6437 28.1643 26 23.4286 26H22.8571C21.5929 26 20.5714 25.1063 20.5714 24C20.5714 22.8937 21.5929 22 22.8571 22H23.4286C25.6357 22 27.4286 20.4312 27.4286 18.5V18H22.8571C20.3357 18 18.2857 16.2063 18.2857 14V10C18.2857 7.79375 20.3357 6 22.8571 6H27.4286C29.95 6 32 7.79375 32 10V12V14V18.5ZM13.7143 18.5C13.7143 22.6437 9.87857 26 5.14286 26H4.57143C3.30714 26 2.28571 25.1063 2.28571 24C2.28571 22.8937 3.30714 22 4.57143 22H5.14286C7.35 22 9.14286 20.4312 9.14286 18.5V18H4.57143C2.05 18 0 16.2063 0 14V10C0 7.79375 2.05 6 4.57143 6H9.14286C11.6643 6 13.7143 7.79375 13.7143 10V12V14V18.5Z"
              fill="#1B2430"
            />
          </svg>
        </figure>
        <p className="text-xl md:text-2xl subtitle text-center max-w-[725px] mt-5">
          Their product are Amazing! This is the best place to buy any
          furnitures with super fantastic quality and design. With super many
          benefits you must try it.
        </p>
        <h3 className="text-xl md:text-2xl title-semibold mt-7">
          Martin Aminoff
        </h3>
      </article>
    </section>
  );
}
