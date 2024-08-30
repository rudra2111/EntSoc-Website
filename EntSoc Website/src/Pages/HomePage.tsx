import { Box, Image } from '@chakra-ui/react';

export default function HomePage() {
    // Ensure this path is correct based on your project structure
    const backgroundImageUrl = '/Old-College.jpg'; 

    return (
        <Box height="100vh" width="100vw" overflow="hidden">
            <Image src={backgroundImageUrl} alt="Background" objectFit="cover" width="100%" height="100%" />
        </Box>
    );
}
