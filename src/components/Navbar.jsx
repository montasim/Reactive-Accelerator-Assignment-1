import Link from "./Link.jsx";
import Image from "./Image.jsx";
import LogoImage from "../assets/logo.png"

function Navbar() {
    return (
        <nav className="container mx-auto flex items-center justify-between gap-x-6 py-6">
            <Link link={"/"}>
                <Image
                    customClass="h-[40px]"
                    imageSrc={LogoImage}
                    imageAltText="Logo"
                />
            </Link>

            <Link
                customClass={"px-5 py-2 bg-primary rounded-[44px]"}
                link={"#"}
                linkText={"Get Admission"}
            />
        </nav>
    )
}

export default Navbar
