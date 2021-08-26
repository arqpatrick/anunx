import { Box, Container, Grid, Link, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),

    [theme.breakpoints.up('sm')]: { // para cima de small aplica a regra seguinte
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    }
  }
}))


const Footer = () => {
  const classes = useStyles()


  return (
    <Container maxWidth="lg" component="footer" className={classes.footer}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#">
              <Typography color="textSecondary" variant="subtitle1">
                <a>Ajuda e Contato</a>
              </Typography>
            </Link> 
          </Box >
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#">
              <Typography color="textSecondary" variant="subtitle1">
                <a>Dicas de segurança</a>
              </Typography>
            </Link> 
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#">
              <Typography color="textSecondary" variant="subtitle1">
                <a>Anunciar e Vender</a>
              </Typography>
            </Link> 
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#">
              <Typography color="textSecondary" variant="subtitle1">
                <a>Plano profissional</a>
              </Typography>
            </Link> 
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer