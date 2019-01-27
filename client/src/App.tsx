import React, { Component } from 'react';
import { Container, Input } from 'reactstrap';
import './App.scss';
import camera from './camera.svg';
import { GBNavbar } from './GBNavbar';

class App extends Component {
  private photoInput = React.createRef<HTMLInputElement>();

  public accessCamera = () => {
    if (this.photoInput.current) {
      this.photoInput.current.click();
    }
  }

  public handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const file = Array.from(e.target.files)[0];

    const formData = new FormData();
    formData.append('file', file);

    fetch('/api/products/search/image', {
      body: formData,
      method: 'POST',
    });

  }

  public render() {
    return (
      <div className="App">
        <GBNavbar/>
        <Container>
          <div className="input-container">
            <Input placeholder="Search for a sustainable alternative..." />
            <div onClick={this.accessCamera} className="camera-input">
              <input onChange={this.handleImageUpload} ref={this.photoInput} type="file" accept="image/*" capture="camera" />
              <img src={camera} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
