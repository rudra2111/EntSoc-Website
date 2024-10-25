import React from 'react';
import { Box, Flex, Link, HStack, Icon, Image, Text } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface NavItem {
  path: string;
  label: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About Us" },
  { path: "https://www.instagram.com/edentsoc/?hl=en", label: "Events", isExternal: true },
  { path: "/contact-us", label: "Contact Us" },
];

const Footer: React.FC = () => {
  const location = useLocation();

  const footerNavItems = navItems.filter((item) => item.path !== location.pathname);

  return (
    <Box as="footer" py={6} bg="white" mt="auto" color="#20265E">
      {/* Dynamic Footer Links */}
      <HStack justify="center" spacing={8} mb={4}>
        {footerNavItems.map((item) => (
          item.isExternal ? (
            <Link
              key={item.label}
              href={item.path}
              isExternal
              style={{
                textDecoration: 'underline',
                color: '#20265E',
                fontWeight: 'bold',
                fontSize: '1.25rem'
              }}
            >
              {item.label}
            </Link>
          ) : (
            <RouterNavLink
              key={item.label}
              to={item.path}
              style={{
                textDecoration: 'underline',
                color: '#20265E',
                fontWeight: 'bold',
                fontSize: '1.25rem'
              }}
            >
              {item.label}
            </RouterNavLink>
          )
        ))}
      </HStack>

      {/* Flex container for logos and social media icons */}
      <Flex 
        justify="space-between" 
        align="center" 
        px={{ base: 4, md: 8 }}
        mb={4}
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
      >
        {/* Left side logo */}
        <HStack spacing={4} mb={{ base: 4, md: 0 }}>
          <Image 
            src="/EntSoc_Logo.png" 
            alt="EntSoc Logo" 
            boxSize={{ base: "80px", md: "180px" }}
            objectFit="contain"
          />
        </HStack>

        {/* Center University logo */}
        <Image 
          src="/University_Logo.webp" 
          alt="University of Edinburgh" 
          boxSize={{ base: "80px", md: "180px" }}
          objectFit="contain"
        />

        {/* Right side social media icons */}
        <HStack spacing={6}>
          <Link href="https://www.instagram.com/edentsoc/" isExternal>
            <Icon as={FaInstagram} w={6} h={6} />
          </Link>
          <Link href="https://www.linkedin.com/company/edentsoc/" isExternal>
            <Icon as={FaLinkedin} w={6} h={6} />
          </Link>
        </HStack>
      </Flex>

      {/* Bottom copyright text */}
      <Box textAlign="center" borderTop="1px solid #ccc" pt={2}>
        <Text fontSize="md" color="gray.600">
          ENTSOC 2024 | Built by Rudra Jadav, Krishiv Chadha
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
