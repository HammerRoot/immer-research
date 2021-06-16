import React from 'react'
import { connect } from 'react-redux'

import { setVisibilityFilter } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
})

const VisibleItem = ({ children, onClick, active }) => {
  return (
    <button onClick={onClick} style={{ background: active ? '#177ddc' : '#909399' }}>
      {children}
    </button>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleItem)
