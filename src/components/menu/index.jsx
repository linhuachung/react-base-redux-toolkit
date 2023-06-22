import React from 'react'
import { Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { COLORS } from '../../theme/colors.js';

function MenuComponent({ items, title, icon, onClick }) {
    return (
        <Menu >
            <MenuButton>
                {icon && <FontAwesomeIcon icon={icon} style={{ color: '#000000', }}/>}{title}
            </MenuButton>
            <MenuList>
                {items && items.map((menu, index) => {
                    return (
                        <MenuItem minH='48px' key={index} _hover={{ bg: COLORS.BLUE100 }} onClick={()=>onClick(menu.value)}>
                            {menu.image && <Image
                                src={menu.image}
                                alt='Fluffybuns the destroyer'
                                mr='12px'
                            />}
                            <span>{menu.content}</span>
                        </MenuItem>
                    )
                })}
            </MenuList>
        </Menu>
    )
}

MenuComponent.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string,
    icon: PropTypes.any,
    onClick: PropTypes.func
};

export default MenuComponent
