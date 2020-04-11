import { Box, Heading } from '@chakra-ui/core'
import React from 'react'
import { ComponentLink, stringToUrl, TopNavLink } from './NavLink'

const topNavLinks = [
    'Getting Started',
    'Principles',
    'Style Props',
    'Color Mode',
    'Responsive Styles',
    'Theme',
    'Recipes',
]

const utilsNavLinks = ['useClipboard', 'useDisclosure', 'useTheme']

const NavGroupHeading = (props) => (
    <Heading
        fontSize='xs'
        color='gray.400'
        letterSpacing='wide'
        mb={2}
        textTransform='uppercase'
        {...props}
    />
)

const SideNavContainer = (props) => (
    <Box
        // position='fixed'
        // left='0'
        // width='100%'
        height='100%'
        {...props}
    />
)

const SideNav = ({ items, contentHeight = 'calc(100vh - 4rem)', ...rest }) => {
    return (
        <SideNavContainer {...rest}>
            <Box position='relative' overflowY='auto' borderRightWidth='1px'>
                <Box
                    as='nav'
                    height={contentHeight}
                    aria-label='Main navigation'
                    fontSize='sm'
                    p='6'
                >
                    <Box mb='8'>
                        {topNavLinks.map((link) => (
                            <TopNavLink key={link} href={stringToUrl(link)}>
                                {link}
                            </TopNavLink>
                        ))}
                    </Box>

                    <Box mb='10'>
                        <NavGroupHeading>Components</NavGroupHeading>
                        {items.map((link) => (
                            <ComponentLink key={link} href={stringToUrl(link)}>
                                {link}
                            </ComponentLink>
                        ))}
                    </Box>

                    <Box mb='10'>
                        <NavGroupHeading>Utilities</NavGroupHeading>
                        {utilsNavLinks.map((link) => (
                            <ComponentLink key={link} href={stringToUrl(link)}>
                                {link}
                            </ComponentLink>
                        ))}
                    </Box>
                </Box>
            </Box>
        </SideNavContainer>
    )
}

export default SideNav