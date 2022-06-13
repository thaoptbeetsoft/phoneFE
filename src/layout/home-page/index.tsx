import Blog from "../../components/blog";
import Footer from "../../components/footer";
import FreeVersionBanner from "../../components/free-version-banner";
import HeroSlider from "../../components/hero-slider";
import HomeList from "../../components/home-list";
import Newsletter from "../../components/news-letter";
import Product from "../../components/product";
import ShopServices from "../../components/shop-services";
import HeaderDefault from "../../components/header-default";
function HomePage() {
    return ( 
        <>
        <HeaderDefault></HeaderDefault>
        <HeroSlider></HeroSlider>
        <Product></Product>   {/* thịnh hành*/}
        <FreeVersionBanner></FreeVersionBanner>
        <HomeList></HomeList>   {/*Sale, điện thoại cũm máy tính cũ*/}
        <Blog></Blog>   {/*thông tin cônh nghệ */}
        <ShopServices></ShopServices>
        <Newsletter></Newsletter>
        <Footer></Footer>
        </>
     );
}

export default HomePage;