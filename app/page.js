import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Spacer from '@/components/ui/Spacer';

export default async function Page() {
  return (
    <>
      <div className="">
        <Hero />
        <Spacer />
        <Description />
      </div>
    </>
  );
}
