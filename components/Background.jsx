import LightRays from "@/components/ui/LightRays/LightRays";

const Background = () => {
  return (
    <div className="w-[100%] h-[100%] fixed">
      <LightRays
        raysOrigin="top-center"
        raysColor="#b3b3b3"
        raysSpeed={1}
        lightSpread={0.8}
        rayLength={3}
        fadeDistance={2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        saturation={1}
        className=""
      />
    </div>
  );
};

export default Background;
