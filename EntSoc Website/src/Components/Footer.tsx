import React from 'react';
import { Box, Flex, Link, HStack, Icon, Image, Text } from '@chakra-ui/react';
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
  const location = useLocation(); 

  const footerNavItems = navItems.filter((item) => item.path !== location.pathname);

  return (
    <Box as="footer" py={6} bg="white" mt="auto" color="#20265E">
      {/* Dynamic Footer Links */}
      <HStack justify="center" spacing={8} mb={4}> {/* Reduced spacing and margin */}
        {footerNavItems.map((item) => (
          <RouterNavLink
            key={item.label}
            to={item.path}
            style={{
              textDecoration: 'underline',
              color: '#20265E',
              fontWeight: 'bold',
              fontSize: '1.25rem' // Increased font size for better visibility
            }}
          >
            {item.label}
          </RouterNavLink>
        ))}
      </HStack>

      {/* Flex container for logos and social media icons */}
      <Flex 
        justify="space-between" 
        align="center" 
        px={{ base: 4, md: 8 }} // Reduced padding for a tighter layout
        mb={4} // Reduced margin for less gap between logos and links
        direction={{ base: 'column', md: 'row' }} // Stack vertically on smaller screens
        textAlign="center"
      >
        {/* Left side logo with reduced padding to prevent squishing */}
        <HStack spacing={4} mb={{ base: 4, md: 0 }}> {/* Reduced spacing */}
          <Image 
            src="/EntSoc_Logo.png" 
            alt="EntSoc Logo" 
            boxSize={{ base: "80px", md: "180px" }} // Adjusted logo size
            objectFit="contain" // Prevent squishing by maintaining aspect ratio
          />
        </HStack>

        {/* Center University logo with consistent size */}
        <Image 
          src="/University_Logo.webp" 
          alt="University of Edinburgh" 
          boxSize={{ base: "80px", md: "180px" }} // Adjusted logo size
          objectFit="contain" // Keep aspect ratio intact
        />

        {/* Right side social media icons */}
        <HStack spacing={6}> {/* Reduced spacing between icons */}
          <Link href="https://www.instagram.com/edentsoc/" isExternal>
            <Icon as={FaInstagram} w={6} h={6} /> {/* Adjusted icon size */}
          </Link>
          <Link href="https://www.linkedin.com/company/edentsoc/" isExternal>
            <Icon as={FaLinkedin} w={6} h={6} /> {/* Adjusted icon size */}
          </Link>
        </HStack>
      </Flex>

      {/* Bottom copyright text */}
      <Box textAlign="center" borderTop="1px solid #ccc" pt={2}> {/* Reduced padding */}
        <Text fontSize="md" color="gray.600"> {/* Slightly larger and darker color for readability */}
          ENTSOC 2024 | Built by Rudra Jadav, Krishiv Chadha
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
