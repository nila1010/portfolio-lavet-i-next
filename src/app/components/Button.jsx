export default function Button({ children, linkPath = "/#" }) {
  return (
    <a href={linkPath} className="md:flex-none min-w-fit flex-1 text-center font-bold text-2xl bg-customorange text-slate-800 py-2 px-8 rounded-lg hover:bg-white hover:text-customorange">
      {children}
    </a>
  );
}
