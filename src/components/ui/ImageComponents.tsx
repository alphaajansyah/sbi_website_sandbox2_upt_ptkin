'use client';

import React from 'react';


// ─── Shared types ────────────────────────────────────────────────────────────

interface BaseImageProps {
  src?: string;
  alt?: string;
  caption?: string;
  objectPosition?: string;
  className?: string;
  priority?: boolean;
}

// ─── Upload placeholder ───────────────────────────────────────────────────────

function UploadPlaceholder({ caption, className = '' }: { caption?: string; className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 w-full h-full ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(26,58,42,0.07) 0%, rgba(26,58,42,0.04) 100%)',
        border: '1.5px dashed rgba(26,58,42,0.18)',
        borderRadius: 'inherit',
      }}
    >
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="7" width="30" height="22" rx="3" stroke="rgba(26,58,42,0.25)" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="15" r="3" stroke="rgba(184,150,60,0.5)" strokeWidth="1.5" fill="none" />
        <path d="M3 22l8-6 6 5 5-4 11 8" stroke="rgba(26,58,42,0.2)" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        <path d="M18 3v8M15 6l3-3 3 3" stroke="rgba(184,150,60,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span
        className="text-xs font-semibold uppercase tracking-widest"
        style={{ color: 'rgba(26,58,42,0.35)' }}
      >
        Upload Foto
      </span>
      {caption && (
        <span
          className="text-xs text-center px-4 leading-relaxed"
          style={{ color: 'rgba(26,58,42,0.3)' }}
        >
          {caption}
        </span>
      )}
    </div>
  );
}

// ─── ProgrammeImage ───────────────────────────────────────────────────────────
// General-purpose editorial image with 4:3 default ratio

interface ProgrammeImageProps extends BaseImageProps {
  aspectRatio?: '4/3' | '16/9' | '16/7' | '4/5' | '1/1' | '3/2';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  hover?: boolean;
}

