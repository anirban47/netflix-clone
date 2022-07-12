import React from 'react'
import {Feature, OptForm} from '../components';
import AccordionContainer from '../containers/accordion';
import FooterContainer from '../containers/footer';
import JumbotronContainer from '../containers/jumbotron';
import HeaderContainer from '../containers/header';

export default function Home() {
    return <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
                <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
                <OptForm>
                    <OptForm.Input placeholder="Email address"></OptForm.Input>
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break></OptForm.Break>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                </OptForm>
            </Feature>
            
        </HeaderContainer>
        <JumbotronContainer />
        <AccordionContainer />
        <FooterContainer/>
    </>
}