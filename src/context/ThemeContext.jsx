import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme/media.js';
import PropTypes from 'prop-types';

export function ThemeProviderChakra({ children }) {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    );
}

ThemeProviderChakra.propTypes = {
    children: PropTypes.any
};
