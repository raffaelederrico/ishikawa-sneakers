'use client'
import React from 'react'

import { Category, Product } from '../../../../payload/payload-types'
import { Checkbox } from '../../../_components/Checkbox'
import { ClickAndFit } from '../../../_components/ClickAndFit'
import { HR } from '../../../_components/HR'
import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'

const Filters = ({ categories }: { categories: Category[] }) => {
  const { categoryFilters, setCategoryFilters, sizeFilters, setSizeFilters } = useFilter()

  const sizes = Array.from({ length: 12 }, (_, i) => i + 35)

  const handleCategoryFilter = (categoryId: string) => {
    if (categoryFilters.includes(categoryId)) {
      setCategoryFilters(categoryFilters.filter(id => id !== categoryId))
    } else {
      setCategoryFilters([...categoryFilters, categoryId])
    }
  }

  const handleSizeFilter = (size: number) => {
    if (sizeFilters.includes(size)) {
      setSizeFilters(sizeFilters.filter(s => s !== size))
    } else {
      setSizeFilters([...sizeFilters, size])
    }
  }

  return (
    <div className={classes.filters}>
      <div>
        <h6 className={classes.title}>Modello</h6>
        <div className={classes.categories}>
          {categories.map(category => {
            const isSelected = categoryFilters.includes(category.id)

            return (
              <Checkbox
                key={category.id}
                label={category.title}
                isSelected={isSelected}
                value={category.id}
                onClickHandler={() => handleCategoryFilter(category.id)}
              />
            )
          })}
        </div>
      </div>
      <HR />
      <div>
        <h6 className={classes.title}>Taglia</h6>
        <div className={classes.sizes}>
          {sizes.map(size => {
            const sizeStr = size.toString()
            const isSelected = sizeFilters.includes(size)

            return (
              <ClickAndFit
                key={size}
                label={sizeStr}
                isSelected={isSelected}
                value={sizeStr}
                onClickHandler={() => handleSizeFilter(size)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Filters
