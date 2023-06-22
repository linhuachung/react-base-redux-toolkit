import React, { useContext, useState } from 'react'
import { Box } from '@chakra-ui/react';
import MenuComponent from '../../components/menu/index.jsx';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { IMAGES } from '../../theme/images.js';
import { useTranslation } from 'react-i18next';
import { LocalStore } from '../../utils/helpers/local.js';
import LanguageContext from '../../context/TranslateContext.jsx';

function Header() {
    const { i18n } = useTranslation()
    const { tHeader } = useContext(LanguageContext);
    const [language, setLanguage] = useState(LocalStore.get('language') || 'vn')

    const chooseLanguageItems = [
        {
            content: tHeader('vn'),
            image: IMAGES.VI_FLAG,
            value: 'vn'
        },
        {
            content: tHeader('en'),
            image: IMAGES.EN_FLAG,
            value: 'en'
        }
    ]

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang).then(r  => r)
        LocalStore.set('language', lang)
        setLanguage(lang)
    }

    return (
        <Box>
            <Box>
                <MenuComponent items={chooseLanguageItems} title={tHeader(`${language}`)} icon={faGlobe} onClick={handleChangeLanguage}/>
            </Box>
            <Box></Box>
        </Box>
    )
}

export default Header
