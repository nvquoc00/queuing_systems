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
import { useHistory } from "react-router-dom";
import logo from "../images/logo.png";
import background from "../images/bg-login.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eyeUp = <FontAwesomeIcon icon={faEyeSlash} />;
const eyeDown = <FontAwesomeIcon icon={faEyeSlash} />;

export default function Dashboard() {
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [hidePassword, setHidePassword] = useState(false);
  const [hidePasswordConfirm, setHidePasswordConfirm] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }
  const togglePasswordVisiblity = () => {
    setHidePassword(hidePassword ? false : true);
  };
  const togglePasswordConfirmVisiblity = () => {
    setHidePasswordConfirm(hidePasswordConfirm ? false : true);
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card.Img variant="top" className="logo" src={logo} alt="Logo" />
            <Card.Body>
              <h4 className="text-center mb-4">Đặt lại mật khẩu mới</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group id="password">
                  <Form.Label>Mật khẩu</Form.Label>

                  <div className="pass-wrapper-update">
                    <input
                      className="password"
                      name="password"
                      type={hidePassword ? "text" : "password"}
                      ref={passwordRef}
                    />
                    <i onClick={togglePasswordVisiblity}>{eyeUp}</i>
                  </div>
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Nhập lại mật khẩu</Form.Label>

                  <div className="pass-wrapper-update-confirm">
                    <input
                      className="password"
                      name="password"
                      type={hidePasswordConfirm ? "text" : "password"}
                      ref={passwordConfirmRef}
                    />
                    <i onClick={togglePasswordConfirmVisiblity}>{eyeDown}</i>
                  </div>
                </Form.Group>
                {error && <Alert variant="danger">{error}</Alert>}
                <Button
                  disabled={loading}
                  className="w-50 next-button"
                  type="submit"
                >
                  Xác nhận
                </Button>
              </Form>
            </Card.Body>
          </Col>
          <Col xs={8}>
            <Card.Img src={background} alt="Background" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
