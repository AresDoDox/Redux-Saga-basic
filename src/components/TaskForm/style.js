const styles = theme => ({
  Modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TitleModal:{
    fontSize: 20,
    fontWeight: 400
  },
  BoxModal: {
    width: 500,
    padding: theme.spacing(3),
    borderRadius: 8,
    background: '#fff',
    boxShadow: theme.shadows[5],
    outline: 'none'
  },
  Form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    marginTop: theme.spacing(3)
  },
  BoxBtnModal: {
    marginTop: theme.spacing(3)
  },
  button: {
    marginLeft: theme.spacing(2)
  }
})

export default styles
