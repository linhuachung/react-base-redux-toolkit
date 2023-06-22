import React from 'react'
import { createStandaloneToast } from '@chakra-ui/react';
import { TOAST_POSITION } from './toast-message.js';

const { toast } = createStandaloneToast()

function Toast(title, status, position = TOAST_POSITION.top, duration = 4000, isClosable = true) {
    toast({
        title,
        status,
        position,
        variant: 'left-accent',
        duration,
        isClosable
    })
}

export default Toast
