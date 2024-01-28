'use client'

import NextImage from 'next/image'
import { useState } from 'react'
import { tv } from 'tailwind-variants'

const content = tv({
  base: 'transition-all duration-700 ease-in-out',
  variants: {
    status: {
      ready: 'blur-0',
      blur: 'blur-2xl',
    },
  },
  defaultVariants: {
    status: 'ready',
  },
})

interface ImageProps {
  image: string
  className?: string
  alt?: string
  width?: number
  height?: number
}

export function Image({ image, alt, className, width, height }: ImageProps) {
  const [isLoading, setLoading] = useState<'ready' | 'blur'>('blur')

  return (
    <NextImage
      src={image}
      alt={alt || ''}
      width={width}
      height={height}
      placeholder="blur"
      onLoad={() => setLoading('ready')}
      blurDataURL={`/_next/image?url=${image}&w=16&q=1`}
      className={content({ status: isLoading, className })}
    />
  )
}
