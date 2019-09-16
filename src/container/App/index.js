import React, { Component } from 'react'
import styles from './style'
import { withStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

import TaskList from './../../components/TaskList'
import TaskForm from './../../components/TaskForm'
import GlobalLoading from './../../components/GlobalLoading'
import SearchBox from './../../components/SearchBox'

import * as taskActions from './../../actions/task'
import * as modalTaskActions from './../../actions/modalTask'

const statusList = [
  {
    id: 0,
    label: 'READY'
  },
  {
    id: 1,
    label: 'PROGRESS'
  },
  {
    id: 2,
    label: 'COMLETED'
  }
]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
  }

  componentDidMount(){
    const { taskActionCreator } = this.props
    const { fetchListTask } = taskActionCreator
    fetchListTask()
  }

  onOpen = ()  => {
    const { modalTaskActionCreator } = this.props
    const { showModal, changeTitleModal } = modalTaskActionCreator
    showModal()
    changeTitleModal('Add new task')
  }

  onClose = () => {
    this.setState({
      open: false
    })
  }

  handleChange = (e) => {
    const keyword = e.target.value
    const { taskActionCreator } = this.props
    const { filterTask } = taskActionCreator
    filterTask(keyword)
  }

  render() {
    const { classes, tasks } = this.props
    return (
      <div className={classes.App}>
        <GlobalLoading />
        <ToastContainer />
        <Button variant="contained" color="primary" className={classes.Button} onClick={this.onOpen}>
          <AddIcon />
          Add new task
        </Button>
        <SearchBox handleChange={this.handleChange} />
        <TaskForm open={this.state.open} onClose={this.onClose} statusList={statusList} />
        <TaskList statusList={statusList} taskList={tasks}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.listTask
  }
}
const mapDispatchToProps = dispatch => {
  return {
    taskActionCreator: bindActionCreators(taskActions, dispatch),
    modalTaskActionCreator: bindActionCreators(modalTaskActions, dispatch)
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(App))
