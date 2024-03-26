import React, {useEffect, useState, useContext } from 'react';

import { Dialog, DialogContent, TextField, Box, Button, Typography, styled } from '@mui/material';

import { authenticateSignup ,authenticateLogin} from '../../service/api';

import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';


const Component = styled(DialogContent)`
height: 70vh;
width: 90vh;
padding: 0;
padding-top: 0;
`

const LoginButton = styled(Button)`
text-transform: none;
background: #FB641B;
color: #fff;
height: 48px;
border-radius: 2px;
&:hover {
  color:#fff; 
  background: #FB641B;

}
`
const RequestOTP = styled(Button)`
text-transform: none;
background: #fff;
color: #2874f0;
height: 48px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;


const Image = styled(Box)`
 background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
 height:83%;
 width:28%;
 padding:45px 35px;

 & > p, & > h5 {
  color: #FFFFFF;
  font-weight: 600;
}

`


const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
overflow: auto;
& > div, & > button, &>p{
  margin-top:10px;
}
`

const Text = styled(Typography)`
color: #878787;
font-size: 12px;
`
const CreateAccount = styled(Typography)`
margin: auto 0 5px 0;
text-align: center;
color: #2874f0;
font-weight: 600;
font-size: 14px;
cursor: pointer
`

const Error = styled(Typography)`
  font-size:10px;
  color:#ff6161;
  line-height:0;
  margin-top:10px;
  font-weight:600;



`


const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const LoginDialog = ({ open, setOpen }) => {
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ error, showError] = useState(false);
    const [ account, toggleAccount ] = useState(accountInitialValues.login);

    const {user,setUser} = useContext(DataContext)

    const navigate = useNavigate()

   


    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const handleInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async() => {
        let response = await authenticateLogin(login);
        if(response.status === 201) 
            {
                
            alert("You are logged in Successfully")
            handleClose(); 
            console.log(response)   
            localStorage.setItem("token",response.data.authToken)
            setUser(user)
            navigate("/")
            }
        else{
            showError(true);
        }
       
    }

    const signupUser = async() => {
        let response = await authenticateSignup(signup);
        if(!response) return;

        handleClose();
        
     
    }
    
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const toggleLogin = () => {
        toggleAccount(accountInitialValues.login);
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        showError(false);
    }

  

    return (
      <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <Component>
        <Box style={{display:'flex',height:'100%'}}>
        <Image>
          <Typography variant='h5'>{account.heading}</Typography>
          <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
        </Image>
        { account.view === 'login' ?
        <Wrapper>
         
          <TextField variant='standard' onChange={onValueChange} name='username' label="Enter Username"/>
         {error && <Error>Please Enter Valid Username or Password</Error>}


          <TextField variant='standard' onChange={onValueChange} name='password' label="Enter Password"/>
          <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
          <LoginButton onClick={() => loginUser()}>Login</LoginButton>
          <Typography style={{textAlign:'center'}}>OR</Typography>
          <RequestOTP>Request OTP</RequestOTP>
          <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
          </Wrapper>
          :
          <Wrapper>
          <TextField   variant="standard" onChange={handleInputChange} name='firstname' label='Enter Firstname' />
          <TextField   variant="standard" onChange={handleInputChange}  name='lastname' label='Enter Lastname' />
          <TextField   variant="standard" onChange={handleInputChange} name='username' label='Enter Username' />
          <TextField   variant="standard" onChange={handleInputChange} name='email' label='Enter Email' />
          <TextField   variant="standard" onChange={handleInputChange} name='password' label='Enter Password' />
          <TextField   variant="standard" onChange={handleInputChange}  name='phone' label='Enter Phone' />
          <LoginButton onClick={() => signupUser()} >Continue</LoginButton>
          <RequestOTP onClick={()=>toggleLogin()}>Existing User? Login</RequestOTP>
      </Wrapper>
          
        }
        </Box>
      </Component>
  </Dialog>
    )
}

export default LoginDialog;