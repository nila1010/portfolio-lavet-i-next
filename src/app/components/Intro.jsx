export default function Intro() {
  return (
    <section className="block mt-16 gap-10 md:grid grid-cols-[3fr_2fr] ">
      <div className="text-right font-bold text-customorange pb-16 md:pb-32 text-6xl md:text-left md:order-1 lg:text-7xl ">
        <p className="animate-slidein5 translate-x-[200%]">Passion</p>
        <p className="animate-slidein7 translate-x-[200%]">Simple</p>
        <p className="animate-slidein9 translate-x-[200%]">Excitment</p>
      </div>
      <div className=" self-end">
        <h2 className=" mb-3 text-2xl lg:text-3xl ">Frontend</h2>
        <h3 className="font-bold text-4xl  lg:text-5xl before:content-['Nicolai_'] before:text-customorange">Fisker Langkilde</h3>
        <h3 className="text-2xl  lg:text-3xl">Multimediedesigner studerende</h3>
      </div>
    </section>
  );
}
