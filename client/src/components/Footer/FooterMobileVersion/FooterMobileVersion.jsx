import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from '@mui/material'
import footerMobileVersionStyles from './Style'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'

const FooterMobileVersionComponent = () => {
  return (
    <>
      <Box sx={footerMobileVersionStyles.Box}>
        <Accordion>
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={<ChevronRightOutlinedIcon />}
          >
            <Typography sx={footerMobileVersionStyles.h4} variant="h4">
              О компании
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={footerMobileVersionStyles.p} variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              pariatur eligendi, laboriosam earum ad asperiores cumque,
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            expandIcon={<ChevronRightOutlinedIcon />}
          >
            <Typography sx={footerMobileVersionStyles.h4} variant="h4">
              Оплата
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={footerMobileVersionStyles.p} variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              pariatur eligendi, laboriosam earum ad asperiores cumque,
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            expandIcon={<ChevronRightOutlinedIcon />}
          >
            <Typography sx={footerMobileVersionStyles.h4} variant="h4">
              Магазины
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={footerMobileVersionStyles.p} variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              pariatur eligendi, laboriosam earum ad asperiores cumque,
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            aria-controls="panel4d-content"
            id="panel4d-header"
            expandIcon={<ChevronRightOutlinedIcon />}
          >
            <Typography sx={footerMobileVersionStyles.h4} variant="h4">
              Граффик работы
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={footerMobileVersionStyles.p} variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              pariatur eligendi, laboriosam earum ad asperiores cumque,
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  )
}

export default FooterMobileVersionComponent
