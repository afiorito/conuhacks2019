import React from 'react';
import ReactLoading from 'react-loading';
import { Button, Card, CardBody, CardColumns, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import { IProduct } from '../../server/db/models/Product';
import './InterestingProducts.scss';

interface IRelevantProductsProps {
    category: string | null;
    products: IProduct[] | null;
    isLoading: boolean;
}

export class RelevantProducts extends React.Component<IRelevantProductsProps>  {
  constructor(props: IRelevantProductsProps) {
    super(props);
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
      return this.props.products!.map(p => {
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
            {this.props.isLoading && <ReactLoading className="spinner" type="spin" color="#6f9940" height={100} width={100} />} 
            {!this.props.isLoading && this.props.products!.length > 0 ? <React.Fragment>
              <h4>Sustainable {this.props.category}</h4>
              <CardColumns xs="12" md="6">
                  {this.renderProducts()}
              </CardColumns>
            </React.Fragment> : !this.props.isLoading && <div className="not-found">No products found.</div>}
        </Container>
      </div>
    );
  }
}
