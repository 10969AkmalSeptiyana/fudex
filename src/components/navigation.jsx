import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-secondary-color z-50">
      <nav className="relative container h-20 flex items-center justify-between">
        <span className="text-4xl title-bold">Fudex</span>
        <ul className="hidden md:flex items-center gap-x-10">
          <li className="text-base active">Home</li>
          <li className="text-base subtitle">Product</li>
          <li className="text-base subtitle">Categories</li>
          <li className="text-base subtitle">Promo</li>
        </ul>
        <div className="hidden md:flex items-center gap-x-7">
          <button className="flex items-center space-x-2 text-base title-medium">
            <img src="/icons/cart.svg" alt="cart" />
            <span>My Cart</span>
          </button>
          <button className="text-base title-medium border-2 border-title-color py-2 px-5 rounded">
            Register
          </button>
        </div>

        {/* mobile */}
        <div className="flex items-center space-x-4 md:hidden">
          <button>
            <img src="/icons/cart.svg" alt="cart" />
          </button>
          <button onClick={() => setMenuOpen(!isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "#1B2430" }}
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </button>
        </div>

        <div
          className={[
            "absolute w-3/5 h-screen top-0 flex items-center justify-center bg-secondary-color shadow-md transition-all ease-in-out delay-200 md:hidden",
            isMenuOpen ? "-left-0" : "-left-full",
          ].join(" ")}
        >
          <div>
            <ul className="text-center space-y-10">
              <li className="text-base active">Home</li>
              <li className="text-base subtitle">Product</li>
              <li className="text-base subtitle">Categories</li>
              <li className="text-base subtitle">Promo</li>
            </ul>
            <button className="text-base title-medium border-2 border-title-color py-2 px-5 rounded mt-10">
              Register
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
