import React from 'react';
import ReactLoading from 'react-loading';
import { Button, Card, CardBody, CardColumns, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import { IProduct } from '../../server/db/models/Product';
import './InterestingProducts.scss';

interface IInterestingProductsState {
  products: IProduct[];
  isLoading: boolean;
}

export class InterestingProducts extends React.Component<{}, IInterestingProductsState>  {
  constructor(props: object) {
    super(props);

    this.state = {
      isLoading: false,
      products: [],
    };
  }

  public async componentDidMount () {
      this.setState({ isLoading: true });
      const response = await fetch('/api/products/interesting');
      const data = await response.json();

      this.setState({ products: data, isLoading: false });
  }

  public formatSubstring(text: string, max: number) {
    let result = text.substr(0, max);

    if (text.length > max) {
      result += '...';
    }

    return result;
  }

  public viewProduct = (url: string)  => {
    window.open(url);
  }

  public renderProducts() {
      return this.state.products.map(p => {
          return (
              <Card key={p.productId}>
                  <CardImg top width="50%"  src={p.image} alt="Card image cap" />
                  <CardBody>
                  <CardTitle>{this.formatSubstring(p.name, 80)}</CardTitle>
                  <CardSubtitle>{`$${p.price}`}</CardSubtitle>
                  <CardText>{this.formatSubstring(p.shortDescription, 120)}</CardText>
                  <Button onClick={this.viewProduct.bind(undefined, p.url) as any} >View Product</Button>
                  </CardBody>
              </Card>
          );
      });
  }

  public render() {
    return (
      <div className="InterestingProducts">
        <Container>
            {this.state.isLoading ? <ReactLoading className="spinner" type="spin" color="#6f9940" height={100} width={100} /> : 
            <React.Fragment>
              <h4>Some sustainable products that might interest you.</h4>
              <CardColumns xs="12" md="6">
                  {this.renderProducts()}
              </CardColumns>
            </React.Fragment>}
        </Container>
      </div>
    );
  }
}
