import LogoLoop from "./Marquee";


// Alternative with image sources
const imageLogos = [
    { src: "/imgs/logos/logo1.jpeg", alt: "Company 1", href: "https://company1.com" },
    { src: "/imgs/logos/logo2.jpeg", alt: "Company 2", href: "https://company2.com" },
    { src: "/imgs/logos/logo3.jpeg", alt: "Company 3", href: "https://company3.com" },
    { src: "/imgs/logos/logo4.jpeg", alt: "Company 1", href: "https://company1.com" },
    { src: "/imgs/logos/logo5.jpeg", alt: "Company 2", href: "https://company2.com" },
    { src: "/imgs/logos/logo6.jpeg", alt: "Company 3", href: "https://company3.com" },
];

const TrustedBy = () => {
    return (
        <div className="relative overflow-hidden bg-white h-auto flex flex-col justify-center items-center rounded-b-3xl lg:rounded-b-[4rem] pt-10 pb-20 mb-[90vh] md:mb-[50vh] z-20">
            <h3 className="text-3xl md:text-4xl font-manrope font-extrabold mb-8">Trusted By</h3>
            <LogoLoop
                logos={imageLogos}
                speed={120}
                direction="left"    
                logoHeight={100}
                gap={150}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
            />
        </div>
    );
}
export default TrustedBy;