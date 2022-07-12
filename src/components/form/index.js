import React from 'react';
import {Container, Base, Title, Error, Input, SubmitButton, Link, Text, Smalltext} from './styles/form';

export default function Form({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Form.Base = function FormBase({children, ...restProps}) {
    return <Base {...restProps}>{children}</Base>
}

Form.Title = function FormTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Form.Error = function FormError({children, ...restProps}) {
    return <Error {...restProps}>{children}</Error>
}

Form.Input = function FormInput({children, ...restProps}) {
    return <Input {...restProps}>{children}</Input>
}

Form.SubmitButton = function FormSubmitButton({children, ...restProps}) {
    return <SubmitButton {...restProps}>{children}</SubmitButton>
}

Form.Link = function FormLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Form.Text = function FormText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Form.Smalltext = function FormSmalltext({children, ...restProps}) {
    return <Smalltext {...restProps}>{children}</Smalltext>
}