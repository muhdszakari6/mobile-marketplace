interface HeroProps {
  hashtag: string;
  title: JSX.Element;
  desc: boolean;
  photo: string;
  swiperIndex: number;
  slides: number;
}
const Hero = ({
  photo,
  swiperIndex,
  slides,
  hashtag,
  desc,
  title,
}: HeroProps) => {
  const indicators = Array.from(Array(slides).keys());

  return (
    <div
      style={{ backgroundImage: `url('/assets/home/${photo}')` }}
      className={`relative min-h-[15rem] bg-cover brightness-95 z-0 pt-[5rem] px-4 flex justify-between`}
    >
      <div className="flex flex-col items-start">
        <h3 className="uppercase text-primary-900 text-[0.6rem] font-semibold mb-1 mt-2">
          #{hashtag}
        </h3>
        {title}
        {desc && (
          <p className="text-[0.6rem] font-light text-gray-500">
            Discover fashion that suits to <br /> your style
          </p>
        )}
        <button className="rounded-md text-white text-[0.6rem] px-5 py-2 bg-primary-950 mt-3 mb-5">
          Check this out
        </button>
      </div>
      <div className="flex items-start">
        {indicators.map((_, i) => (
          <div
            key={i}
            className={`${
              i == swiperIndex ? "w-3 bg-black" : "w-1 bg-gray-400"
            } h-1 rounded-full mr-1 transition ease-in`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
