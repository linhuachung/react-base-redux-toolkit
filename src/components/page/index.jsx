import React from 'react'
import PropTypes from 'prop-types';
import { Container } from '@chakra-ui/react';

function Page({ children, ...props }) {
    return (
        <Container maxW='container.xl' minW='container.sm' {...props}>
            {children}
        </Container>
    )
}

Page.propTypes = {
    children: PropTypes.any
};

export default Page
