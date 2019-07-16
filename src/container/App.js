import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../styles/App.css';
import { BTN_TITLE, APP_TITLE, PLACEHOLDER } from '../constants';

import { AlertsList } from '../components/AlertsList';
import { withPortal } from '../components/withPortal';


export default class App extends Component {
  state = {
    alertsList: [],
    inputValue: ''
  };

  textInput = React.createRef();

  onChange = e => {
    this.setState({ inputValue: e.target.value })
  };

  onClick = () => {
    this.setState(state => ({
      alertsList: [...state.alertsList, state.inputValue],
      inputValue: ''
    }));
    this.textInput.current.focus();
  };

  render() {
    const { inputValue, alertsList } = this.state;
    const portal = document.getElementById('portal');

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            {APP_TITLE}
          </h1>
          <input
            type="text"
            className="App-input"
            placeholder={PLACEHOLDER}
            ref={this.textInput}
            value={inputValue}
            onChange={this.onChange}
            autoFocus
          />
          <button
            className="App-btn"
            onClick={this.onClick}
            disabled={!inputValue}
          >
            {BTN_TITLE}
          </button>
        </header>

        <main>
          {withPortal(portal)(<AlertsList alertsList={alertsList} />)}
        </main>
      </div>
    );
  }
}
