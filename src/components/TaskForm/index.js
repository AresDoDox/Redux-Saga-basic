import React, { Component } from 'react'
import styles from './style'
import { withStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Box from '@material-ui/core/Box'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import * as modalTaskActions from './../../actions/modalTask'

class TaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowModal: false,
      title: '',
      content: '',
      status: 0
    }
  }
  onClose = () => {
    const { modalTaskActionCreator } = this.props
    const { hideModal } = modalTaskActionCreator
    hideModal()
  }

  handleChange = (event) => {
  }

  render() {
    const { title, content, status } = this.state
    const { statusList, classes, modalTask } = this.props
    const statusListMap= statusList.map((item,index) => (
      <MenuItem value={item.id} key={index}>{item.label}</MenuItem>
    ))
    return (
      <Modal
        className={classes.Modal}
        open={modalTask.isShowModal}
        onClose={this.onClose}
      >
        <div className={classes.BoxModal}>
          <div className={classes.TitleModal}>{modalTask.title}</div>
          <form className={classes.Form} autoComplete="off">
            <TextField
              label="Title"
              className={classes.textField}
              value={title}
              onChange={(e) => {
                const value = e.target.value
                this.setState({ title: value })
              }}
              margin="normal"
              placeholder="Title"
            />
            <TextField
              label="Content"
              className={classes.textField}
              value={content}
              onChange={(e) => {
                const value = e.target.value
                this.setState({ content: value })
              }}
              margin="normal"
              placeholder="Content"
            />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="status-simple">Choose status</InputLabel>
              <Select
                value={status}
                onChange={(e) => {
                  const value = e.target.value
                  this.setState({ status: value })
                }}
                inputProps={{
                  name: 'status',
                  id: 'status-simple',
                }}
              >
                {statusListMap}
              </Select>
            </FormControl>
            <Box display="flex" justifyContent="flex-end" className={classes.BoxBtnModal}>
              <Button variant="contained" className={classes.button} onClick={this.onClose}>Cancel</Button>
              <Button variant="contained" color="primary" className={classes.button}>
                Save
              </Button>
            </Box>
          </form>
        </div>
      </Modal>
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskForm))
