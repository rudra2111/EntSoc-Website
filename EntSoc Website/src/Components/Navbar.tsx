import React from 'react';
import { Box, Flex, NavLink, Image } from '@chakra-ui/react';
import { NavLink as RouterNavLink } from 'react-router-dom';

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About Us" },
  { path: "/events", label: "Events" },
  { path: "/contact-us", label: "Contact Us" },
];

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="#AFEEEE"
      color="white"
      position="fixed"
      top="0"
      width="100%"
      zIndex="1000"
    >
      <Flex align="center" mr={5}>
        <Image src="/EntSoc_Logo.png" alt="Logo" boxSize="30px" />
      </Flex>

      <Box display={{ base: 'block', md: 'flex' }} width={{ base: 'full', md: 'auto' }} alignItems="center">
        {navItems.map((item) => (
          <RouterNavLink to={item.path} key={item.label} style={({ isActive }) => ({
            padding: '0.5rem',
            backgroundColor: isActive ? 'cyan.500' : 'transparent',
            color: isActive ? 'white' : 'black',
            textDecoration: 'none'
          })}>
            {item.label}
          </RouterNavLink>
        ))}
      </Box>
    </Flex>
  );
};

export default Navbar;
