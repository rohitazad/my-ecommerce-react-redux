import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import {
  getUserDetails,
  fetchAsyncUserCartDetails,
  getUserCartDetails,
  clearUser
} from "../../Store/userSlice";
import { useNavigate, Link } from "react-router-dom";
import "./User.scss";
const UserContainer = () => {
  const userDetails = useSelector(getUserDetails);
  const userCartDetails = useSelector(getUserCartDetails);
  const dispatch = useDispatch();
  //console.log('userDetails',userDetails)
  console.log("userCartDetails", userCartDetails);
  const navigate = useNavigate();
  const goLoginPage = () => {
    if (userDetails && userDetails.id && userDetails.id !== "") {
      dispatch(fetchAsyncUserCartDetails(userDetails.id));
    } else {
      navigate("/login");
    }
  };
  const logoutHandler = ()=>{
        dispatch(clearUser())
  }
  useEffect(() => {
    goLoginPage();
    // eslint-disable-next-line
  }, [userDetails]);
  return (
    <>
      <Container className="userWrap">
        <Row>
          <Col>
            <Card>
              <Card.Img
                className="userPic"
                variant="top"
                src={userDetails.image}
              />
              <Card.Body>
                <Card.Title>{userDetails.firstName}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  First Name :- {userDetails.firstName}
                </ListGroup.Item>
                <ListGroup.Item>
                  Last Name :- {userDetails.lastName}
                </ListGroup.Item>
                <ListGroup.Item>Sex :- {userDetails.gender}</ListGroup.Item>
                <ListGroup.Item>
                    <Button variant="danger" onClick={logoutHandler}>LogOut</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row className="userOrderWrap">
          <Col>
            <h4>My Previews order :- </h4>

            {userCartDetails &&
            userCartDetails.length > 0 &&
            userCartDetails[0].products &&
            userCartDetails[0].products.length > 0
              ? userCartDetails[0].products.map((cartItem) => {
                  return (
                    <Card key={cartItem.id}>
                      <Card.Body>
                        <Card.Title>
                            <Link to={`/product/${cartItem.id}`}>
                                Title : - {cartItem.title}
                            </Link>
                        </Card.Title>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                          Quantity :- {cartItem.quantity}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Price :- {cartItem.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          DiscountPercentage :- {cartItem.discountPercentage} %
                        </ListGroup.Item>
                        <ListGroup.Item>
                          DiscountedPrice :- {cartItem.discountedPrice}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Total :- {cartItem.total}
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  );
                })
              : "Not product found"}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserContainer;
