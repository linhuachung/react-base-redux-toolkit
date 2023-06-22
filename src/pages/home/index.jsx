import React, { useContext, useEffect } from 'react'
import Page from '../../components/page/index.jsx';
import LanguageContext from '../../context/TranslateContext.jsx';
import { Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { GetListProducts } from '../../store/reducer/Product/action.js';

function Home() {
    const { tMessage } = useContext(LanguageContext);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetListProducts())
    }, [dispatch])
    return (
        <Page height={'100vh'}>
            <Box>
                {tMessage('hello_word')}
            </Box>
        </Page>
    )
}

export default Home
