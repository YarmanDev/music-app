import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const Image = (props: ImageProps) => {
  const { src, alt, className } = props;
  return <img className={className} src={src} alt={alt} />;
};
