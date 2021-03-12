import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField,Button,Card,CardContent,CardMedia,Typography} from '@material-ui/core';
import * as loginActions from './../../actions/login.action'
import {useDispatch,useSelector} from 'react-redux'
import { Alert } from '@material-ui/lab';
const useStyles = makeStyles(theme=>({
  root: {
    maxWidth: 345,
  },
  media:{

    height:100
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Login(props) {
  const classes = useStyles();
const [account, setAccount] = React.useState({
  username:"",
  passwordjwt:""
})
const dispatch = useDispatch()
const loginReducer = useSelector(({ loginReducer }) => loginReducer);
  return (
  
      <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`${process.env.PUBLIC_URL}/images/head.jpg`}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Login
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={e=>{
            e.preventDefault()
           dispatch(loginActions.login({ ...account, ...props }));
           // props.history.push("/jobservice")
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
           value={account.username}
           onChange={e => {
            setAccount({
              ...account,
              username: e.target.value
            });
          }}
            id="username"
            label="Username"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={account.passwordjwt}
            onChange={e => {
              setAccount({
                ...account,
                passwordjwt: e.target.value
              });
            }}
            name="password"
            label="Password"
            type="password"
            id="passwordjwt"
            autoComplete="current-password"
          />
<Alert severity="error">This is an error alert — check it out!</Alert>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </CardContent>
    </Card>
   
  );
}
