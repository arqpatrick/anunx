import { 
  Avatar,
  Box, 
  Card, 
  CardHeader, 
  CardMedia, 
  Chip, 
  Container, 
  Grid, 
  Typography
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'

import TemplateDefault from '../../src/templates/Default'


const useStyle = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  productName: {
    margin: '15px 0',
  },
  price: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    height: '100%',
  },
  cardMedia: {
    paddingTop: '56%'
  },
}))

const Product = () => {

  const classes = useStyle()

  return (
    <TemplateDefault>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box className={classes.box}>

              <Carousel
                autoPlay={false}
                animation="slide"
                navButtonsProps={{
                  style: {
                    //backgroundColor: 'cornflowerblue',
                    borderRadius: 0,
                    color: 'white'
                  }
                }}
              >

                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random?a=1"
                    title="Título da imagem"
                    />
                </Card>

                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random?a=2"
                    title="Título da imagem"
                    />
                </Card>

              </Carousel>



            </Box>

            <Box className={classes.box} textAlign="left">
              <Typography component="span" variant="caption">
                Publicado 16 junho de 2021
              </Typography>
              <Typography component="h4" variant="h4" className={classes.productName}>
                Jaguar XE 2.0 D R-Sport Aut.
              </Typography>
              <Typography component="h4" variant="h4" className={classes.price}>
                R$ 50.000,00
              </Typography>
              <Chip label="Categoria" />
            </Box>

            <Box className={classes.box} textAlign="left">
              <Typography component="h6" variant="h4">
                Descrição
              </Typography>
              <Typography component="p" variant="body2">
              O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
              </Typography>              
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Card elevation={0} className={classes.box}>
              <CardHeader
                avatar={
                  <Avatar>P</Avatar>
                }
                title="Patrick Kottwitz"
                subheader="patrick@gmail.com"
              />
              <CardMedia
                image="https://source.unsplash.com/random"
                title="Patrick Kottwitz"
              />
            </Card>

            <Box className={classes.box} >
              <Typography component="h6" variant="h4">
                Localização
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>

  )
}

export default Product