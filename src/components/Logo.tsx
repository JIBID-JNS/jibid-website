import jiblogo from '@/images/logos/jibid.jpg';

interface LogoProps {
  className?: string; // Define the type for className as an optional string
}

export function Logo({ className }: LogoProps) {
  return (
    <img src={jiblogo.src} alt="JibID Logo" className={`${className}`}/>
  );
}