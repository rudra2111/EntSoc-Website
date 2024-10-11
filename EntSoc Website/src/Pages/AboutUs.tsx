import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import Footer from '../Components/Footer';

const AboutUs = () => {
  const sections = [
    {
      title: "Speaker Events",
      description:
        "Our Speaker Events series offers unparalleled access to the minds of world-class entrepreneurs, innovators, and thought leaders. These talks and workshops are designed to inspire and educate students on the realities of entrepreneurship. From learning how to launch a business, scale a startup, or navigate the challenges of today’s market, you’ll hear firsthand experiences and actionable insights from individuals who have successfully charted their own entrepreneurial journeys. The events provide an invaluable platform for networking, learning, and gaining inspiration to take your own venture to the next level.",
      image: "/Speakers.png",  
    },
    {
      title: "Venture Capital Program (VCP)",
      description:
        "The Venture Capital Program (VCP) is a comprehensive 7-week program designed for aspiring entrepreneurs looking to get hands-on experience in building a startup from the ground up. Through a series of workshops, you’ll dive deep into essential topics such as startup funding, crafting a strong business plan, investment strategies, and scaling operations. Participants are guided by industry experts and investors, who provide feedback and mentorship throughout the process. By the end of the program, you’ll walk away with critical skills and insights to help bring your startup vision to life and secure investment opportunities.",
      image: "/VCP.jpg",  // Replace with actual image path
    },
    {
      title: "Scottish Entrepreneurs Network (SEN) Pitching Competition",
      description:
        "The Scottish Entrepreneurs Network (SEN) Pitching Competition is a dynamic initiative that challenges students at our partnered universities across Scotland to develop innovative, tech-driven solutions in key industries such as food, healthcare, and sports. This competition goes beyond just pitching—it encourages participants to focus on making a positive societal impact. By tackling real-world problems on a chosen theme, students are tasked with creating solutions that improve sustainability, health, well-being, and overall quality of life. ",
      image: "/SEN.jpg",  // Replace with actual image path
    },
    {
      title: "Foundry",
      description:
        "Foundry is EntSoc’s vibrant community of entrepreneurs at all stages of their journey, offering a space where founders can connect, learn, and grow together. Whether you’re just starting out with a fresh idea or you’ve already launched your business, Foundry provides the resources, mentorship, and support to help you succeed. Members benefit from access to workshops, peer-to-peer learning sessions, and networking opportunities with fellow entrepreneurs and industry experts. Foundry is more than just a community—it’s a place where entrepreneurial ideas are transformed into action, and where members can collaborate, share experiences, and gain the practical skills needed to advance their ventures.",
      image: "/Foundry.JPG",  // Replace with actual image path
    },
    {
      title: "REACH",
      description:
        "Reach is EntSoc’s initiative designed to strengthen ties between students and local businesses while raising funds for charity. At the heart of Reach is our Savers Card, which offers exclusive discounts at a variety of partner establishments around Edinburgh. These discounts encourage students to engage with and support local businesses. Additionally, Reach hosts events where funds are raised directly for a chosen charity, helping to make a positive social impact. Through this initiative, we’re not only supporting the local economy but also empowering students to contribute to meaningful causes through their participation in our events.",
      image: "/REACH.jpg",  // Replace with actual image path
    },
  ];

  return (
    <Box
      maxW="1200px"
      mx="auto"
      p={{ base: 4, md: 8 }}
      my={8}
      mt={16} 
    >
      <Flex direction={{ base: 'column', md: 'row' }}>

        <Box flex="1" pr={{ md: 10 }} mb={{ base: 4, md: 0 }}>
          <Text
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
            color="#20265E"
          >
            Our Mission
          </Text>
        </Box>

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

      {sections.map((section, index) => (
        <Flex
          key={section.title}
          direction={{ base: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
          my={16}
          alignItems="center"
        >

          <Box flex="1" p={{ base: 4, md: 8 }}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              {section.title}
            </Text>
            <Text fontSize="lg" lineHeight="1.8" color="gray.700">
              {section.description}
            </Text>
          </Box>


          <Box flex="1" p={{ base: 4, md: 8 }} display="flex" justifyContent="center">
            <Image
              src={section.image}
              alt={section.title}
              borderRadius="lg"
              objectFit="cover"
              width="100%"
              maxHeight="300px"  
            />
          </Box>
        </Flex>
      ))}

      <Footer />
    </Box>
  );
};

export default AboutUs;
