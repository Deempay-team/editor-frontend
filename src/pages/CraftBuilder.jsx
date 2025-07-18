// pages/index.js
import React, {useState, useEffect} from 'react';
import {Typography, Button as MaterialButton, Paper, Grid, makeStyles} from '@mui/material';
import {Editor, Frame, Element} from "@craftjs/core";


import { Toolbox } from '../component/craft/Toolbox';
import { SettingsPanel } from '../component/craft/SettingsPanel';
import { Topbar } from '../component/craft/Topbar';


import { Container } from '../component/craft/user/Container';
import { Button } from '../component/craft/user/Button';
import { Card, CardTop, CardBottom } from '../component/craft/user/Card';
import { Text } from '../component/craft/user/Text';


export default function CraftBuilder() {
  const [enabled, setEnabled] = useState(true);
  const [json, setJson] = useState(null);

  // // Load save state from server on page load
  // useEffect(() => {
  //   const stateToLoad = await fetch("your api to get the compressed data");
  //   const json = lz.decompress(lz.decodeBase64(stateToLoad));
  //   setJson(json);
  // }, []);

    return (
        <div className='w-[70%] mx-auto my-10'>
          <Typography variant="h5" align="center">Basic Page Editor</Typography>
            <Editor resolver={{Card, Button, Text, Container, CardTop, CardBottom}}> 
              <Topbar />
              <Grid container spacing={3}>
                <Grid item xs>
                  <Frame>
                    <Element is={Container} padding={5} background="#eee" canvas>
                      <Card />
                      <Button size="small" variant="outlined">Click</Button>
                      <Text size="small" text="Hi world!" />
                      <Element is={Container} canvas padding={6} background="#999">
                        <Text size="small" text="It's me again!" />
                      </Element>
                    </Element>
                  </Frame>
                </Grid>
                <Grid item xs={3}>
                  <Paper >
                      <Toolbox />
                      <SettingsPanel />
                  </Paper>          
                </Grid>
              </Grid>
            </Editor>
        </div>
      );
}
