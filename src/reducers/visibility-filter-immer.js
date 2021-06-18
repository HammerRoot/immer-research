import produce from 'immer'

import { VisibilityFilters } from '../config'

const visibilityFilterImmer = produce(
  (draft, action) => {
    if (action.type === 'SET_VISIBILITY_FILTER_IMMER') {
      draft.filter = action.filter
    }
  },
  {
    filter: VisibilityFilters.SHOW_ALL,
  }
)

export default visibilityFilterImmer
