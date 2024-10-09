import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box
      maxW="1200px"
      mx="auto"
      p={{ base: 4, md: 8 }}
      my={8}
      mt={16} // Add more top margin to move the content down
    >
      {/* Flexbox for two columns */}
      <Flex direction={{ base: 'column', md: 'row' }}>
        {/* Left column with the heading */}
        <Box flex="1" pr={{ md: 10 }} mb={{ base: 4, md: 0 }}>
          <Text
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
            color="#20265E"
          >
            Our Mission
          </Text>
        </Box>

        {/* Right column with the mission text */}
        <Box flex="2">
          <Text fontSize="lg" lineHeight="1.8" textAlign="left" color="gray.700">
            We want to equip our members with the best opportunities to:
          </Text>

          <Text fontSize="lg" lineHeight="1.8" mt={4} textAlign="left" color="gray.700">
            - Learn the skills and develop the mindset necessary to succeed as a modern-day entrepreneur.
          </Text>

          <Text fontSize="lg" lineHeight="1.8" mt={4} textAlign="left" color="gray.700">
            - Develop, validate, and help finance their business ideas with competition prizes.
          </Text>

          <Text fontSize="lg" lineHeight="1.8" mt={4} textAlign="left" color="gray.700">
            - Expand their network and be inspired by successful entrepreneurs.
          </Text>

          <Text fontSize="lg" lineHeight="1.8" mt={4} textAlign="left" color="gray.700">
            - Pursue career paths in high-growth entrepreneurial environments, from start-ups to VC funds to tech giants.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutUs;
