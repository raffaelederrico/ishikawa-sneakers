import React, { Fragment } from 'react'

import { Category, Product } from '../../../payload/payload-types'
import { AddToCartButton } from '../../_components/AddToCartButton'
import { Gutter } from '../../_components/Gutter'
import { Price } from '../../_components/Price'
import ProductThumbs from '../../_components/ProductSwiper'

import classes from './index.module.scss'

export const ProductHero: React.FC<{
  product: Product
}> = ({ product }) => {
  const {
    title,
    categories,
    meta: { image: metaImage, description } = {},
    gallery,
    sizes,
  } = product

  return (
    <Gutter className={classes.productHero}>
      <ProductThumbs gallery={gallery} />
      <div className={classes.details}>
        <h3 className={classes.title}>{title}</h3>

        <div className={classes.categoryWrapper}>
          <div className={classes.categories}>
            {categories?.map((category, index) => {
              const { title: categoryTitle } = category as Category

              const titleToUse = categoryTitle || 'Generic'
              const isLast = index === categories.length - 1

              return (
                <p key={index} className={classes.category}>
                  {titleToUse} {!isLast && <Fragment>, &nbsp;</Fragment>}
                  <span className={classes.separator}>|</span>
                </p>
              )
            })}
          </div>
          <p className={classes.stock}>novità</p>
        </div>

        <Price product={product} button={false} />

        <div className={classes.description}>
          <h6>Description</h6>
          <p>{description}</p>
        </div>

        <AddToCartButton
          product={product}
          className={classes.addToCartButton}
          appearance="primary"
        />
      </div>
    </Gutter>
  )
}
