import React from 'react';
import { Box, Flex, Text, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import Footer from '../Components/Footer';

const AboutUs = () => {
  const sections = [
    {
      title: "Speaker Events",
      description:
        "Our Speaker Events series offers unparalleled access to the minds of world-class entrepreneurs, innovators, and thought leaders. These talks and workshops are designed to inspire and educate students on the realities of entrepreneurship. From learning how to launch a business, scale a startup, or navigate the challenges of today’s market, you’ll hear firsthand experiences and actionable insights from individuals who have successfully charted their own entrepreneurial journeys.",
    },
    {
      title: "Venture Capital Program (VCP)",
      description:
        "The Venture Capital Program (VCP) is a comprehensive 7-week program designed for aspiring entrepreneurs looking to get hands-on experience in building a startup from the ground up. Through a series of workshops, you’ll dive deep into essential topics such as startup funding, crafting a strong business plan, investment strategies, and scaling operations. Participants are guided by industry experts and investors.",
    },
    {
      title: "Scottish Entrepreneurs Network (SEN) Pitching Competition",
      description:
        "The Scottish Entrepreneurs Network (SEN) Pitching Competition is a dynamic initiative that challenges students at our partnered universities across Scotland to develop innovative, tech-driven solutions in key industries such as food, healthcare, and sports. This competition goes beyond just pitching—it encourages participants to focus on making a positive societal impact.",
    },
    {
      title: "Foundry",
      description:
        "Foundry is EntSoc’s vibrant community of entrepreneurs at all stages of their journey, offering a space where founders can connect, learn, and grow together. Whether you’re just starting out with a fresh idea or you’ve already launched your business, Foundry provides the resources, mentorship, and support to help you succeed.",
    },
    {
      title: "Reach",
      description:
        "Reach is EntSoc’s initiative designed to strengthen ties between students and local businesses while raising funds for charity. At the heart of Reach is our Savers Card, which offers exclusive discounts at a variety of partner establishments around Edinburgh. These discounts encourage students to engage with and support local businesses.",
    },
  ];

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

      {/* Sections for each initiative */}
      {sections.map((section, index) => (
        <Flex
          key={section.title}
          direction={{ base: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
          my={16}
          alignItems="center"
        >
          {/* Section Title and Description */}
          <Box flex="1" p={{ base: 4, md: 8 }}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              {section.title}
            </Text>
            <Text fontSize="lg" lineHeight="1.8" color="gray.700">
              {section.description}
            </Text>
          </Box>

          {/* Image or Illustration (Placeholder for now) */}
          <Box flex="1" p={{ base: 4, md: 8 }} display="flex" justifyContent="center">
            <Box
              width="100%"
              height="250px"
              bg="gray.200"
              borderRadius="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="xl" color="gray.500">Image Placeholder</Text>
            </Box>
          </Box>
        </Flex>
      ))}

      <Footer />
    </Box>
  );
};

export default AboutUs;
