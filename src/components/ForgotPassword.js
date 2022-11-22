import React, { useRef, useState } from "react";
import {
  Form,
  Button,
  Card,
  Alert,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import logo from "../images/logo.png";
import background from "../images/bg-login.png";
import "./forgotpassword.css";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      history.push("/");
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to connect your mail");
    }

    setLoading(false);
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card.Img variant="top" className="logo" src={logo} alt="Logo" />
            <Card.Body>
              <h4 className="text-center mb-4">Đặt lại mật khẩu</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>
                    Vui lòng nhập email để đặt lại mật khẩu của bạn*
                  </Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                  {error && <Alert variant="danger">{error}</Alert>}
                  {message && <Alert variant="success">{message}</Alert>}
                </Form.Group>
                <Row>
                  <Col>
                    <Button className="w-100 cancel-button">
                      <Link to="/login">Hủy</Link>
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      disabled={loading}
                      className="w-100 next-button"
                      type="submit"
                    >
                      Tiếp tục
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
            <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
            </div>
          </Col>
          <Col xs={8}>
            <Card.Img src={background} alt="Background" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
