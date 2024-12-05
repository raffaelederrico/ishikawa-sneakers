'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import { Product } from '../../../payload/payload-types'
import { Media } from '../Media'
import { Price } from '../Price'

import classes from './index.module.scss'

const priceFromJSON = (priceJSON): string => {
  let price = ''

  if (priceJSON) {
    try {
      const parsed = JSON.parse(priceJSON)?.data[0]
      const priceValue = parsed.unit_amount
      const priceType = parsed.type
      price = `${parsed.currency === 'usd' ? '$' : ''}${(priceValue / 100).toFixed(2)}`
      if (priceType === 'recurring') {
        price += `/${
          parsed.recurring.interval_count > 1
            ? `${parsed.recurring.interval_count} ${parsed.recurring.interval}`
            : parsed.recurring.interval
        }`
      }
    } catch (e) {
      console.error(`Cannot parse priceJSON`) // eslint-disable-line no-console
    }
  }

  return price
}

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  hideImagesOnMobile?: boolean
  title?: string
  relationTo?: 'products'
  doc?: Product
}> = props => {
  const { title: titleFromProps, doc, doc: { slug, title, meta, priceJSON } = {} } = props

  const { image: metaImage } = meta || {}

  const titleToUse = titleFromProps || title
  const href = `/products/${slug}`

  const [
    price, // eslint-disable-line no-unused-vars
    setPrice,
  ] = useState(() => priceFromJSON(priceJSON))

  useEffect(() => {
    setPrice(priceFromJSON(priceJSON))
  }, [priceJSON])

  return (
    <Link href={href} className={classes.card}>
      <div className={classes.mediaWrapper}>
        {!metaImage && <div className={classes.placeholder}>No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media imgClassName={classes.image} resource={metaImage} fill />
        )}
      </div>
      <div className={classes.bottomBackground}>
        <div className={classes.title}>{titleToUse}</div>
        <div className={classes.price}>{doc && <Price product={doc} />}</div>
      </div>
    </Link>
  )
}
