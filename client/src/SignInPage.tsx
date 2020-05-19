import React, { FC } from 'react';
import { Page } from './Page';
import { StatusText, TestAccountHeader, TestAccountText } from './Styles';
import { useAuth } from './Auth';

type SigninAction = 'signin' | 'signin-callback';

interface Props {
  action: SigninAction;
}

export const SignInPage: FC<Props> = ({ action }) => {
  const { signIn } = useAuth();

  const HandleSignIn = () => {
    signIn();
  }

  if (action === 'signin') {
    return (
      <Page title="Sign In">
        <TestAccountHeader>Please login with the following account:</TestAccountHeader>
        <TestAccountText>Account: ryan@test.com</TestAccountText>
        <TestAccountText >Password: Pa$$w0rd</TestAccountText>
        <TestAccountText onClick={HandleSignIn}><button style={{ fontSize: "13px", marginTop: "10px" }}>Sign In</button></TestAccountText>
      </Page>
    );

    // signIn();
  }

  return (
    <Page title="Sign In">
      <StatusText>Signing in ...</StatusText>
    </Page>
  );
};
