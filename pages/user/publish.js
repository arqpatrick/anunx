import { useState } from 'react'
import { 
  Box, 
  Button, 
  Container, 
  IconButton, 
  Select, 
  TextField, 
  Typography 
} from '@material-ui/core'

import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core/styles'
import { DeleteForever } from '@material-ui/icons'

import TemplateDefault from '../../src/templates/Default'

// CSS
const useStyles = makeStyles((theme) => ({
  mask: {},
  mainImage: {},
  container: {
    padding: theme.spacing(8, 0, 6)
  },
  boxContainer: {
    paddingBottom: theme.spacing(3),
  },
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },
  thumbsContainer: {
    display: 'flex',
    flexWrap: 'wrap', // wrap para quebrar para a linha de baixo as imagens upadas
    marginTop: 15,
  },
  dropzone: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    width: 200,
    height: 150,
    margin: '0 15px 15px 0',
    backgroundColor: theme.palette.background.default,
    border: '2px dashed black'
  },
  thumb: {
    position: 'relative',
    width: 200,
    height: 150,
    backgroundSize: 'cover',
    margin: '0 15px 15px 0',
    backgroundPosition: 'center center',

    '& $mainImage': {
      backgroundColor: 'green',
      padding: '6px 10px',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },

    '&:hover $mask': {
      display: 'flex',
    },

    '& $mask': {
      display: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      width: '100%',
      height: '100%',
    }
  },
}))


const Publish = () => {
  const classes = useStyles() // CSS
  const [files, setFiles] = useState([])

  // DROPZONE

  const { getRootProps, getInputProps } = useDropzone({ // recebe duas propriedades
    accept: 'image/*', // quais arquivos serão aceitos

    onDrop: (acceptedFile) => {  // função que será executada sempre que receber um arquivos
      // console.log(acceptedFile) // teste para "ver" o arquivo

      const newFiles = acceptedFile.map(file => { // map percorrendo cada item do array onDrop
        return Object.assign(file, { // Object.assign cria um novo objeto para cada item
          preview: URL.createObjectURL(file) // URL.createObjectURL cria um URL para cada o arquivo
        })
      })

      setFiles([ // armazena o newFiles em setFiles
          ...files, // spread para não resetar as imagens quando upar novas
          ...newFiles,
      ]) 

    }
  })

  // -FIM- DROPZONE

  // CONSTRUÇÃO DA PÁGINA

  return (
    <TemplateDefault>
      
      {/* CONTAINER TÍTULO */}
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" >
          Publicar Anúncio
        </Typography>
        <Typography component="h5" variant="h5" align="center" color="textPrimary">
          Quanto mais detalhado, melhor!
        </Typography>
      </Container>

      {/* CONTAINER BOX FORMULARIO */}
      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary">
            Título do Anúncio
          </Typography>
          <TextField 
            label="ex.: Bicicleta Aro 18 com garantia"
            size="small"
            fullWidth
          />
          <br /><br />
          <Typography component="h6" variant="h6" color="textPrimary">
            Categoria
          </Typography>  
          <Select
            native
            value=""
            fullWidth
            onChange={() => {}}
            inputProps={{
              name: 'selection',
            }}
          >
            <option value="">Selecione</option>
            <option value={1}>Bebê e Criança</option>
            <option value={2}>Agricultura</option>
            <option value={3}>Moda</option>
            <option value={4}>Carros, Motos e Barcos</option>
            <option value={5}>Serviços</option>
            <option value={6}>Lazer</option>
            <option value={7}>Animais</option>
            <option value={8}>Moveis, Casa e Jardim</option>
            <option value={9}>Imóveis</option>
            <option value={10}>Equipamentos e Ferramentas</option>
            <option value={11}>Celulares e Tablets</option>
            <option value={12}>Esporte</option>
            <option value={13}>Tecnologia</option>
            <option value={14}>Emprego</option>
            <option value={15}>Outros</option>
          </Select>
        </Box>
      </Container>
    
      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary">
            Imagens
          </Typography>
          <Typography component="div" variant="body2" color="textPrimary">
            A primeira imagem é a foto principal do seu anúncio.
          </Typography>
          <Box className={classes.thumbsContainer}>

            {/* AREA DE ARQUIVOS ARRASTÁVEL/CLICÁVEL DE ARQUIVO - REACT-DROPZONE */}

            <Box className={classes.dropzone} {...getRootProps()}> {/* spread do getRootProps, para retornar props pro react-dropzone */}
              <input {...getInputProps()} /> {/* input para selecionar arquivos do react-dropzone */}
              <Typography variant="body2" color="textPrimary">
                Clique para adicionar ou arraste a imagem aqui.
              </Typography>
            </Box>

            {/* -FIM- AREA DE ARQUIVOS ARRASTÁVEL/CLICÁVEL DE ARQUIVO - REACT-DROPZONE */}


            {/* LOOP PARA PERCORRER OS ARQUIVOS UPADOS */}

            {
              files.map((file, index) => ( // file, index para reconhecer qual é o primeiro item

                <Box
                  key={file.name}
                  className={classes.thumb}
                  style={{ backgroundImage: `url(${file.preview})` }}
                >

                  {/* RECONHECER QUEM É O PROMEIRO ARQUIVO */}

                  {
                    index === 0 ? // se o index for 0 = o primeiro
                      <Box className={classes.mainImage}>
                        <Typography variant="body2" color="secondary">
                          Principal
                        </Typography>
                      </Box>
                      : null // senão, nulo
                  }

                  {/* -FIM- RECONHECER QUEM É O PROMEIRO ARQUIVO */}
                  

                  <Box className={classes.mask}>
                    <IconButton color="secondary">
                      <DeleteForever fontSize="large" />
                    </IconButton>
                  </Box>
                </Box>
                
              ))
            }


          </Box>
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary">
            Descrição
          </Typography>
          <Typography component="div" variant="body2" color="textPrimary">
            Escreva os detalhes do que está vendendo
          </Typography>
          <TextField
            multiline
            rows={6}
            variant="outlined"
            fullWidth
          />
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
            Dados de Contato
          </Typography>
          <TextField
            label="Nome"
            variant="outlined"
            size="small"
            fullWidth
          />
          <br /><br />
          <TextField
            label="E-mail"
            variant="outlined"
            size="small"
            fullWidth
          />
          <br /><br />
          <TextField
            label="Telefone"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box textAlign="right">
          <Button variant="contained" color="primary">
            Publicar Anúncio
          </Button>
        </Box>
      </Container>
    </TemplateDefault>
  )
}

export default Publish