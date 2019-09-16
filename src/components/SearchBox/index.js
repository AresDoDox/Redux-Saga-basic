import React, { Component } from 'react'
import styles from './style'
import { withStyles } from '@material-ui/core'

import TextField from '@material-ui/core/TextField'

class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
        autoComplete="off"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          placeholder="Nhập từ khóa"
        />
      </form>
    )
  }
}

export default withStyles(styles)(SearchBox)
