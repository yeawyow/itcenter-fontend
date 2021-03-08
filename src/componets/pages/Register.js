import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField,Button,Card,CardContent,CardMedia,Typography} from '@material-ui/core';
import {Formik, validateYupSchema} from 'formik'
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


export default function Register(props) {
  const classes = useStyles();
  
  function showForm({
values,
handleCheang,
handleSubmit,
setFieldValue,
isSubmitting

  }){
    
    return(
      <form
  
      className={classes.form}
      noValidate
      onSubmit={handleSubmit}
    >
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
       value={values.username}
       onChange={handleCheang}
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
        value={values.password}
        onChange={handleCheang}
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
  
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
  Register          </Button>
      <Button
        onClick={()=>props.history.goBack()}
        fullWidth
        size="small"
        color="primary"
      >
        Canel
      </Button>
    </form>
    )
    
  }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`${process.env.PUBLIC_URL}/images/head.jpg`}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Register
        </Typography>
        <Formik initialValues={{username:"admin",password:"1234"}} onSubmit={(values,{setSubmitting})=>{
          alert(JSON.stringify(values))
        }}>
          {
            props=> showForm(props) 
          }
        </Formik>
      </CardContent>
    </Card>
  );
}
