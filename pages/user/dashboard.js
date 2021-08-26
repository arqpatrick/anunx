import { 
  Button,
  Container, 
  Grid, 
  Typography, 
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'

// ESTILOS
const useStyles = makeStyles((theme) => ({

  buttonAdd: {
    margin: '30px auto',
    display: 'block'
  },

}))
// -FIM- ESTILOS

export default function Home() {
  // chama a função para utilizar os estilos
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center">
          Meus Anúncios
        </Typography>
        <Button variant="contained" color="primary" className={classes.buttonAdd}>
          Publicar novo anúncio
        </Button>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={4}>

          {/* INICIO DO CARD */}

          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'} 
              title="Produto X"
              subtitle="R$ 70,00"
              actions={
                <>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                </>
              }
            />   
          </Grid>

          {/* -FIM- DO CARD */}

          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'} 
              title="Produto X"
              subtitle="R$ 70,00"
              actions={
                <>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                </>
              }
            />   
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'} 
              title="Produto X"
              subtitle="R$ 70,00"
              actions={
                <>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                </>
              }
            />   
          </Grid>

        </Grid>
      </Container>
    </TemplateDefault>
  )
}