// import React from "react";
// import {
//   TextField,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   Typography,
//   Container,
//   Box,
//   Link,
//   Divider,
// } from "@mui/material";
// import Black from "../assets/Black.webp";

// const Signup = () => {
//   const freeDownloadButtonStyle = {
//     backgroundColor: "#2B2B2B",
//   };

//   return (
//     <Container>
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "stretch",
//           height: "100vh",
//         }}
//       >
//         <Box
//           sx={{
//             flex: 1,
//             marginRight: "50px",
//             p: 4,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//           }}
//         >
//           <Typography
//             variant="h4"
//             component="h2"
//             gutterBottom
//             sx={{ fontWeight: "bold", marginLeft: "190px" }}
//           >
//             Sign In
//           </Typography>
//           <Typography gutterBottom fontSize="19px">
//             Enter your email and password to register.
//           </Typography>
//           <label style={{ marginTop: "20px" }}>Your email</label>

//           <TextField
//             label="Your email"
//             type="email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//           />
//           <FormControlLabel
//             control={<Checkbox />}
//             label={
//               <Typography variant="body2">
//                 I agree to the <Link href="#">Terms and Conditions</Link>
//               </Typography>
//             }
//           />
//           <Button
//             fullWidth
//             sx={{ mt: 2, mb: 2, color: "white", backgroundColor: "#2B2B2B" }}
//           >
//             Register Now
//           </Button>
//           <Divider sx={{ mb: 2 }}>or</Divider>
//           <Button variant="outlined" fullWidth sx={{ mb: 1 }}>
//             Sign in with Google
//           </Button>
//           <Button variant="outlined" fullWidth>
//             Sign in with Twitter
//           </Button>
//           <Typography variant="body2" align="center" sx={{ mt: 2 }}>
//             Already have an account? <Link href="#">Sign in</Link>
//           </Typography>
//         </Box>

//         <Box
//           sx={{
//             flex: 1,
//             display: { xs: "none", md: "block" },
//             position: "relative",
//           }}
//         >
//           <img
//             src={Black}
//             alt="Sign In"
//             style={{
//               width: "105%",
//               height: "100%",
//               objectFit: "cover",
//               borderRadius: "20px",
//               marginTop: "20px",
//               // marginLeft:"500px"
//               marginLeft: "70px",
//             }}
//           />
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Signup;





import React from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Container,
  Box,
  Link,
  Divider,
} from "@mui/material";
import Black from "../assets/Black.webp";

const Signup = () => {
  const freeDownloadButtonStyle = {
    backgroundColor: "#2B2B2B",
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "block" },
            position: "relative",
          }}
        >
          <img
            src={Black}
            alt="Sign In"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
              marginLeft: "-120px",
              marginTop: "30px",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            marginLeft: "50px",
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            marginLeft="90px"
            sx={{ fontWeight: "bold" }}
          >
            Join Us Today
          </Typography>
          <Typography gutterBottom marginLeft="90px" fontSize="19px">
            Enter your email and password to register.
          </Typography>
          <label style={{ marginTop: "20px" }}>Your email</label>

          <TextField
            label="Your email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <FormControlLabel
            control={<Checkbox sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }} />}
            label={
              <Typography variant="body2" sx={{ color: 'black' }}>
                I agree to the <Link href="#" sx={{ color: 'black' }}>Terms and Conditions</Link>
              </Typography>
            }
          />
          <Button
            fullWidth
            sx={{ mt: 2, mb: 2, color: "white", backgroundColor: "#2B2B2B" }}
          >
            Register Now
          </Button>
          <Divider sx={{ mb: 2 }}>or</Divider>
          <Typography variant="body2" align="center" sx={{ mt: 2, color: 'black' }}>
            Already have an account? <Link href="#" sx={{ color: 'black' }}>Sign in</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
