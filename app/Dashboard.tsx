"use client";
import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Container, Typography, Paper, AppBar,Card, Toolbar, Drawer, List, ListItem, ListItemText, Grid, IconButton, Collapse, Button, ListItemIcon, CircularProgress } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import '@fontsource/roboto-mono/400.css';
import EXIF from 'exif-js';
import * as faceapi from 'face-api.js';
import DeleteIcon from '@mui/icons-material/Delete'; 



const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#D3D3D3' },
      background: { default: '#19172E' },
      text: { primary: '#D3D3D3' }
    },
    typography: {
      fontFamily: 'Roboto Mono, monospace',
      fontSize: 9,
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'linear-gradient(90deg, #19172E)',
            boxShadow: 'none',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: '#000001',
            border: '0.1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: 'none',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: '#000000',
            color: '#D3D3D3',
            borderRight: '0.01px solid rgba(255, 255, 255, 0.2)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: '#D3D3D3',
            color: '#000000',
            '&:hover': {
              backgroundColor: '#e0e0e0',
            },
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            '&.Mui-selected': {
              backgroundColor: '#D3D3D3',
              color: '#000000',
            },
          },
        },
      },
    },
  });

  const Sidebar = ({ onImageSelect }) => {
    const [dbOpen, setDbOpen] = useState(false);
    const [uploadOpen, setUploadOpen] = useState(false);
    const [attachedFiles, setAttachedFiles] = useState([]);

    const handleDbClick = () => {
        setDbOpen(!dbOpen);
    };

    const handleUploadClick = () => {
        setUploadOpen(!uploadOpen);
    };

    const handleDeleteFile = (index) => {
      setAttachedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };
  
    const handleFileChange = (event) => {
      const files = Array.from(event.target.files);
      const fileObjects = files.map(file => ({
        name: file.name,
        url: URL.createObjectURL(file)
      }));
      setAttachedFiles((prevFiles) => [...prevFiles, ...fileObjects]);
    };
  
    const loadModels = async () => {
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
        await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
        await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
        console.log("Models loaded successfully");
      } catch (error) {
        console.error("Error loading models:", error);
      }
    };
  
    useEffect(() => {
      loadModels();
    }, []);
  
    const extractMetadata = async (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = async () => {
          EXIF.getData(img, function() {
            const exifData = EXIF.getAllTags(this);
            console.log("EXIF Data:", exifData);
            const dateTaken = exifData.DateTimeOriginal || 'Unknown';
            const timeTaken = exifData.DateTimeOriginal ? exifData.DateTimeOriginal.split(' ')[1] : 'Unknown';
            const size = `${img.width}x${img.height}`;
  
            faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions())
              .then(detections => {
                const numberOfPeople = detections.length;
                resolve({
                  dateTaken,
                  timeTaken,
                  numberOfPeople,
                  size,
                });
              })
              .catch(error => {
                console.error("Error detecting faces:", error);
                reject(error);
              });
          });
        };
        img.onerror = (error) => {
          console.error("Error loading image:", error);
          reject(error);
        };
        img.src = url;
      });
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 200,
                flexShrink: 0,
                marginRight: '150px',
                maxWidth: false,
                transform: 'translateX(0px)',
                '& .MuiDrawer-paper': {
                    width: 190,
                    boxSizing: 'border-box',
                    backgroundColor: '#1d1e23',
                    color: '#000000',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRight: '0.1px solid rgba(255, 255, 255, 0.2)',
                },
            }}
        >
            <Box>
                <Toolbar />
                <Box sx={{ textAlign: 'center', p: 2 }}>
                </Box>
                <List sx={{ mt: -7 }}>
                    <ListItem button onClick={handleDbClick}>
                        <ListItemText primary="Database" sx={{ color: '#D3D3D3' }} />
                        {dbOpen ? <ExpandLessIcon sx={{ color: '#D3D3D3' }} /> : <ExpandMoreIcon sx={{ color: '#D3D3D3' }} />}
                    </ListItem>
                    <Collapse in={dbOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemText primary="Database 1" sx={{ color: '#D3D3D3' }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemText primary="Database 2" sx={{ color: '#D3D3D3' }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemText primary="Database 3" sx={{ color: '#D3D3D3' }} />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button onClick={handleUploadClick}>
                        <ListItemText primary="Upload" sx={{ color: '#D3D3D3' }} />
                        {uploadOpen ? <ExpandLessIcon sx={{ color: '#D3D3D3' }} /> : <ExpandMoreIcon sx={{ color: '#D3D3D3' }} />}
                    </ListItem>
                    <Collapse in={uploadOpen} timeout="auto" unmountOnExit>
                        <Box sx={{ p: 2, textAlign: 'center' }}>
                            <Button
                                variant="contained"
                                component="label"
                                sx={{
                                    backgroundColor: '#D3D3D3',
                                    color: '#000000',
                                    '&:hover': {
                                        backgroundColor: '#e0e0e0',
                                    },
                                }}
                            >
                               Attach Files
                               <input type="file" hidden multiple onChange={handleFileChange} />
                            </Button>
                            <List component="div" disablePadding>
                                {attachedFiles.map((file, index) => (
                                    <ListItem button key={index} sx={{ color: '#D3D3D3', pl: 4 }} onClick={() => onImageSelect(file.url)}>
                                        <ListItemIcon>
                                            <AttachFileIcon sx={{ color: '#D3D3D3' }} />
                                        </ListItemIcon>
                                        <ListItemText primary={file.name} />
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteFile(index)}>
                      <DeleteIcon sx={{ color: '#D3D3D3' }} />
                    </IconButton>
                  </ListItem>
                ))}
                            </List>
                        </Box>
                    </Collapse>
                </List>
            </Box>
            <Box sx={{ textAlign: 'center', p: 1 }}>
                <Typography variant="body2" sx={{ fontSize: '0.6rem', color: '#D3D3D3' }}>Employee ID: 00776/144</Typography>
            </Box>
        </Drawer>
    );
};


const PersonnelCard = ({ image, name, dob, pob, id, status, Matches_Found, }) => (
  <Paper
    sx={{
      padding: 4,
      color: '#000000',
      display: 'flex',
      alignItems: 'center',
      marginBottom: 0,
      transition: 'transform 0.3s ease-in-out',
      '&:hover': { transform: 'scale(1.05)' },
      width: '100%', // Make sure the card width is responsive or fixed
      maxWidth: '350px', // Fixed maximum width for the card
      height: 'auto',
      border: '0.01px solid green',
    }}
  >
    <Box
      component="img"
      src={image}
      alt={name}
      sx={{
        width: 150,
        height: 130,
        marginRight: 3,
        border: '0.2px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: 'transparent',
      }}
    />
    <Box sx={{ textAlign: 'left' }}>
      <Typography variant="h14" sx={{ fontWeight: 'bold', color: '#D3D3D3',fontSize: '0.75rem' }}>{name}</Typography>
      <Typography variant="body1" sx={{ fontSize: '0.65rem', color: '#D3D3D3' }}>Date of Birth: {dob}</Typography>
      <Typography variant="body1" sx={{ fontSize: '0.65rem', color: '#D3D3D3' }}>Place of Birth: {pob}</Typography>
      <Typography variant="body1" sx={{ fontSize: '0.65rem', color: '#D3D3D3' }}>ID: {id}</Typography>
      <Typography variant="body1" sx={{ fontSize: '0.5rem', color: '#D3D3D3' }}>Status: {status}</Typography>
      <Typography variant="body1" sx={{ fontSize: '0.65rem', color: 'green' }}>Matches Found: {Matches_Found}</Typography>
      
    </Box>
    
  </Paper>
);

