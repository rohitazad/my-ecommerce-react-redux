import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ProductListItem.scss";
import SingleProductComponent from "../SingleProductComponent";

const ProductListItemComponents = ({products, category}) => {
  return (
        <div className="productSection">
          <Container>
            <Row>
              <Col>
                <div className="wrapTitle">
                  <h3 className="sectionTitle">{category}</h3>
                </div>
                <div className='productLists'>
                {
                  products.map(product => {
                    let discountedPrice = (product.price) - (product.price * (product.discountPercentage / 100));

                    return (
                      <SingleProductComponent key={product.id} product={{...product, discountedPrice}} />
                    )
                  })
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default ProductListItemComponents