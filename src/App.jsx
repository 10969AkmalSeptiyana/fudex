import { Navigation } from "./components/navigation";
import { HomeStart } from "./components/home/home-start";
import { HomeBestSelling } from "./components/home/home-best-selling";
import { HomeFeatured } from "./components/home/home-featured";
import { HomeCategory } from "./components/home/home-category";
import { HomeTopProduct } from "./components/home/home-top-product";
import { HomeComfortable } from "./components/home/home-comfortable";
import { HomeRating } from "./components/home/home-rating";
import { HomeDiscount } from "./components/home/home-discount";
import { HomeJoin } from "./components/home/home-join";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <HomeStart />
        <HomeBestSelling />
        <HomeFeatured />
        <HomeCategory />
        <HomeTopProduct />
        <HomeComfortable />
        <HomeRating />
        <HomeDiscount />
        <HomeJoin />
      </main>
      <Footer />
    </>
  );
}

export default App;
