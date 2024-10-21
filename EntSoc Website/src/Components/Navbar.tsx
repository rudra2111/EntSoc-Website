import React, { useState } from 'react';
import { Box, Flex, Image, Link, Icon, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavLink as RouterNavLink } from 'react-router-dom';  // Importing NavLink for internal navigation
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About Us" },
  // Events will now link to an external website
  { path: "https://www.instagram.com/edentsoc/?hl=en", label: "Events", isExternal: true },
  { path: "/contact-us", label: "Contact Us" },
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      {/* Navbar */}
      <Flex
        as="nav"
        align="center"
        wrap="wrap"
        padding="1.5rem"
        bg="white"
        color="#20265E"
        position="fixed"
        top="0"
        width="100%"
        zIndex="1000"
        justify="space-between"
        boxShadow="sm"
      >
        {/* Clickable Logo Section */}
        <Flex align="center" mr={5}>
          <RouterNavLink to="/">  {/* Make the logo clickable, links to home */}
            <Image 
              src="/EntSoc_Logo.png" 
              alt="Logo" 
              height="auto"
              width={{ base: "150px", md: "300px" }}  // Responsive logo size for mobile and desktop
              objectFit="contain"
            />
          </RouterNavLink>
        </Flex>

        {/* Hamburger Menu Button for Mobile */}
        <IconButton
          display={{ base: 'block', md: 'none' }}  // Show hamburger on mobile, hide on desktop
          onClick={openDrawer}
          icon={<HamburgerIcon w={6} h={6} />}  // Hamburger icon for mobile menu
          variant="ghost"
          aria-label="Open Navigation"
        />

        {/* Navigation Links for Desktop */}
        <Flex display={{ base: 'none', md: 'flex' }} align="center" flexGrow={1} justify="center">
          {navItems.map((item) => (
            item.isExternal ? (
              <Link
                href={item.path}
                key={item.label}
                isExternal
                p="1rem"
                color="black"
                _hover={{ textDecoration: 'none', borderBottom: '2px solid #20265E' }}
                margin="0 10px"
              >
                {item.label}
              </Link>
            ) : (
              <RouterNavLink 
                to={item.path} 
                key={item.label} 
                style={({ isActive }) => ({
                  padding: '1rem',
                  borderBottom: isActive ? '2px solid #20265E' : 'none',
                  color: isActive ? "#20265E" : 'black',
                  textDecoration: 'none',
                  transition: 'border-bottom 0.3s ease',
                  margin: '0 10px',
                })}
              >
                {item.label}
              </RouterNavLink>
            )
          ))}
        </Flex>

        <Flex display={{ base: 'none', md: 'flex' }} ml="auto" align="center">
          <Link href="https://www.instagram.com/edentsoc/?hl=en" isExternal>
            <Icon as={FaInstagram} boxSize={6} mr={4} color="#20265E" _hover={{ color: "gray.500" }} />
          </Link>
          <Link href="https://www.linkedin.com/company/edentsoc/" isExternal>
            <Icon as={FaLinkedin} boxSize={6} color="#20265E" _hover={{ color: "gray.500" }} />
          </Link>
        </Flex>
      </Flex>

      {/* Drawer for Full-Screen Menu on Mobile */}
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={closeDrawer}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack
              spacing={8}
              mt={20}
              align="center"
              justify="center"
              height="100%"
              fontSize="2xl"
              fontWeight="bold"
            >
              {navItems.map((item) => (
                item.isExternal ? (
                  <Link
                    href={item.path}
                    key={item.label}
                    isExternal
                    fontSize="2xl"
                    color="#20265E"
                    onClick={closeDrawer}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <RouterNavLink 
                    to={item.path} 
                    key={item.label} 
                    onClick={closeDrawer}  // Close the drawer when a link is clicked
                    style={{ textDecoration: 'none', color: '#20265E' }}
                  >
                    {item.label}
                  </RouterNavLink>
                )
              ))}

              {/* Social Media Icons for Mobile (At the bottom) */}
              <Flex mt="auto" justify="center" pb={6}>
                <Link href="https://www.instagram.com/edentsoc/?hl=en" isExternal>
                  <Icon as={FaInstagram} boxSize={6} mr={4} color="#20265E" _hover={{ color: "gray.500" }} />
                </Link>
                <Link href="https://www.linkedin.com/company/edentsoc/" isExternal>
                  <Icon as={FaLinkedin} boxSize={6} color="#20265E" _hover={{ color: "gray.500" }} />
                </Link>
              </Flex>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