export function ProgrammeImage({
  src,
  alt = '',
  caption,
  objectPosition = 'center',
  className = '',
  priority = false,
  aspectRatio = '4/3',
  rounded = 'xl',
  hover = false,
}: ProgrammeImageProps) {
  const ratioMap: Record<string, string> = {
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-[16/9]',
    '16/7': 'aspect-[16/7]',
    '4/5': 'aspect-[4/5]',
    '1/1': 'aspect-square',
    '3/2': 'aspect-[3/2]',
  };
  const roundedMap: Record<string, string> = {
    sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl', '2xl': 'rounded-2xl',
  };

  return (
    <figure className={`w-full ${className}`}>
      <div
        className={`relative overflow-hidden ${ratioMap[aspectRatio]} ${roundedMap[rounded]} ${hover ? 'group' : ''}`}
        style={{ background: 'rgba(26,58,42,0.05)' }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${hover ? 'group-hover:scale-105' : ''}`}
            style={{ objectPosition }}
          />
        ) : (
          <UploadPlaceholder />
        )}
      </div>
      {caption && (
        <figcaption
          className="mt-3 text-xs leading-relaxed text-center px-2"
          style={{ color: 'var(--ink-soft)' }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── PhotoFrame ───────────────────────────────────────────────────────────────
// Framed editorial image with optional gold accent border

interface PhotoFrameProps extends BaseImageProps {
  aspectRatio?: '4/3' | '16/9' | '4/5' | '1/1';
  accent?: boolean;
}

export function PhotoFrame({
  src,
  alt = '',
  caption,
  objectPosition = 'center',
  className = '',
  priority = false,
  aspectRatio = '4/3',
  accent = true,
}: PhotoFrameProps) {
  const ratioMap: Record<string, string> = {
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-[16/9]',
    '4/5': 'aspect-[4/5]',
    '1/1': 'aspect-square',
  };

  return (
    <figure className={`w-full ${className}`}>
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          border: accent ? '1px solid rgba(184,150,60,0.25)' : '1px solid rgba(168,176,154,0.2)',
          boxShadow: '0 8px 32px rgba(26,58,42,0.10)',
        }}
      >
        <div className={`relative ${ratioMap[aspectRatio]}`} style={{ background: 'rgba(26,58,42,0.05)' }}>
          {src ? (
            <img
              src={src}
              alt={alt}
              loading={priority ? 'eager' : 'lazy'}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition }}
            />
          ) : (
            <UploadPlaceholder />
          )}
        </div>
        {accent && (
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
          />
        )}
      </div>
      {caption && (
        <figcaption
          className="mt-3 text-xs leading-relaxed px-1"
          style={{ color: 'var(--ink-soft)' }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── ImageFeature ─────────────────────────────────────────────────────────────
// Wide feature/banner image (16:7 ratio by default)

interface ImageFeatureProps extends BaseImageProps {
  aspectRatio?: '16/7' | '16/9' | '21/9';
  overlay?: boolean;
  overlayText?: string;
  objectFit?: 'cover' | 'contain';
}

export function ImageFeature({
  src,
  alt = '',
  caption,
  objectPosition = 'center',
  className = '',
  priority = false,
  aspectRatio = '16/7',
  overlay = false,
  overlayText,
  objectFit = 'cover',
}: ImageFeatureProps) {
  const ratioMap: Record<string, string> = {
    '16/7': 'aspect-[16/7]',
    '16/9': 'aspect-[16/9]',
    '21/9': 'aspect-[21/9]',
  };

  return (
    <figure className={`w-full ${className}`}>
      <div
        className={`relative overflow-hidden rounded-2xl ${ratioMap[aspectRatio]}`}
        style={{ background: 'rgba(26,58,42,0.05)' }}
      >
        {src ? (
          <>
            <img
              src={src}
              alt={alt}
              loading={priority ? 'eager' : 'lazy'}
              className={`absolute inset-0 w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}`}
              style={{ objectPosition }}
            />
            {overlay && (
              <div
                className="absolute inset-0 flex items-end p-8"
                style={{ background: 'linear-gradient(0deg, rgba(15,35,24,0.75) 0%, transparent 60%)' }}
              >
                {overlayText && (
                  <p className="text-white text-base md:text-lg font-semibold leading-snug max-w-2xl">
                    {overlayText}
                  </p>
                )}
              </div>
            )}
          </>
        ) : (
          <UploadPlaceholder caption={caption} />
        )}
      </div>
      {caption && src && (
        <figcaption
          className="mt-3 text-xs leading-relaxed text-center"
          style={{ color: 'var(--ink-soft)' }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── PhotoStrip ───────────────────────────────────────────────────────────────
// Horizontal strip of 2–3 equal images

interface PhotoStripItem {
  src?: string;
  alt?: string;
  caption?: string;
}

interface PhotoStripProps {
  images: PhotoStripItem[];
  className?: string;
  objectPosition?: string;
}

export function PhotoStrip({ images, className = '', objectPosition = 'center' }: PhotoStripProps) {
  const clamped = images.slice(0, 3);
  return (
    <div className={`grid gap-3 ${clamped.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} ${className}`}>
      {clamped.map((img, i) => (
        <figure key={i} className="w-full">
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-xl"
            style={{ background: 'rgba(26,58,42,0.05)' }}
          >
            {img.src ? (
              <img
                src={img.src}
                alt={img.alt ?? ''}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                style={{ objectPosition }}
              />
            ) : (
              <UploadPlaceholder />
            )}
          </div>
          {img.caption && (
            <figcaption
              className="mt-2 text-xs text-center leading-relaxed"
              style={{ color: 'var(--ink-soft)' }}
            >
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

// ─── ImpactGallery ────────────────────────────────────────────────────────────
// Asymmetric photo grid: 1 large + up to 3 small

interface ImpactGalleryItem {
  src?: string;
  alt?: string;
  caption?: string;
  category?: string;
}

interface ImpactGalleryProps {
  images: ImpactGalleryItem[];
  className?: string;
}

export function ImpactGallery({ images, className = '' }: ImpactGalleryProps) {
  const allImages = images.slice(0, 4);
  const large = allImages[0];
  const smallItems = allImages.slice(1, 4);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}>
      {/* Large image — spans 2 cols on md */}
      <div className="md:col-span-2">
        <figure className="w-full h-full">
          <div
            className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[220px] overflow-hidden rounded-2xl group"
            style={{ background: 'rgba(26,58,42,0.05)' }}
          >
            {large?.src ? (
              <img
                src={large.src}
                alt={large.alt ?? ''}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <UploadPlaceholder />
            )}
            {large?.category && (
              <div className="absolute bottom-4 left-4">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{
                    background: 'rgba(15,35,24,0.75)',
                    color: 'var(--gold)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(184,150,60,0.3)',
                  }}
                >
                  {large.category}
                </span>
              </div>
            )}
          </div>
          {large?.caption && (
            <figcaption className="mt-2 text-xs" style={{ color: 'var(--ink-soft)' }}>
              {large.caption}
            </figcaption>
          )}
        </figure>
      </div>

      {/* Small images — stacked */}
      <div className="flex flex-col gap-4">
        {smallItems.map((img, i) => (
          <figure key={i} className="flex-1">
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-xl group"
              style={{ background: 'rgba(26,58,42,0.05)', minHeight: '120px' }}
            >
              {img.src ? (
                <img
                  src={img.src}
                  alt={img.alt ?? ''}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <UploadPlaceholder />
              )}
              {img.category && (
                <div className="absolute bottom-2 left-2">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-full"
                    style={{
                      background: 'rgba(15,35,24,0.75)',
                      color: 'var(--gold)',
                      backdropFilter: 'blur(8px)',
                      fontSize: '10px',
                    }}
                  >
                    {img.category}
                  </span>
                </div>
              )}
            </div>
            {img.caption && (
              <figcaption className="mt-1.5 text-xs" style={{ color: 'var(--ink-soft)' }}>
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
