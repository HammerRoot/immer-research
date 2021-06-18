import React from 'react'

import { VisibilityFilters } from '../config'
import VisibleItem from '../components/VisibleItem'
import VisibleItemImmer from '../components/VisibleItemImmer'
import './FilterVisible.css'

const FilterVisible = props => {
  const Content = props.type === 'immer' ? VisibleItemImmer : VisibleItem

  return (
    <div className="filter-visible">
      展示:
      <Content filter={VisibilityFilters.SHOW_ALL}>所&nbsp;有</Content>
      <Content filter={VisibilityFilters.SHOW_COMPLETED}>已完成</Content>
      <Content filter={VisibilityFilters.SHOW_ACTIVE}>进行中</Content>
    </div>
  )
}

export default FilterVisible
