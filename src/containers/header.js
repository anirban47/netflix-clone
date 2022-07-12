import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes'

export default function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src="/images/icons/logo.png" alt="Netflix"></Header.Logo>
                <Header.Button to={ROUTES.SIGN_IN}>Sign in</Header.Button>
            </Header.Frame>
            {children}
        </Header>
    )
}