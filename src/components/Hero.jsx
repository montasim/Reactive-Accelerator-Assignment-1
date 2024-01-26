import Image from "./Image.jsx";
import Link from "./Link.jsx";
import HeroImage from "../assets/hero-graphics.svg"

function Hero() {
    return (
        <section
            className="bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 pb-20 -mt-[92px] md:-mt-[118px]"
        >
            <div className="flex items-center justify-between">
                <div className="grid md:grid-cols-2 items-center w-10/12 mx-auto">
                    <Image
                        customClass={"md:order-2 object-cover ml-auto animate-updown"}
                        imageSrc={HeroImage}
                        imageAltText={"Banner"}
                        width={"500px"}
                        height={"500px"}
                    />

                    <div>
                        <h1 className="text-4xl lg:text-[56px] font-bold leading-[1.1] mb-8">
                            The Future of Learning starts with students at the center
                        </h1>

                        <Link
                            customClass={"px-5 py-2.5 bg-green-800 rounded-[44px]"}
                            link={"#"}
                            linkText={"Learn More"}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
