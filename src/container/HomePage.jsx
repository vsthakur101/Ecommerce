import HomePage from '../components/Home/Home'
import React,{useEffect,useState} from 'react';
import firebase from '../utils/firebase'

function LandingPage() {
  const [allProducts, setallProducts] = useState();
        useEffect(() => {
          const products = firebase.database().ref('Products');
          products.on('value',(snapshot)=>{
            const productsList = snapshot.val();
            const List = [];
            for(let items of productsList.Electronics.Phones){
              List.push(items);
            }
              setallProducts(List);
             
          })
          
  },[]);

  return (
    <div className="App">
    {
      allProducts && allProducts.map((product, index)=>{
               return <HomePage image={product.Image} title={product.About} name={product.Brand} key={index} />
      })
    }

    </div>
  );
}

export default LandingPage;
