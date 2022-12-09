export function Footer() {
  return (
    <footer className="flex flex-col justify-between h-full xl:h-[479px] bg-black pt-24 pb-4">
      <div className="container flex flex-col md:flex-row md:flex-wrap justify-start xl:justify-between gap-x-10 gap-y-16">
        <div>
          <h2 className="text-4xl text-white font-bold">Fudex</h2>
          <p className="text-base subtitle max-w-[340px] mt-2">
            Fudex is website to make you happy. If you’re not happy, we’re not
            happy. We work tirelessly to make sure your Havenly experience is
            delightful
          </p>
        </div>
        <div>
          <h3 className="text-2xl text-white font-semibold mb-10">About</h3>
          <ul className="space-y-5">
            <li className="text-base subtitle">Investors</li>
            <li className="text-base subtitle">Privacy Policy</li>
            <li className="text-base subtitle">Terms</li>
            <li className="text-base subtitle">Carrers</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl text-white font-semibold mb-10">Support</h3>
          <ul className="space-y-5">
            <li className="text-base subtitle">FAQ’s</li>
            <li className="text-base subtitle">Shipping</li>
            <li className="text-base subtitle">Care guide</li>
            <li className="text-base subtitle">Warranty</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl text-white font-semibold mb-10">
            Customer Care
          </h3>
          <ul className="space-y-5">
            <li className="text-base subtitle">My Account</li>
            <li className="text-base subtitle">Discount</li>
            <li className="text-base subtitle">Returns</li>
            <li className="text-base subtitle">Order History</li>
            <li className="text-base subtitle">Order Tracking</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl text-white font-semibold mb-10">Blog</h3>
          <ul className="space-y-5">
            <li className="text-base subtitle">Pricing</li>
            <li className="text-base subtitle">Woodwork and furniture</li>
            <li className="text-base subtitle">Selecting Cabinetry</li>
            <li className="text-base subtitle">Layering Warm Tone</li>
          </ul>
        </div>
      </div>
      <p className="text-base font-semibold text-white text-center mt-20">
        Fudex, 2022 Allright Reserved
      </p>
    </footer>
  );
}
