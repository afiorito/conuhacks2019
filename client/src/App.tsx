import React, { Component } from 'react';
import { Container, Input } from 'reactstrap';
import { IProduct } from '../../server/db/models/Product';
import './App.scss';
import camera from './camera.svg';
import { GBNavbar } from './GBNavbar';
import { InterestingProducts } from './InterestingProducts';
import { RelevantProducts } from './RelevantProducts';
import {debounce} from 'throttle-debounce';

interface IAppState {
  category: string | null;
  products: IProduct[] | null;
  isLoading: boolean;
}

class App extends Component<{}, IAppState> {
  private photoInput = React.createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);

    this.makeCall = debounce(500, this.makeCall);

    this.state = {
      isLoading: false,
      products: null,
      category: null,
    }
  }

  public accessCamera = () => {
    if (this.photoInput.current) {
      this.photoInput.current.click();
    }
  }

  public handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const file = Array.from(e.target.files)[0];

    const formData = new FormData();
    formData.append('file', file);

    this.setState({ isLoading: true });
    try {
      const response = await fetch('/api/products/search/image', {
        body: formData,
        method: 'POST',
      });
      const data = await response.json();

      this.setState({ category: data.category, products: data.products, isLoading: false });
    } catch {
      this.setState({ products: [], isLoading: false });
    }

  }

  public makeCall = async (queryString: string) => {
    if (queryString == '') {
      this.setState({
        isLoading: false,
        products: null,
        category: null,
      });
      return;
    }
    try {
      const response = await fetch('/api/products/search/text', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({queryString}) as any,
        method: 'POST',
      });
      const data = await response.json();
      console.log(response, data, this);

      this.setState({ category: data.category, products: data.products, isLoading: false });
    } catch {
      this.setState({ products: [], isLoading: false });
    }
  }

  public handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.makeCall(e.target.value);
  }

  public render() {
    const { isLoading, products, category } = this.state;
    return (
      <div className="App">
        <GBNavbar/>
        <Container>
          <div className="input-container">
            <Input onChange={this.handleSearch} placeholder="Search for a sustainable alternative..." />
            <div onClick={this.accessCamera} className="camera-input">
              <input onChange={this.handleImageUpload} ref={this.photoInput} type="file" accept="image/*" capture="camera" />
              <img src={camera} />
            </div>
          </div>
          {!isLoading && products == null ? <InterestingProducts /> : <RelevantProducts isLoading={isLoading} products={products} category={category} />}
        </Container>
      </div>
    );
  }
}

export default App;
