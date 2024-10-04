import React from 'react';
import { Box, Flex, Link, HStack, Icon } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'; // To check the current path
import { NavLink as RouterNavLink } from 'react-router-dom';

interface NavItem {
  path: string;
  label: string;
}

const navItems: NavItem[] = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About Us" },
  { path: "/events", label: "Events" },
  { path: "/contact-us", label: "Contact Us" },
];

const Footer: React.FC = () => {
  const location = useLocation(); // Get the current path

  // Filter out the current page from the footer links
  const footerNavItems = navItems.filter((item) => item.path !== location.pathname);

  return (
    <Box as="footer" py={10} textAlign="center" bg="white" mt="auto">
      {/* Social Media Icons */}
      <HStack justify="center" spacing={6} mb={4}>
        <Link href="https://www.instagram.com/edentsoc/" isExternal>
          <Icon as={FaInstagram} w={6} h={6} />
        </Link>
        <Link href="https://www.linkedin.com/company/edentsoc/" isExternal>
          <Icon as={FaLinkedin} w={6} h={6} />
        </Link>
      </HStack>

      {/* Dynamic Footer Links */}
      <HStack justify="center" spacing={12}>
        {footerNavItems.map((item) => (
          <RouterNavLink
            key={item.label}
            to={item.path}
            style={{
              textDecoration: 'underline',
              color: 'red.500',
              fontWeight: 'bold',
            }}
          >
            {item.label}
          </RouterNavLink>
        ))}
      </HStack>
    </Box>
  );
};

export default Footer;
