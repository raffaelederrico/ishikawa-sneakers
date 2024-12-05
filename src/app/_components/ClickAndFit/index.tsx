import React, { ChangeEvent, useState } from 'react'

import classes from './index.module.scss'

interface ClickAndFitProps {
  label: string
  value: string | number
  isSelected: boolean
  onClickHandler: (value: string | number) => void
}

export const ClickAndFit: React.FC<ClickAndFitProps> = ({
  label,
  value,
  isSelected,
  onClickHandler,
}) => {
  const [isChecked, setIsChecked] = useState(isSelected)

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
    onClickHandler(value)
  }

  return (
    <label className={`${classes.clickAndFitWrapper} ${isSelected ? classes.selected : ''}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={classes.checkbox}
      />
      <span className={classes.label}>{label}</span>
    </label>
  )
}
