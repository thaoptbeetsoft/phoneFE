import Blog from "../../components/blog";
import Footer from "../../components/footer";
import FreeVersionBanner from "../../components/free-version-banner";
import HeroSlider from "../../components/hero-slider";
import HomeList from "../../components/home-list";
import Modal from "../../components/modal";
import MostPopular from "../../components/most-popular";
import Newsletter from "../../components/newsletter";
import Product from "../../components/product";
import ShopServices from "../../components/shop-services";
import SmallBanner from "../../components/small";
import HeaderDefault from "../../components/header-default";
function HomePage() {
    return ( 
        <>
        <HeaderDefault></HeaderDefault>
        <HeroSlider></HeroSlider>
        <SmallBanner></SmallBanner>
        {/* <MostPopular></MostPopular>   hàng bán chạy */}
        <Product></Product>   {/* thịnh hành*/}
        {/* <MidiumBanner></MidiumBanner> */}
        <FreeVersionBanner></FreeVersionBanner>
        <HomeList></HomeList>   {/*Sale, điện thoại cũm máy tính cũ*/}
        <Blog></Blog>   {/*thông tin cônh nghệ */}
        <ShopServices></ShopServices>
        <Newsletter></Newsletter>
        <Modal></Modal>
        <Footer></Footer>
        </>
     );
}

export default HomePage;