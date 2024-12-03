'use client'

import React, { createContext, ReactNode, useContext, useState } from 'react'

interface IContextType {
  categoryFilters: string[]
  setCategoryFilters: React.Dispatch<React.SetStateAction<string[]>>
  sort: string
  setSort: React.Dispatch<React.SetStateAction<string>>
  sizeFilters: string[]
  setSizeFilters: React.Dispatch<React.SetStateAction<string[]>>
}
export const INITIAL_FILTER_DATA = {
  categoryFilters: [],
  setCategoryFilters: () => [],
  sort: '',
  setSort: () => '',
  sizeFilters: [],
  setSizeFilters: () => [],
}

export const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA)

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [categoryFilters, setCategoryFilters] = useState<string[]>([])
  const [sort, setSort] = useState<string>('-createdAt')
  const [sizeFilters, setSizeFilters] = useState<string[]>([])

  return (
    <FilterContext.Provider
      value={{ categoryFilters, setCategoryFilters, sort, setSort, sizeFilters, setSizeFilters }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider')
  }
  return context
}
