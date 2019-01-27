import React from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { IProduct } from '../../server/db/models/Product';
import './InterestingProducts.scss';

interface IInterestingProductsState {
  products: IProduct[];
}

export class InterestingProducts extends React.Component<{}, IInterestingProductsState>  {
  constructor(props: object) {
    super(props);

    this.state = {
      products: []
    };
  }

  public async componentDidMount () {
      const response = await fetch('/api/products/interesting');
      const data = await response.json();

      this.setState({ products: data });
  }

  public renderProducts() {
      return this.state.products.map(p => {
          return (
            <Card>
                <CardImg top width="100%" src={p.image} alt="Card image cap" />
                <CardBody>
                <CardTitle>{p.name}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
          );
      });
  }

  public render() {
    return (
      <div className="InterestingProducts">
        {this.renderProducts()}
      </div>
    );
  }
}
