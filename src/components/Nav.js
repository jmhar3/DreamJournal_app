import WebNav from "./WebNav";
import MobileNav from "./MobileNav";

const Nav = () => {
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        return (
            <MobileNav />
        )
    } else{
        return (
            <WebNav />
        )
    }

}

export default Nav;