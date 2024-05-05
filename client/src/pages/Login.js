import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../context/AuthContext';
import { TextField, Button, Typography, Container, Grid, Link as MuiLink, Paper } from '@material-ui/core';
import { useStyles } from '../stylesheets/LoginStyles'; // Importing styles

export default function Login() {
  const classes = useStyles(); // Applying styles
  const { loginUser } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!credentials.email || !credentials.password) {
      toast.error('Please enter all required fields');
      return;
    }

    loginUser(credentials);
  };

  return (
    <div className={classes.backgroundStyle}>
      <Container component="main" maxWidth="xs">
        <ToastContainer autoClose={2000} />
        <Paper className={classes.transparentBoxStyle} elevation={3}>
          <Typography variant="h5" align="center" gutterBottom className={classes.textStyle}>
            Login
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="emailInput"
                  label="Email address"
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                  placeholder="johndoe@example.com"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="passwordInput"
                  label="Password"
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  placeholder="Enter Password"
                  required
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" fullWidth className={classes.button}>
              Login
            </Button>
            <Typography variant="body2" className={classes.link}>
              Don't have an account? <MuiLink component={Link} to="/login">Register</MuiLink>
            </Typography>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
