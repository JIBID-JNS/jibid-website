import jiblogo from '@/images/logos/jibid.jpg';

export function Logo() {
  return (
    <img src={jiblogo.src} alt="JibID Logo" className="w-full md:w-24 lg:w-32"/>
  );
}