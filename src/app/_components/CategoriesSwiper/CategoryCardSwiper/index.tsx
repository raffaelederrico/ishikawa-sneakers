'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Category, Media } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'

type CategoryCardProps = {
  category: Category
}

const CategoryCardSwiper = ({ category }: CategoryCardProps) => {
  const media = category.media as Media
  const { setCategoryFilters } = useFilter()

  return (
    <Link
      href="/products"
      className={classes.card}
      onClick={() => setCategoryFilters([category.id])}
    >
      <Image src={media.url} alt="category" width={250} height={60} className={classes.linkImage} />
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCardSwiper
