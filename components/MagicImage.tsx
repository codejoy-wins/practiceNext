// components/MagicImage.tsx
import Image from 'next/image';
import Link from 'next/link';

interface MagicImageProps {
  src: string;
  alt: string;
}

const MagicImage: React.FC<MagicImageProps> = ({ src, alt }) => {
  const width = 300; // specify the fixed width
  const height = 200; // specify the fixed height

  return (
    <>
    <Link href="https://www.maxjann.com">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      // Add any other default props or styles here
    />
    </Link>
  </>
  );
};

export default MagicImage;