import React, { Component } from 'react'
import styles from './style'
import { withStyles } from '@material-ui/core'

import Grid from '@material-ui/core/Grid'

import TaskItem from './../TaskItem'

class TaskList extends Component {
  render() {
    const { statusList, taskList, classes } = this.props
    return (
      <Grid container spacing={2}>
        {statusList.map((status, index) => (
          <Grid item md={4} xs={12} key={index}>
            <div className={classes.LabelStatus}>{status.label}</div>
            {taskList.filter((task) => task.status === status.id).map((task, index) => {
              return <TaskItem task={task} key={index} status={status}/>
            })}
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default withStyles(styles)(TaskList)
