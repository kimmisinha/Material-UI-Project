import React from "react";
import { Container, Box, Typography, Grid, Paper } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
const LandingPage = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
          padding: "4rem",
          fontFamily: "Roboto, sans-serif",
          height: "83vh",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "white",
            marginBottom: "1rem",
          }}
        >
          Your story starts with us.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          maxWidth="md"
          sx={{
            whiteSpace: "pre-line",
            fontWeight: 400,
            color: "white",
            marginBottom: "2rem",
          }}
        >
          This is a simple example of a Landing Page you can build using
          Material Tailwind.
          {"\n"}multiple components based on the Tailwind CSS and Material
          Design by Google.
        </Typography>
      </Box>
      <div style={{ padding: "0px 20px 0px 60px" }}>
        <Grid
          container
          // spacing={4}
          sx={{
            marginTop: "-8rem",
          }}
        >
          <Grid item xs={12} sm={4} sx={{padding: "10px"}}>
            <Card sx={{ maxWidth: 400, maxHeight: 233 }}>
              <Typography
                sx={{
                  backgroundColor: "rgb(51,51,51)",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                  marginTop: "26px",
                }}
              >
                <ChatIcon fontSize="small" sx={{ color: "white" ,adding: "0px 90px 0px"}} />
              </Typography>
              <CardHeader
                title="  Awarded Agency"
                component="h2"
                gutterBottom
                variant="h6"
                sx={{ fontWeight: "600", padding: "0px 90px 0px" }}
              />

              <CardContent sx={{padding: 0}}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    color: "rgb(160,175,182)",
                    fontFamily: "Roboto, sans-serif",
                    padding: "0px 10px 15px 15px",
                    // border:"1px solid blue"
                  }}
                >
                  Divide details about your product or agency work into parts. A
                  paragraph describing a feature will be enough.
                </Typography>
              </CardContent>
            </Card>
            {/* <Paper
            elevation={3}
            sx={{
           
              border: "9px",
              // padding: "1rem",
              textAlign: "center",
              margin: "1px",
              marginLeft: "25px",
              width: "390px",
              height: "190px",
              // paddingTop:"20px",
              // marginRight: "500px",

              // marginLeft:"20px"
              // marginRight:"710px"
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgb(51,51,51)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <ChatIcon fontSize="small" sx={{ color: "white" }} />
            </Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "600", paddingTop: "19px" }}
            >
              Awarded Agency
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgb(160,175,182)",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Divide details about your product or agency work into parts. A
              paragraph describing a feature will be enough.
            </Typography>
          </Paper> */}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 400, maxHeight: 233 }}>
              <Typography
                sx={{
                  backgroundColor: "rgb(51,51,51)",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <ChatIcon fontSize="small" sx={{ color: "white" }} />
              </Typography>
              <CardHeader
                title="  Awarded Agency"
                variant="h6"
                component="h2"
                gutterBottom
                sx={{ fontWeight: "600" }}
              />

              <CardContent>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    color: "rgb(160,175,182)",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Divide details about your product or agency work into parts. A
                  paragraph describing a feature will be enough.
                </Typography>
              </CardContent>
            </Card>
            {/* <Paper
            elevation={3}
            sx={{
           
              border: "9px",
              // padding: "1rem",
              textAlign: "center",
              margin: "1px",
              marginLeft: "25px",
              width: "390px",
              height: "190px",
              // paddingTop:"20px",
              // marginRight: "500px",

              // marginLeft:"20px"
              // marginRight:"710px"
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgb(51,51,51)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <ChatIcon fontSize="small" sx={{ color: "white" }} />
            </Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "600", paddingTop: "19px" }}
            >
              Awarded Agency
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgb(160,175,182)",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Divide details about your product or agency work into parts. A
              paragraph describing a feature will be enough.
            </Typography>
          </Paper> */}
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 400, maxHeight: 233 }}>
              <Typography
                sx={{
                  backgroundColor: "rgb(51,51,51)",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <ChatIcon fontSize="small" sx={{ color: "white" }} />
              </Typography>
              <CardHeader
                title="  Awarded Agency"
                variant="h6"
                component="h2"
                gutterBottom
                sx={{ fontWeight: "600" }}
              />

              <CardContent>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    color: "rgb(160,175,182)",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Divide details about your product or agency work into parts. A
                  paragraph describing a feature will be enough.
                </Typography>
              </CardContent>
            </Card>
            {/* <Paper
            elevation={3}
            sx={{
           
              border: "9px",
              // padding: "1rem",
              textAlign: "center",
              margin: "1px",
              marginLeft: "25px",
              width: "390px",
              height: "190px",
              // paddingTop:"20px",
              // marginRight: "500px",

              // marginLeft:"20px"
              // marginRight:"710px"
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgb(51,51,51)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <ChatIcon fontSize="small" sx={{ color: "white" }} />
            </Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "600", paddingTop: "19px" }}
            >
              Awarded Agency
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgb(160,175,182)",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Divide details about your product or agency work into parts. A
              paragraph describing a feature will be enough.
            </Typography>
          </Paper> */}
          </Grid>

          {/* <Paper
            // elevation={3}
            sx={{
              width: "390px",
              height: "190px",
              border: "9px",
              // padding: "1rem",
              textAlign: "center",
              margin: "1px",
              // marginRight: "0px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgb(51,51,51)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <ChatIcon fontSize="small" sx={{ color: "white" }} />
            </Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "600", paddingTop: "19px" }}
            >
              Free Revisions
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgb(160,175,182)",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Keep your user engaged by providing meaningful information.
              Remember that by this time, the user is curious.
            </Typography>
          </Paper> */}
        </Grid>
      </div>
    </Container>
  );
};

export default LandingPage;
