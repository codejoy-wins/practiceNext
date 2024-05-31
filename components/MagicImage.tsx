// components/MagicImage.tsx
import Image from 'next/image';
import Link from 'next/link';

interface MagicImageProps {
  src: string;
  alt: string;
  url?: string;
}

const MagicImage: React.FC<MagicImageProps> = ({ src, alt, url }) => {
  const width = 300; // specify the fixed width
  const height = 200; // specify the fixed height

  return (
    <div className='pikachu'>
      {url ? (
        <Link href={url}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
        </Link>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      )}
    </div>
  );
};

export default MagicImage;