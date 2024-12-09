'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Media } from '../../../../payload/payload-types'

import classes from './index.module.scss'

const ProductSwiperImage = ({ image }: { image: string | Media }) => {
  return (
    <Image
      src={typeof image === 'string' ? image : ' '}
      alt="Logo"
      width={250}
      height={23}
      unoptimized={true}
    />
  )
}

export default ProductSwiperImage
