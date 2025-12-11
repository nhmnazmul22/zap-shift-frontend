import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Banner1 from "../../../assets/banner/banner1.png";
import Banner2 from "../../../assets/banner/banner2.png";
import Banner3 from "../../../assets/banner/banner3.png";
import { Link } from "react-router";
import Button from "../../../components/common/Button";
import { FaArrowUp } from "react-icons/fa";

/**
 * Next Version Update (V2):
 * @TODO: I will Make this banner using framer motion. Not necessary now it will can be done in next version.
 */

const Banner = () => {
  const bannerImages = [Banner1, Banner2, Banner3];

  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      interval={1000}
    >
      {bannerImages.map((image, index) => (
        <div key={index} className="relative">
          <img src={image} />
          <div className="absolute bottom-[100px] left-28 flex items-center space-x-3">
            <Link to="/track-parcel" className="flex items-center group">
              <Button className="rounded-full!">Track Your Parcel</Button>
              <Button className="btn-secondary border-base-100 text-primary w-10 h-10 rounded-full! flex justify-center items-center">
                <span>
                  <FaArrowUp
                    size={16}
                    className="rotate-45 group-hover:rotate-90 transition-all duration-300"
                  />
                </span>
              </Button>
            </Link>
            <Link to="/be-a-rider">
              <Button className="btn-secondary btn-outline border-base-200 text-base-200 bg-white hover:bg-accent hover:text-white">
                Be A Rider
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
