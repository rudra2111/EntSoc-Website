import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControl, FormLabel, Heading, Input, Link, Select, Textarea, VStack } from '@chakra-ui/react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    subject: '',
    enquiryType: '',
    message: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }

    emailjs.send(
      'service_tyyrt3w',
      'template_b50lo3g',
      formData,
      '7O3bmsPVxvhikBBgc'
    ).then(
      (result) => {
        alert('Message sent successfully!');
        console.log(result.text);
      },
      (error) => {
        alert('An error occurred. Please try again.');
        console.log(error.text);
      }
    );
  };

  return (
    <Box>
      {/* Adjusting the top margin for mobile and desktop separately */}
      <Box mt={{ base: "4rem", md: "8rem" }} mb="6" textAlign="center">
        <Heading as="h1" size="xl" mb="4">
          Contact Us
        </Heading>
        <Box as="form" onSubmit={handleSubmit} p={6} maxW="600px" mx="auto">
          <VStack spacing={4}>
            {/* First Name and Last Name */}
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last name</FormLabel>
              <Input name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} />
            </FormControl>

            {/* Company Name and Email */}
            <FormControl>
              <FormLabel>Company name</FormLabel>
              <Input name="companyName" placeholder="Company name" value={formData.companyName} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
            </FormControl>

            {/* Phone and Subject */}
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Subject</FormLabel>
              <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
            </FormControl>

            {/* Enquiry Type */}
            <FormControl isRequired>
              <FormLabel>What's the nature of your enquiry?</FormLabel>
              <Select name="enquiryType" placeholder="Select an option" value={formData.enquiryType} onChange={handleChange}>
                <option value="general">General</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
              </Select>
            </FormControl>

            {/* Message */}
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea name="message" placeholder="Enter message" value={formData.message} onChange={handleChange} />
            </FormControl>

            {/* Terms and Conditions */}
            <FormControl isRequired>
              <Checkbox name="termsAccepted" isChecked={formData.termsAccepted} onChange={handleChange}>
                I have read and accepted the <Link href="/terms">Terms & Conditions</Link> and the <Link href="/privacy">Privacy notice</Link>.
              </Checkbox>
            </FormControl>

            {/* Submit Button */}
            <Button type="submit" colorScheme="blue" size="lg" w="full">
              Submit
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
