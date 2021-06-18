import React from 'react'
import { connect } from 'react-redux'

import { setVisibilityFilterImmer } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilterImmer.filter,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilterImmer(ownProps.filter)),
})

const VisibleItemImmer = ({ children, onClick, active }) => {
  return (
    <button onClick={onClick} style={{ background: active ? '#177ddc' : '#909399' }}>
      {children}
    </button>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleItemImmer)
