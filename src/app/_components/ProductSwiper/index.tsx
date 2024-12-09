'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

import { Product } from '../../../payload/payload-types'

import classes from './index.module.scss'

type Props = {
  gallery: Product['gallery']
}

const ProductThumbs: React.FC<Props> = ({ gallery }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel()
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className={classes.sliderContainer}>
      {/* Main Slider */}
      <div className={classes.mainSlider} ref={emblaMainRef}>
        <div className={classes.mainSliderContainer}>
          {gallery.map((item, index) => {
            console.log('ITEMS:\n\n', item)
            console.log('ITEMS IMAGE:\n\n', item.image)
            return (
              <div key={`main-${index}`} className={classes.mainSlide}>
                <Image
                  src={typeof item.image === 'string' ? item.image : item.image.url}
                  alt={`Slide ${index + 1}`}
                  width={800}
                  height={600}
                  className={classes.mainImage}
                  unoptimized={true}
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Thumbnail Slider */}
      <div className={classes.thumbnailSlider} ref={emblaThumbsRef}>
        <div className={classes.thumbnailSliderContainer}>
          {gallery.map((item, index) => (
            <div
              key={`thumb-${index}`}
              className={`${classes.thumbnailSlide} ${
                index === selectedIndex ? classes.selected : ''
              }`}
              onClick={() => onThumbClick(index)}
            >
              <Image
                src={typeof item.image === 'string' ? item.image : item.image.url}
                alt={`Thumbnail ${index + 1}`}
                width={120}
                height={80}
                className={classes.thumbnailImage}
                unoptimized={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductThumbs
