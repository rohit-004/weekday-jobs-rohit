import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Link,
} from "@mui/material";
import { Box } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import BoltIcon from "@mui/icons-material/Bolt";


const BlurredCirclesIcon = () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#ccc', marginRight: '8px', filter: 'blur(2px)' }}></div>
      <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#ccc', filter: 'blur(2px)' }}></div>
    </div>
  );

const JobCard = (props) => {
  const [openDialog, setOpenDialog] = useState(false);
  const aboutCompanyContent = props.job_description;

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Card variant="outlined" sx={{ p: 2, width: 550 }}>
        <CardContent>
          <Box
            sx={{
              borderRadius: "16px", // Adjust the value as needed
              border: "1px solid #ccc",
              display: "inline-block",
              padding: "4px 8px",
              marginBottom: "10px",
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img src="/" alt="Hourglass" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
            <Typography variant="body2" color="textSecondary">
              Posted 10 days ago
            </Typography>
          </div>
          </Box>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              src="company_logo_url"
              alt="Company Logo"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <div>
              <Typography variant="h6" component="div">
                {props.job_title}
              </Typography>
              <div>
                <Typography variant="subtitle1">
                  {props.company_name}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {props.location}
                </Typography>
              </div>
            </div>
          </div>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 1 }}>
            Estimated Salary: ₹ 18-35 LPA{" "}
            <CheckBoxIcon sx={{ color: "green" }} />
          </Typography>
          <Typography variant="h5" color="ActiveBorder">
            About Company:
          </Typography>
          <Typography variant="h6" color="ActiveBorder">
            About us
          </Typography>
          <Typography variant="body1">
            {aboutCompanyContent.slice(0, 550)}...{" "}
            <Button onClick={handleDialogOpen} color="primary">
              View More
            </Button>
          </Typography>
          <Typography variant="body1" color="ButtonText" sx={{ mt: 1 }}>
            Minimum Experience <br></br> {props.experience_required}
          </Typography>
          <Link
            href={props.apply_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, width: "100%" }}
              startIcon={<BoltIcon />}
            >
              Easy Apply
            </Button>
          </Link>
          <Button variant="contained" color="primary" sx={{ mt: 2, width: '100%' }} startIcon={<BlurredCirclesIcon />}>
            Unlock Referral Ask
          </Button>
        </CardContent>
      </Card>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>About Company</DialogTitle>
        <DialogContent>
          <Typography>{aboutCompanyContent}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default JobCard;
