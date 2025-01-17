import HeartCompo from "../Components/HeartCompo";
import HeroBanner from "../Components/HeroBanner";
import HeroEducation from "../Components/HeroEducation";
import HeroFooter from "../Components/HeroFooter";
import NeccessaryThings from "../Components/NeccessaryThings";

const Home = () => {
  return (
    <div className="m-auto max-w-5xl min-h-screen">
      <HeroBanner />
      <HeroEducation />
      <NeccessaryThings />
      <HeartCompo />
      <HeroFooter />
    </div>
  );
};

export default Home;
