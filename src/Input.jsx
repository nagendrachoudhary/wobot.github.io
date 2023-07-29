import React from 'react'
import { Box, Button, Input, SegmentedControl, Select, Text } from '@mantine/core';
export default function InputCompo(){
  return (
    <div>
         <Input.Wrapper  label="Your name" mb={20} mt={20}  required maw={320} mx="auto">
       <Input
         mask="eg. Nagendra Choudhary"
         placeholder="eg. Nagendra Choudhary"
       />
     </Input.Wrapper>
     <Input.Wrapper mb={20}  label="Company name" required maw={320} mx="auto">
       <Input
         
         placeholder="eg. Alpha Ins."
       />
     </Input.Wrapper>
     <Select
     mb={20}
     required maw={320} mx="auto"
      label="Industry"
      placeholder="Select"
      data={[
        { value: 'Software Development', label: 'Software Development' },
        { value: 'Hardware Manufacturing', label: 'Hardware Manufacturing' },
        { value: 'T Services', label: 'T Services' },
        { value: 'Artificial Intelligence', label: 'Artificial Intelligence' },
      ]}
    />
    <Box maw={320} mb={20} mx="auto">
        <label>Number of locations</label>
    <SegmentedControl fullWidth color="blue"  transitionDuration={500}
      data={[
        { label: '1-20', value: '1-20' },
        { label: '21-50', value: '21-50' },
        { label: '51-200', value: '51-200' },
        { label: '201-500', value: '201-500' },
        { label: '500+', value: '500+' },
      ]}
    />
    </Box>
    <Box mt={30} maw={320} mx="auto">
    <Button fullWidth>
      Get Started
    </Button>
    </Box>
    <Box mt={30} maw={320} mx="auto">
       <Text style={{textAlign:'center'}} >Terms of use | Privacy policy</Text>
    </Box>
    </div>
  )
}
