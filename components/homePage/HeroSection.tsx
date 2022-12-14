import Image from "next/future/image";
import AltercogLogo from "../../lib/SVG/AltercogLogo";
import AltercogDef from "./AltercogDef";

export default function HeroSection() {
  return (
    <div className="home__hero">
      <div className="home__hero--main main-grid">
        <div className="home__hero--logo">
          <AltercogLogo />
        </div>
        <div className="home__hero--def">
          <AltercogDef />
        </div>
        <div className="home__hero--image">
          <Image
            src="/images/TreeAtNight.png"
            height={690}
            width={690}
            quality={100}
            alt="Tree At Night"
          />
        </div>
      </div>
    </div>
  );
}