const Header = () => (
  <AppBar position="fixed" sx={{ 
    zIndex: (theme) => theme.zIndex.drawer + 1, 
    height: '32px', 
    width: '100%',  
    maxWidth: 'calc(100% - 116px)',   
    marginRight: '58px',   
    minHeight: '32px',
    backgroundColor: '#1d1e23' 
  }}>
    <Toolbar sx={{ justifyContent: 'space-between', minHeight: '32px', padding: '0px 16px', position: 'relative' }}>
      <Typography component="div" sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        fontSize: '11px', 
        color: '#D3D3D3', 
        textAlign: 'center', 
        gap: '16px', // Space between menu items
        marginTop: '-20px', // Move up the menu items a little
        flexShrink: 0, // Prevent shrinking to keep it at the left side
      }}>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>History</span>
        <span>Help</span>
        <span>Run</span>
      </Typography>
      <Typography variant="h6" component="div" sx={{ 
        position: 'absolute',
        left: '50%', // Center the title
        transform: 'translateX(-50%)', // Adjust to the left
        fontSize: '11px', 
        color: '#D3D3D3', 
        textAlign: 'center',
        marginTop: '-20px', // Move up the text a little
      }}>
        Still Image Analysis
      </Typography>
    </Toolbar>
  </AppBar>
);


  
  
  

  

  
  
