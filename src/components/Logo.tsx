import jiblogo from '@/images/logos/jibid.jpg';

interface LogoProps {
  className?: string; // Define the type for className as an optional string
}

export function Logo({ className }: LogoProps) {
  return (
    <img src={jiblogo.src} alt="JibID Logo" className={`w-full md:w-24 lg:w-32 ${className}`}/>
  );
}