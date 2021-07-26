import React,{useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { deleteCartItem  } from '../../Store/Actions/ProductAction';


import { useSelector,useDispatch } from 'react-redux'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: '1rem'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    margin:' 0 4rem 0 0',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

 function CartPage(props) {
  const [deletedProduct, setDeletedProduct] = useState(false);
  const count = useSelector(state => state.product)
  const classes = useStyles();
  const dispatch = useDispatch();
  if(!count.length){
    return  null;
  };

  return (
    <div>
    {
      count.map(p=> (
        <Card className={classes.root} key={p.Id}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {p?.Brand ? p.Brand : 'Add Some Product'}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {p?.Price ? p.Price : '0'}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        { p?.Brand ?
          <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={()=>{
          dispatch(deleteCartItem(p.Id))}}
      >
        Delete
      </Button> : ''
        }
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={p?.Image ? p.Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbRau4KXNKRF9GlWLddy_24LrMWRbbo2Vq5g&usqp=CAU" }
        title="Brand Image"
      />
    </Card>))
    }
      
    </div>);
}
export default CartPage;