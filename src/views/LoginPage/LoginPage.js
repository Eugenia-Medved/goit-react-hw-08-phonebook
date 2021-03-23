import React, { Component } from 'react';
import { Button, Input, Box, FormLabel, Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container maxWidth="sm">
        <h1>Страница логина</h1>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <FormLabel>
            Почта
            <Input
              color="secondary"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </FormLabel>

          <FormLabel>
            Пароль
            <Input
              color="secondary"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </FormLabel>
          <Box m={1}>
            <Button type="submit" variant="contained" color="secondary">
              Войти
            </Button>
          </Box>
        </form>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
