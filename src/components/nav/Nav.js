import WebNav from "./WebNav";
import MobileNav from "./MobileNav";

const Nav = () => {
    console.log(window.screen.width)
    if (window.screen.width < 600 || (/iPad/i.test(navigator.userAgent))) {
        return (
            <MobileNav />
        )
    } else {
        return (
            // <MobileNav />
            <WebNav />
        )
    }
}

export default Nav;