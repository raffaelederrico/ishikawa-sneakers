'use client'
import React from 'react'

import { Category } from '../../../../payload/payload-types'
import { Checkbox } from '../../../_components/Checkbox'
import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'

const Filters = ({ categories }: { categories: Category[] }) => {
  const { categoryFilters, setCategoryFilters } = useFilter()

  const handleCategoryFilter = (categoryId: string) => {
    if (categoryFilters.includes(categoryId)) {
      setCategoryFilters(categoryFilters.filter(id => id !== categoryId))
    } else {
      setCategoryFilters([...categoryFilters, categoryId])
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
    </div>
  )
}

export default Filters
