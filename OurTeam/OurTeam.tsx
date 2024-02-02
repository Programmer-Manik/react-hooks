import Container from "@/components/Container";
import { wrap } from "@motionone/utils";
import {
    motion,
    useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";
import ourteam from '@/assets/img/tems/ourteam.jpg'

interface ParallaxImageProps {
  imageLink: string;
  baseValue: number;
}

function ParallaxImage({ imageLink, baseValue }: ParallaxImageProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(0, -45, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseValue * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    
      <div>
      <motion.div className="flex flex-nowrap" style={{ x }}>
        <img className="w-[200px] h-[170px] mx-3  opacity-50 hover:opacity-100  rounded-md " src={imageLink} alt="" />
        <img className="w-[200px] h-[170px] mx-3  opacity-50 hover:opacity-100  rounded-md " src={imageLink} alt="" />
        <img className="w-[200px] h-[170px] mx-3  opacity-50 hover:opacity-100  rounded-md " src={imageLink} alt="" />
        <img className="w-[200px] h-[170px] mx-3  opacity-50 hover:opacity-100  rounded-md " src={imageLink} alt="" />
        <img className="w-[200px] h-[170px] mx-3  opacity-50 hover:opacity-100  rounded-md " src={imageLink} alt="" />
        <img className="w-[200px] h-[170px] mx-3  opacity-50 hover:opacity-100  rounded-md " src={imageLink} alt="" />
        <img className="w-[200px] h-[170px] mx-3  opacity-50 hover:opacity-100  rounded-md " src={imageLink} alt="" />
        <img className="w-[200px] h-[170px] mx-3  opacity-50 hover:opacity-100  rounded-md " src={imageLink} alt="" />
        <img className="w-[200px] h-[170px] mx-3  opacity-50 hover:opacity-100  rounded-md " src={imageLink} alt="" />
        <img className="w-[200px] h-[170px] mx-3  opacity-50 hover:opacity-100  rounded-md " src={imageLink} alt="" />
        <img className="w-[200px] h-[170px] mx-3  opacity-50 hover:opacity-100  rounded-md " src={imageLink} alt="" />
        <img className="w-[200px] h-[170px] mx-3  opacity-50 hover:opacity-100  rounded-md " src={imageLink} alt="" />
      </motion.div>
    </div>
    
  )
}

const OurTeam = () => {
 return (
   <Container className="overflow-hidden py-7">
      <h1 className="text-3xl lg:text-5xl font-semibold text-center py-3 " >Meet Our <span className="text-blue-color" >Team</span></h1>
      <h1 className="text-center py-2"> <span className="">all our technicians are fully qualified and licensed. moreover, they're incredibly skillful and</span> <br /> <span>proficient in various aspects of computer repair.</span></h1>
      <div className="py-1">
      <ParallaxImage
        imageLink={ourteam}
        baseValue={-2}
      ></ParallaxImage>
      </div>
      <div className="py-1">
      <ParallaxImage
        imageLink={ourteam}
        baseValue={2}
      ></ParallaxImage>
      </div>
      <div className="py-1">
      <ParallaxImage
        imageLink={ourteam}
        baseValue={-2}
      ></ParallaxImage>
      </div>
      
   </Container>
  
 );
};
export default OurTeam;