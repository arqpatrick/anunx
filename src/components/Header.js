import React, { useState } from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from '@material-ui/core'

import { AccountCircle } from '@material-ui/icons'


// CSS

const useStyles = makeStyles((theme) => ({

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userName: {
    marginLeft: 6,
  },
  divider: {
    margin: '8px 0',
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles();

  // 
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  // transforma e.currentTarget em boleano
  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Anunx
            </Typography>
            <Link href="/user/publish" passHref>
              <Button color="inherit" variant="outlined">
                Anunciar e Vender
              </Button>
            </Link>

          {/* CAMPO DE USUÁRIO SUPERIOR */}

            <IconButton 
              color="secondary" 
              onClick={(e) => setAnchorUserMenu(e.currentTarget)} // pega o evento do click
            >
              {
                true === false
                ? <Avatar src="" />
                : <AccountCircle />
              }
              <Typography 
                variant="subtitle2" 
                color="secondary" 
                className={classes.userName}
              >
                Patrick Kottwitz
              </Typography>
            </IconButton>

          {/* -FIM- CAMPO DE USUÁRIO SUPERIOR */}

          {/* MENU */}         

            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)} // vai mandar o null para o openUserMenu transformar em false
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Link href="/user/dashboard" passHref>
                <MenuItem>Meus anúncios</MenuItem>
              </Link>
              <Link href="/user/publish" passHref>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>
              <Divider className={classes.divider} />
              <MenuItem>Sair</MenuItem>
            </Menu>

          {/* -FIM- MENU */} 

          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
