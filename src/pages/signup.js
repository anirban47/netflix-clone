import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from '../context/firebase';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import {Form} from '../components';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || emailAddress === '' || password === '';

    const handleSignUp = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                result.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random()*5) + 1,
                }).then(() => {
                    history.push(ROUTES.BROWSE)
                })
            })
            .catch((error) => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Title>Sign Up</Form.Title>
                            {error && <Form.Error>{error}</Form.Error>}
                            <Form.Input 
                                placeholder="First name" 
                                value={firstName} 
                                onChange={({target})=> setFirstName(target.value)}
                            />
                            <Form.Input 
                                placeholder="Email address" 
                                value={emailAddress} 
                                onChange={({target})=> setEmailAddress(target.value)}
                            />
                            <Form.Input 
                                placeholder="Password" 
                                type="password" 
                                value={password}
                                onChange={({target}) => setPassword(target.value)}
                            />
                            <Form.SubmitButton disabled={isInvalid} type="submit">Sign Up</Form.SubmitButton>
                            <Form.Text>
                                Already a user?
                                 <Form.Link to="/signin"> Sign in now.</Form.Link>
                            </Form.Text>
                            <Form.Smalltext>This page is protected by Google reCaptcha.</Form.Smalltext>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    ); 
}