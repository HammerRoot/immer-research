import React from 'react'

import { VisibilityFilters } from '../config'
import VisibleItem from '../components/VisibleItem'
import './FilterVisible.css'

const FilterVisible = () => {
  return (
    <div className="filter-visible">
      展示:
      <VisibleItem filter={VisibilityFilters.SHOW_ALL}>所&nbsp;有</VisibleItem>
      <VisibleItem filter={VisibilityFilters.SHOW_COMPLETED}>已完成</VisibleItem>
      <VisibleItem filter={VisibilityFilters.SHOW_ACTIVE}>进行中</VisibleItem>
    </div>
  )
}

export default FilterVisible
