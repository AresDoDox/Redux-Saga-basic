import React, { Component } from 'react'
import styles from './style'
import { withStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'

import * as modalTaskActions from './../../actions/modalTask'

class TaskItem extends Component {
  onOpen = ()  => {
    const { modalTaskActionCreator } = this.props
    const { showModal, changeTitleModal } = modalTaskActionCreator
    showModal()
    changeTitleModal('Add new task')
  }

  onEdit = ()  => {
    const { modalTaskActionCreator } = this.props
    const { showModal, changeTitleModal } = modalTaskActionCreator
    showModal()
    changeTitleModal('Edit task')
  }

  render() {
    const { task, status, classes } = this.props
    return (
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={9} xs={12}>
              <Typography component="h2">{task.title}</Typography>
            </Grid>
            <Grid item md={3} xs={12} className={classes.LabelStatus}>
              {status.label}
            </Grid>
          </Grid>
          <Typography component="div">{task.content}</Typography>
        </CardContent>
        <CardActions className={classes.boxFab}>
          <Fab color="primary" size="small" aria-label="add" onClick={this.onOpen}>
            <AddIcon />
          </Fab>
          <Fab color="secondary" size="small" aria-label="edit" onClick={this.onEdit}>
            <EditIcon />
          </Fab>
        </CardActions>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    modalTask: state.modalTask
  }
}
const mapDispatchToProps = dispatch => {
  return {
    modalTaskActionCreator: bindActionCreators(modalTaskActions, dispatch)
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskItem))