const Dashboard = () => {
  const defaultGif = 'https://cdn.dribbble.com/users/3496409/screenshots/7749099/media/e28f5b7f3756d12dddc8a57e0f559219.gif';
  const displayPersonnel = [
      {
          image: 'dat//Z',
          name: 'John Doe',
          dob: '01/01/1970',
          pob: 'New York, USA',
          id: '123456789',
          status: 'Active',
          Matches_Found: '99.33% match',
      },
      {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRySTfSMt7UMZBaPCRsB8sKKN-w_ytkvIwaUg&s',
          name: 'Jane Smith',
          dob: '02/02/1980',
          pob: 'Los Angeles, USA',
          id: '987654321',
          status: 'Inactive',
          Matches_Found: '98.99% match',
      },
      {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSte7fcZMo6qc2vqI3qHa5JDY-snxE_9YwQvg&s',
          name: 'Chris Lee',
          dob: '03/03/1990',
          pob: 'Chicago, USA',
          id: '456789123',
          status: 'Active',
          Matches_Found: '94.1% match',
      },
  ];

  const [mainImage, setMainImage] = useState(defaultGif)
  const [recognitionInfo, setRecognitionInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [analysisStarted, setAnalysisStarted] = useState(false);
  const [fvlconizeStarted, setFvlconizeStarted] = useState(false);


  const handleImageSelect = (url) => {
      setMainImage(url);
      setFileUploaded(true); // Update the state when an image is selected
  };
  const handleFvlconizeClick = () => {
    setFvlconizeStarted(true);
};


  useEffect(() => {
    const processFacialRecognition = (image) => {
        setLoading(true);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    numberOfPeople: 3,
                });
                setLoading(false);
            }, 2000);
        });
    };

    if (mainImage && analysisStarted) {
      processFacialRecognition(mainImage).then(setRecognitionInfo);
    }
  }, [mainImage, analysisStarted]);

 const handleAnalyzeClick = async () => {
  setAnalysisStarted(true);
  if (mainImage) {
    setLoading(true);
    try {
      const metadata = await extractMetadata(mainImage);
      setRecognitionInfo(metadata);
    } catch (error) {
      console.error('Error extracting metadata:', error);
    } finally {
      setLoading(false);
    }
  }
};




  return (
      <ThemeProvider theme={theme}>
          <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
              <Header />
              <Sidebar onImageSelect={handleImageSelect} />
              <Box
                  component="main"
                  sx={{
                      mt: -5,
                      flexGrow: 1,
                      p: 2,
                      ml: 0,
                      mr: 1,
                  
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      color: '#D3D3D3',
                      display: 'flex',
                      flexDirection: 'column',
                      border: 'none',
                      outline: 'none',
                      boxShadow: 'none',
                  }}
              >
                  <Toolbar />
                  <Container maxWidth={false} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Grid container spacing={1} sx={{ flexGrow: 1 }}>
                          <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', position: 'relative' }}>
                              <Paper
                                  sx={{
                                      mt: -5,
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      flex: '1 1 auto',
                                      overflow: 'hidden',
                                      border: 'none',
                                      outline: 'none',
                                      boxShadow: 'none',
                                      backgroundColor: 'transparent',
                                  }}
                                  >
                       
                                 <img
  src={mainImage}
  alt="Main Content"
  style={{
      width: mainImage === defaultGif ? '150%' : '100%', 
      height: mainImage === defaultGif ? '500px' : '500px', // Keeping height same for the GIF
      borderRadius: '0',
      border: '0.01px solid black',
      outline: 'none',
      boxShadow: 'none',
      transform: mainImage === defaultGif ? 'translateY(-7%)' : 'none', // Center the gif when enlarged
  }}
/>

                              </Paper>
                              {/* Buttons */}
                          
    <Box sx={{ position: 'fixed',bottom: 310, left: '68%', transform: 'translateX(-80%)' }}>
    <Button variant="contained" color="primary" sx={{ marginRight: 1 }} onClick={handleAnalyzeClick}>
            Analyze
        </Button>
        <Button variant="contained" color="primary" onClick={handleFvlconizeClick}>
            Fvlconize
        </Button>
    </Box>

    <Paper
    sx={{
        backgroundColor: '#1d1e23',
        border: '-0.1px solid #1d1e23',
        minHeight: '300px',
        width: '785px',
        borderRadius: '0px',
        marginBottom: 0.25,
    }}
>
    <Box
        className="name"
        sx={{
            marginBottom: 0,
            backgroundColor: '#1d1e23',
        }}
    >
        {analysisStarted && (
            <>
                <Typography variant="h6">Image Analysis Results:</Typography>
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 40 }}>
                        <CircularProgress size={24} color="success" />
                    </Box>
                ) : (
                    recognitionInfo && (
                        <>
                        <Typography variant="body2" sx={{ color: '#006400' }}> ...  </Typography>
                        <Typography variant="body2" sx={{ color: '#006400' }}>Date image was taken: {recognitionInfo.dateTaken}</Typography>
            <Typography variant="body2" sx={{ color: '#006400' }}>Time image was taken: {recognitionInfo.timeTaken}</Typography>
            <Typography variant="body2" sx={{ color: '#006400' }}>Number of People Identified: {recognitionInfo.numberOfPeople}</Typography>
            <Typography variant="body2" sx={{ color: '#006400' }}>Size of image: {recognitionInfo.size}</Typography>
                        </>
                    )
                )}
            </>
        )}
    </Box>

    {analysisStarted && (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {[
            'https://d2jv02qf7xgjwx.cloudfront.net/accounts/363466/images/Screenshot_2024-06-22_at_3.18.50 AM.png',
            'https://d2jv02qf7xgjwx.cloudfront.net/accounts/363466/images/Screenshot_2024-06-22_at_3.03.15 AM.png',
            'https://d2jv02qf7xgjwx.cloudfront.net/accounts/363466/images/Screenshot_2024-06-22_at_3.19.05 AM.png',
            'https://d2jv02qf7xgjwx.cloudfront.net/accounts/363466/images/Screenshot_2024-06-22_at_3.19.13 AM.png',
        ].map((src, index) => (
            <Box
                key={index}
                sx={{
                    width: 'calc(25% - 8px)',
                    height: '110px',
                    margin: '0 4px',
                    marginTop: '40px', // Adjust this value as needed
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    backgroundColor: 'transparent', // No background color
                }}
                onClick={() => handleImageSelect(src)}
            >
                <img
                    src={src}
                    alt={`Additional Image ${index + 1}`}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover', // Ensures the image covers the box
                    }}
                />
            </Box>
        ))}
    </Box>
)}


</Paper>


                          </Grid>
                          <Grid item xs={4}>
    {/* Personnel Cards Container */}
    <Box
        sx={{
            mt: -1,
            border: '0.1px solid #636363',
            borderRadius: '0px',
            backgroundColor: '#1d1e23',
            overflowY: 'scroll',
            minHeight: '870px',
            width: '360px', // Adjust this width as needed
            mx: 'auto',    // Centers the Box horizontally
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Align items center horizontally
          
            position: 'relative',
        }}
    >
        {fvlconizeStarted && displayPersonnel.map((personnel, index) => (
    <PersonnelCard key={index} {...personnel} />
))}

    </Box>
</Grid>
                      </Grid>
                  </Container>
              </Box>
          </Box>
      </ThemeProvider>
  );
};

export default Dashboard;