import React, { Component } from 'react'
import styles from './style'
import { withStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import { compose } from 'redux'
import LoadingIcon from './../../assets/images/loading.gif'

class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props
    let xhtml = null
    if (showLoading) {
      xhtml = (
        <div className={classes.BoxLoading}>
          <img src={LoadingIcon} alt="loading" className={classes.imgLoading}/>
        </div>
      )
    }
    return xhtml
  }
}

const mapStateToProps = state => {
  return {
    showLoading: state.ui.showLoading
  }
}

const mapDispatchToProps = null

const withConnect =   connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withStyles(styles),
  withConnect
)(GlobalLoading)
