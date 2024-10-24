import { Box, VStack, Text, Button, SimpleGrid, Image, Link, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Flex } from '@chakra-ui/react';
import Footer from '../Components/Footer';
import { useEffect } from 'react';

export default function HomePage() {
    const backgroundImageUrl = '/McEwanHall.jpg'; 
    const signUpUrl = "https://www.eusa.ed.ac.uk/activities/view/edinburghentrepreneurs?ref=conversationalainews.com";

    const handleSignUpClick = () => {
        window.open(signUpUrl, '_blank');
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []); 

    const committeeMembers = [
        {
            name: "Rudra Jadav",
            position: "President",
            image: "/Rudra Jadav.png",
            linkedin: "https://www.linkedin.com/in/rudrajadav",
        },
        {
            name: "Krishiv Chadha",
            position: "Vice President",
            image: "/Krish Chadha.png",
            linkedin: "https://www.linkedin.com/in/krishivchadha",
        },
        {
            name: "Ella Rowe",
            position: "Treasurer",
            image: "/Ella Rowe.png",
            linkedin: "http://linkedin.com/in/ella-tiare-rowe-4a091b205",
        },
        {
            name: "Sneha Guntury",
            position: "Chairperson",
            image: "/Sneha.png",
            linkedin: "https://www.linkedin.com/in/snehaguntury/",
        },
        {
            name: "Karney Morgan-Cheng",
            position: "Vice-Chairperson",
            image: "/karney.png",
            linkedin: "https://www.linkedin.com/in/karney-morgan-cheng-8790711aa/",
        },
        {
            name: "Kashvi Chabbra",
            position: "Head of Speakers",
            image: "/Kashvi.png",
            linkedin: "https://www.linkedin.com/in/kashvi-chabbra/",
        },
        {
            name: "Saumya Jindal",
            position: "Speakers Coordinators",
            image: "/Saumya.png",
            linkedin: "https://www.linkedin.com/in/saumya-jindal-j17?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
            name: "Abylay Orazbek",
            position: "Speakers Coordinators",
            image: "/Abylay.png",
            linkedin: "https://www.linkedin.com/in/abylay-orazbek-500593217/",
        },
        {
            name: "Arnav Upamanyu",
            position: "Co-Head of SEN & VCP",
            image: "/Arnav.png",
            linkedin: "https://www.linkedin.com/in/arnav-upmanyu-/",
        },
        {
            name: "Sophie Donkers",
            position: "Co-Head of SEN & VCP",
            image: "/Sophie.png",
            linkedin: "https://www.linkedin.com/in/sophiedonkers",
        },
        {
            name: "George Patin",
            position: "Head of Foundry",
            image: "/George.png",
            linkedin: "https://www.linkedin.com/in/georgepatin/",
        },

        {
            name: "Celine Venusa",
            position: "Co-Head of REACH",
            image: "/Celine.png",
            linkedin: "https://www.linkedin.com/in/celine-venusa-579a631b2",
        },
        {
            name: "Zhijian Zhang",
            position: "Co-Head of REACH",
            image: "/Zhijian.png",
            linkedin: "http://linkedin.com/in/rosie-zhang-37339a268",
        },
        {
            name: "Aisling Kelly",
            position: "Corporate Sponsorship Coordinator",
            image: "/Aisling.jpeg",
            linkedin: "https://www.linkedin.com/in/aislingekelly/",
        },
        {
            name: "Ermioni Vasileiadou",
            position: "Co-Head of Marketing",
            image: "/Hermi.png",
            linkedin: "https://www.linkedin.com/in/ermioni-vasileiadou-b303b4314/",
        },
        {
            name: "Shifa Ali",
            position: "Co-Head of Marketing",
            image: "/Shifa.png",
            linkedin: "https://www.linkedin.com/in/shifa27/",
        },
        {
            name: "Anastasia McMillan",
            position: "Social Secretary",
            image: "/Anastasia.png",
            linkedin: "https://www.linkedin.com/in/anastasia-mcmillan/",
        },
        {
            name: "Diana Georgievskaya",
            position: "Social Secretary",
            image: "/diana.png",
            linkedin: "https://www.linkedin.com/in/diana-georgievskaya/",
        },

    ];

    return (

        <Box alignItems='center' justifyContent='center' width="100vw">
            <Box
                position="relative"
                minHeight={{ base: "100vh", md: "100vh" }}  
                width="100vw"
                overflow="hidden"
                bgImage={`url('${backgroundImageUrl}')`}
                bgPosition="center"  
                bgSize="cover" 
                bgAttachment="scroll" 
                bgRepeat="no-repeat"
            >
                <VStack
                    position="absolute"
                    top={{ base: "45%", md: "50%" }}  
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                    color="white"
                    spacing={4}
                    p="4"
                    bgGradient="linear(to-t, transparent, blackAlpha.700)"
                    borderRadius="lg"
                    maxWidth="lg"
                >
                    <Text fontSize={{ base: "xl", md: "2xl" }}>
                        Dream. Develop. Disrupt.
                    </Text>
                    <Button
                        bg="#20265E"  
                        color="white"  
                        size="lg"
                        onClick={handleSignUpClick}
                        _hover={{ bg: '#1a1e4d' }}  
                    >
                        Sign Up
                    </Button>
                </VStack>
            </Box>


            <Box display='flex' alignItems='center' justifyContent='center' width="100vw" p={8}>
                <Box 
                    p={{ base: 6, md: 10 }}  
                    bg="gray.100"  
                    textAlign="center"
                    mt={12}
                    borderRadius="md"  
                    boxShadow="lg"  
                    maxW="6xl"  
                    mx="auto"
                    alignContent='center'
                >
                    <Flex direction={{ base: 'column', md: 'row' }}  justify="center">
                        <Box flex="1" textAlign="left" p={{ base: 4, md: 8 }}>
                            <Text fontSize="2xl" fontWeight="bold" mb={6}>Who Are We?</Text>
                            <Text fontSize="lg" lineHeight="1.8" mb={4}>
                                At EntSoc, we unite a diverse group of driven students who share a passion for entrepreneurship. We’re not just a society; we’re a community that fosters creativity, cultivates business knowledge, and builds the confidence needed to bring entrepreneurial visions to life.
                            </Text>
                            <Text fontSize="lg" lineHeight="1.8" mb={4}>
                                Through impactful events, competitions, and collaborations, we’ve made our mark, hosting over 60 speakers from 18 countries and 200+ competition participants in past years. We collaborate with 7 Scottish universities, support 4 local businesses, and contribute to charity, raising £1,500 annually for partner organizations.
                            </Text>
                            <Text fontSize="lg" lineHeight="1.8" mb={4}>
                                Our goal? To offer high-quality learning and networking experiences that equip our members with the skills and confidence to make real-world impact.
                            </Text>
                        </Box>

                        <Box flex="1" maxW={{ base: '100%', md: '400px' }} p={{ base: 4, md: 8 }}>
                            <Accordion allowToggle>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left" fontWeight='bold'>
                                            Speaker Events
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4} textAlign="left" >
                                        Learn from world-class entrepreneurs, innovators, and thought leaders through a series of talks and workshops designed to inspire and educate.

                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left" fontWeight='bold'>
                                            Venture Capital Programme (VCP)
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4} textAlign="left" >
                                        This 7-week program provides aspiring entrepreneurs with hands-on experience in building a startup through workshops, offering insights into funding, investment strategy, and startup scaling.
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left" fontWeight='bold'>
                                            Scottish Entrepreneurs Network (SEN) Pitching Competition
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4} textAlign="left" >
                                        The SEN competition is designed to empower university students to develop innovative, tech-driven solutions across the food, healthcare, and sports industries with a focus on creating a positive impact on society. Participants are encouraged to address real-world problems, using technology to enhance sustainability, health, well-being, and overall societal benefit.
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left" fontWeight='bold'>
                                            Foundry
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4} textAlign="left" >
                                        Foundry is our dedicated community of entrepreneurs, providing a space for founders at any stage to connect, learn, and grow together. It’s where ideas are transformed into action, with support from peers and mentors alike.
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left" fontWeight='bold'>
                                            REACH
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4} textAlign="left" >
                                        An initiative supporting local businesses through our Savers Card, and raising funds for charity through Reach events. These cards offer discounts at our partner establishments around Edinburgh, encouraging student engagement with local businesses, while the funds raised by Reach events go directly to a charity partner.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>

                    </Flex>
                    
 
                    <Text fontWeight="bold" fontSize="lg" lineHeight="1.8" mt={8} textAlign="center">
                        Ready to make your mark? Join us for another year of impact and innovation.
                    </Text>
                </Box>
            </Box>


            <Box 
                p={{ base: 6, md: 10 }}  
                textAlign="center"
                mx="auto"  
                mt={12}  
                maxW="90%"  
                width="100vw"

            >
                <Text fontSize="2xl" fontWeight="bold" mb={6} color='#20265E'>Our Team</Text>

                <SimpleGrid columns={{ base: 1, sm: 2,  md: 3 }} spacing={10} justifyContent="center" alignItems="center" w="100%" >
                    {committeeMembers.map((member) => (
                        <VStack key={member.name} spacing={4} align="center">
                            <Image
                                borderRadius="full"
                                boxSize="150px"
                                src={member.image}
                                alt={member.name}
                                objectFit='cover'
                                alignItems = 'center'
                            />
                            <Text fontWeight="bold">{member.name}</Text>
                            <Text color="gray.500">{member.position}</Text>
                            <Link href={member.linkedin} color="blue.500" isExternal>
                                LinkedIn
                            </Link>
                        </VStack>
                    ))}
                </SimpleGrid>
            </Box>

            <Footer />
        </Box>

    );
}
