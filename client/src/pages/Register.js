import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../context/AuthContext';
import { TextField, Button, Typography, Container, Grid, Link as MuiLink, Paper } from '@material-ui/core';
import { useStyles } from '../stylesheets/RegisterStyles'; // Importing styles

export default function Register() {
  const classes = useStyles(); // Applying styles
  const { registerUser } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!credentials.email || !credentials.password || !credentials.confirmPassword) {
      toast.error('Please enter all required fields');
      return;
    }

    if (credentials.password !== credentials.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    const userData = { ...credentials, confirmPassword: undefined };
    registerUser(userData);
  };

  return (
    <div className={classes.backgroundStyle}>
      <Container component="main" maxWidth="xs">
        <ToastContainer autoClose={2000} />
        <Paper className={classes.transparentBoxStyle} elevation={3}>
          <Typography variant="h5" align="center" gutterBottom className={classes.textStyle}>
            Register
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="nameInput"
                  label="Your Name"
                  type="text"
                  name="name"
                  value={credentials.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
              </Grid>
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
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={credentials.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm Password"
                  required
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" fullWidth className={classes.button}>
              Register
            </Button>
            <Typography variant="body2" className={classes.link}>
              Already have an account? <MuiLink component={Link} to="/login">Login</MuiLink>
            </Typography>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
