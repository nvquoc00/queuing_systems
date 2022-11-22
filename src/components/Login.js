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
import background from "../images/bg-forgotpw.png";
import "./login.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEyeSlash} />;

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [hidePassword, setHidePassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }
  const togglePasswordVisiblity = () => {
    setHidePassword(hidePassword ? false : true);
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card.Img variant="top" className="logo" src={logo} alt="Logo" />
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Mật khẩu</Form.Label>
                  <div className="pass-wrapper">
                    <input
                      className="password"
                      name="password"
                      type={hidePassword ? "text" : "password"}
                      ref={passwordRef}
                    />
                    <i onClick={togglePasswordVisiblity}>{eye}</i>
                  </div>
                </Form.Group>
                <Button disabled={loading} type="submit" className="login">
                  Đăng nhập
                </Button>
              </Form>
              <div className="forgot-pw">
                <Link to="/forgot-password">Quên mật khẩu?</Link>
              </div>
            </Card.Body>

            <div>
              Tạo một tài khoản mới? <Link to="/signup">Đăng kí</Link>
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
