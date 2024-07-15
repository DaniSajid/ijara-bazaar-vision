import CarouselComp from "../carousel/CarouselComp"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaidIcon from '@mui/icons-material/Paid';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import WatchIcon from '@mui/icons-material/Watch';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import { Button } from "@mui/material";
const HomeComp = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
<>
<CarouselComp/>
<div className="container px-4 py-2" id="hanging-icons">
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <LocalShippingIcon sx={{ fontSize: 40 }}/>
        </div>
        <div>
          <h3 className="fs-4 text-body-emphasis">All Pakistan Shipping</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" className="btn btn-primary">
            Primary button
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis  d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
         <PaidIcon sx={{ fontSize: 40 }}/>
        </div>
        <div>
          <h3 className="fs-4 text-body-emphasis">Money Back Gurantee</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" className="btn btn-primary">
            Primary button
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <WorkHistoryIcon sx={{ fontSize: 40 }} />
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">24/7 Support</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" className="btn btn-primary">
            Primary button
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="container my-3">
  <div className="row gx-5 featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1 my-3"><span className="text-body-secondary">Why You Choose Ijara Bazaar</span></h2>
        <h2 className="featurette-heading fw-normal lh-1">RENT A PRODUCT FROM LOCAL OWNER IN THE CITY</h2>
         
        <p className="lead"> Our carefully curated selection features a range of luxury and designer watches that cater to every style and occasion. From classic timepieces to modern smartwatches, we have something for everyone. Enjoy the elegance and functionality of high-end watches without the hefty price tag. Rent your favorite watch for a fraction of the cost of buying it.Switch up your style as often as you like. With our flexible rental plans, you can sport a new watch for every event, keeping your look fresh and exciting.</p>
        <Button variant="outlined">Explore More</Button>
      </div>
      <div className="col-md-5 order-md-1">
        <img src="/images/banner.jpg" className="img-banner" alt="" />
      </div>
    </div>
    </div>
  <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab icon={<WatchIcon/>} label="Watch" value="1" />
            <Tab icon={<AppShortcutIcon/>} label="Mobile Phone" value="2" />
            <Tab icon={<ControlCameraIcon/>} label="Drone" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
</>
  )
}

export default HomeComp
