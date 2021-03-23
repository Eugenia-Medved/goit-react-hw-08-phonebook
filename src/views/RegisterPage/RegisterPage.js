import React, { Component } from 'react';
import { Button, Input, Box, FormLabel, Container } from '@material-ui/core';

import { connect } from 'react-redux';

import { authOperations } from '../../redux/auth';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Container maxWidth="sm">
        <h1>Страница регистрации</h1>

        <form autoComplete="off" onClick={this.handleSubmit}>
          <Box display="flex">
            <Box m={1}>
              <FormLabel>Имя</FormLabel>
            </Box>
            <Box width="400">
              <Input
                color="secondary"
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </Box>
            <Box m={1}>
              <FormLabel>Почта</FormLabel>
            </Box>
            <Box width="400">
              <Input
                color="secondary"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </Box>
            <Box m={1}>
              <FormLabel>Пароль</FormLabel>
            </Box>
            <Box width="400">
              <Input
                color="secondary"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </Box>
          </Box>
          <Box m={1}>
            <Button type="submit" variant="contained" color="secondary">
              Зарегистрироваться
            </Button>
          </Box>
        </form>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
