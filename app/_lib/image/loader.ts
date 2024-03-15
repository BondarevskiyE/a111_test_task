import type { ImageLoaderProps } from 'next/image';

export default function imageLoader({ src }: ImageLoaderProps) {
    return `https://d2norla3tyc4cn.cloudfront.net/i/s3/${src}.webp`
}