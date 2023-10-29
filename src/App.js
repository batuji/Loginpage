import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import leftImage from "../src/download.jpg";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 100px solid #ccc; /* Set the border color here */
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const StyledForm = styled.form`
  width: 300px;

  flex-direction: column;

  padding: 20px;

  background-color: #fff;
`;
const PrivacyPolicyLink = styled.a`
  color: blue; /* Set the initial color of the link */
  text-decoration: none; /* Remove underline from the link */

  &:hover {
    color: green; /* Change text color to red when hovered */
  }
`;
const Heading1 = styled.h1`
  color: white; // Change the text color
  font-size: 1em; // Change the font size
  background-color: skyblue;
  text-align: left; // Center align the text
`;

const Heading2 = styled.h2`
  color: black;
  font-size: 2.5em;
  margin-button: 20px;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const FormContainer = styled.form`
  width: 300px;

  flex-direction: column;
  border: 2px solid #ccc; /* Set the border color here */
  padding: 20px;

  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 90vh;
`;

const Button = styled.button`
  padding: 10px;
  background-color: CornflowerBlue; /* Change the background color of the button */
  color: white; /* Change the text color of the button */

  &:hover {
    color: white; /* Change text color to red when hovered */
    background-color: skyblue; /* Change background color when hovered */
  }
`;

const Heading = styled.h1`
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
`;

const Link1 = styled.a`
  margin-top: 20px;
  color: black;
  font-weight: bold; /* Make the links bold */
  &:hover {
    color: green; /* Change text color to red when hovered */
  }
`;

const Link = styled.a`
  margin-top: 20px;
  color: black;
  font-weight: bold; /* Make the links bold */

  &:hover {
    color: red;
  }
`;

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handlePrivacyPolicyChange = (event) => {
    setPrivacyPolicyChecked(event.target.checked);
  };

  return (
    <div className="login">
      <Heading1>Login Page</Heading1>
      <Container>
        <ImageContainer>
          <Image src={leftImage} alt="Left" />
        </ImageContainer>

        <FormContainer>
          <CenteredContainer>
            <StyledForm>
              <Heading2>Login</Heading2>
              <Form>
                <TextField type="text" placeholder="Username" />
                <TextField
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checkbox={privacyPolicyChecked}
                      onChange={handlePrivacyPolicyChange}
                      color="primary"
                    />
                  }
                  label={
                    <span>
                      I agree to{" "}
                      <PrivacyPolicyLink href="URL_TO_PRIVACY_POLICY">
                        Privacy Policy
                      </PrivacyPolicyLink>
                    </span>
                  }
                />

                <Button type="submit">Login</Button>
                <Link href="#">Change Password</Link>

                <Link href="#"> Don't have an account?Register here</Link>
              </Form>
            </StyledForm>
          </CenteredContainer>
        </FormContainer>
      </Container>
    </div>
  );
}

export default App;
