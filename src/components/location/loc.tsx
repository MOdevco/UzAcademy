import { Box, Button, FormControl, Input, Text, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'

const Loc = () => {
    

    const [name , setName] = useState('')
    const [sureName , setSureName] = useState('')
    const [course , setCourse] = useState('')
    const [message , setMessage] = useState('')

        
        const onSubmit = async () => {
            const TOKEN = '6189225172:AAEeI_j09h9_m1HHG7egTHvvm9oI0DuJHFs'
            const CHAT_ID = '-1001893825898'
            const URL_API = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'
    
            let mes = `<b>IZOH</b>\n`
            mes += `<b>Ism: ${name}</b>\n`
            mes += `<b>Familiya: ${sureName}</b>\n`
            mes += `<b>Kurs: ${course} </b>\n`
            mes += `<b>Habar: ${message}</b>\n`
            
            setName('')
            setSureName('')
            setCourse('')
            setMessage('')
    
            axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: mes
            })
            
          }

    


  return (
    <Box display={'flex'} gap={'50px'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} minHeight={'100vh'}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.28173440877!2d72.06788697325715!3d40.5245448058733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc8707ba1f9241%3A0xe0c992ee3625d31a!2sIdeal!5e1!3m2!1sru!2s!4v1684657478016!5m2!1sru!2s" className='wid'  style={{border: '0'}} ></iframe>
        <Box>
            <Text fontSize={'30px'} color={'black'} fontWeight={600} mb={5}>
                Murojatingiz uchun
            </Text>
            <FormControl w={'100%'} onSubmit={(e) => e.preventDefault()}  display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2}>
                <Input onChange={(e) => setName(e.target.value)} value={name} type={'text'} placeholder='Ismingiz...' bg={''} w={'50vw'} />
                <Input onChange={(e) => setSureName(e.target.value)} value={sureName} type={'text'} placeholder='Familiyangiz...' bg={''}  w={'50vw'} />
                <Input onChange={(e) => setCourse(e.target.value)} value={course} type={'text'} placeholder='Kursingiz...' bg={''}  w={'50vw'} />
                <Textarea onChange={(e) => setMessage(e.target.value)} value={message} bg={''} outline={'none'} w={'50vw'} placeholder='Murojatingiz' />
                <Button type={'submit'} _hover={{bg: ' rgba(199, 90, 0, 0.8)'}} onClick={onSubmit} w={'50vw'} bg={' rgba(199, 90, 0, 0.58)'}>Button</Button>
            </FormControl>
        </Box>
    </Box>
  )
}

export default Loc