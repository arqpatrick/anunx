import { 
  Card as CardMUI, 
  CardMedia, 
  CardContent,
  CardActions, 
  Typography,
  makeStyles,
} from '@material-ui/core'


// ESTILOS
const useStyles = makeStyles(() => ({

  cardMedia: {
    paddingTop: '56%',
  },

}))
// -FIM- ESTILOS

const Card = ({ image, title, subtitle, actions }) => {
  const classes = useStyles()

  return (
    <CardMUI>
      <CardMedia
        className={classes.cardMedia}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>
          {subtitle}
        </Typography>
      </CardContent>
      {
        actions
          ? (
            <CardActions>
              {actions}
            </CardActions>
          ) : null
      }
      
    </CardMUI>
  )
}

export default Card