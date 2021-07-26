import React,{Fragment, useEffect,useState} from 'react';
import firebase from '../../utils/firebase'
import {
  useLocation
} from "react-router-dom";
import Cart from '../Cart/Cart'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { setData,  } from '../../Store/Actions/ProductAction';


import { useDispatch } from 'react-redux'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    width: 188,
    margin: '0 auto'
  },
});

export default function ProductDetails() {
  const [Product, setProduct] = useState();
  const [Details, setDetail] = useState();
  const [NumberOfItems, setNumberOfItems] = useState(0);
  const [Quantity, setQuantity] = useState(0);
  const dispatch = useDispatch()
          useEffect(() => {
          const products = firebase.database().ref('Products');
          products.on('value',(snapshot)=>{
            const productsList = snapshot.val();
            const List = [];
            for(let items of productsList.Electronics.Phones){
              List.push(items);
            }
              setProduct(List);
             
          })
          
  },[]);
  const Location = useLocation();
  const finalValue = Location.pathname.split("/")?.[2];

  useEffect(()=>{
     const DetailsOfProduct = Product && Product.filter((item)=>{
   return item.Brand === finalValue;
  })
    setDetail(DetailsOfProduct && DetailsOfProduct[0])
    },[Product])
    // setTimeout(()=>{},5000)
    
  const classes = useStyles();

  if(!Details){
    return null
  }

  return (
    <Fragment>
    <div style={{display:'flex',alignContent: 'center',justifyContent: 'center', alignItems:'center', flexDirection:'column', width:'100%',}}> 
    <div style={{width:'100%', marginBottom:'2rem'}}> 
    <Cart quantity={NumberOfItems} />
    </div>
    <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Details.Image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Details.Brand}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {Details.About}
          </Typography>
        </CardContent>
      </CardActionArea>
      <span style={{marginLeft: '0.8rem'}}>Quantity:</span> <input type='number' style={{width:'2rem'}} onChange={(e)=>{setQuantity(Number(e.target.value))}} />
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{setNumberOfItems((prev)=>{
          return Quantity;
        })
        dispatch(setData(Details))}}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
    </Fragment>
  );
}
