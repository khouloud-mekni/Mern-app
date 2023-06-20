
import React, { useState } from "react";
import {Button,Divider,Form,Grid,Segment,Icon,Checkbox,Message,} from "semantic-ui-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [value, setValue] = useState("user");
  const [errorMsg, setErrorMsg] = useState("");
  const [user, setUser] = useState({});
  console.log(user);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleUserLogin = () => {
    axios
      .post("/api/user/login", user)
      .then((res) => {
        console.log(res);
        if (res.data.status) {
          localStorage.setItem("id", res.data.data.id);
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("isBanned", res.data.data.isBanned);
          localStorage.setItem("isVerified", res.data.data.isVerified);
          localStorage.setItem("isUser", res.data.data.isUser);
          localStorage.setItem("isAdmin", res.data.data.isAdmin);
          navigate("/book");
        }
      })
      .catch((err) => {
        if (err) {
          setErrorMsg(err.response.data.error);
        }
      });
  };
  const hideMsg = () => {
    setTimeout(() => {
      setErrorMsg("");
    }, 10000);
  };
  return (
    <div className="w-[60%] mx-auto">
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form.Field>
              <Checkbox
                radio
                label="I am a user"
                name="checkboxRadioGroup"
                value="user"
                checked={value === "user"}
                onChange={(e, data) => setValue(data.value)}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label="I am an author"
                name="checkboxRadioGroup"
                value="author"
                checked={value === "author"}
                onChange={(e, data) => setValue(data.value)}
              />
            </Form.Field>
            {value === "user" ? (
              <>
                <Message header="Login as user" />
                <Form
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <Form.Input
                    icon="mail"
                    iconPosition="left"
                    label="Email"
                    placeholder="Email"
                    name="email"
                  />
                  <Form.Input
                    icon="lock"
                    iconPosition="left"
                    label="Password"
                    type="password"
                    name="password"
                  />
                  <Button
                    content="Login"
                    primary
                    onClick={() => handleUserLogin()}
                  />
                </Form>
                {errorMsg && (
                  <Message negative>
                    <Message.Header>{errorMsg}</Message.Header>
                    {hideMsg()}
                  </Message>
                )}
              </>
            ) : (
              <>
                <Message header="Login as an author" />
                <Form>
                  <Form.Input
                    icon="user"
                    iconPosition="left"
                    label="Username"
                    placeholder="Username"
                  />
                  <Form.Input
                    icon="lock"
                    iconPosition="left"
                    label="Password"
                    type="password"
                  />
                  <Button content="Login" primary />
                </Form>
              </>
            )}
          </Grid.Column>
          <Grid.Column verticalAlign="middle">
            <Button icon size="big" labelPosition="right">
              <Link to="/register" style={{ all: "unset" }}>
                Register
              </Link>
              <Icon name="signup" />
            </Button>
          </Grid.Column>
        </Grid>
        <Divider vertical>Or</Divider>
      </Segment>
    </div>
  );
}























































// import React from 'react'
// import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react' 
// function Login() {
//   return (
//     <div className="w-[70%] mx-auto">
//     <Segment placeholder>
//     <Grid columns={2} relaxed='very' stackable>
//     <Grid.Column>
//     <Form>
//     <Form.Input
//     icon='user'
//     iconPosition='left'
//     label='Username'
//     placeholder='Username'
//     />
//           <Form.Input
//             icon='lock'
//             iconPosition='left'
//             label='Password'
//             type='password'
//           />
          
//           <Button content='Login' primary />
//           </Form>
//       </Grid.Column>
      
//       <Grid.Column verticalAlign='middle'>
//       <Button content='Register' icon='signup' size='big' />
//       </Grid.Column>
//       </Grid>
      
//       <Divider vertical>Or</Divider>
//       </Segment>
//       </div>
//       )
// }

export default Login
