import React, { useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/Endepoints'
import Product from '../../components/Product/Product'
import styles from './result.module.css'
import ProductCard from '../../components/Product/ProductCard'
function Results() {
  const {categoryName} =useParams()
  console.log(categoryName )
   const [results, setresults]= useState([])
  useEffect(()=>{
    axios.get(`${productUrl}/products/category/ ${categoryName}`)
    .then((res)=>{
      console.log(res)
      setresults(res.data)
    }) .catch((err)=>{
      console.log(err,"error")
    })
  }, [])
  
  return (
    <LayOut>
      <section>
      <h1 style={{padding:"30px"}}>Results</h1>
      <p style={{padding:"30px"}}>Catagory/ {categoryName}</p>
      <hr />
  
      <div className={styles.products_container}>
          {results?.map((product) => (
            <ProductCard 
              key={Product.id} 
              product={product} 
            />
          ))}
        </div>

      </section>
    
    </LayOut>
   
  )
}

export default Results
















// import React, { useEffect, useState } from 'react';
// import LayOut from '../../components/LayOut/LayOut';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { productUrl } from '../../Api/Endepoints';
// import ProductCard from '../../components/Product/ProductCard';
// import styles from './result.module.css'; // Ensure you have the CSS module if you're using one.

// function Results() {
//   const { catagoryName } = useParams();
//   console.log(catagoryName);
  
//   const [results, setResults] = useState([]); // Use camelCase for state

//   useEffect(() => {
//     axios.get(`${productUrl}/products/category/${catagoryName}`) // Use backticks
//       .then((res) => {
//         console.log(res);
//         setResults(res.data); // Use setResults to update state
//       })
//       .catch((err) => {
//         console.log(err, "error");
//       });
//   }, [catagoryName]); // Add catagoryName as a dependency

//   return (
//     <LayOut>
//       <section>
//         <h1 style={{ padding: "30px" }}>Results</h1>
//         <p style={{ padding: "30px" }}>Category/ {catagoryName}</p>
//         <hr />
//         <div className={styles.products_container}>
//           {results?.map((Product) => (
//             <ProductCard 
//               key={Product.id} // Ensure you use the correct identifier
//               product={Product} // Pass the Product prop correctly
//             />
//           ))}
//         </div>
//       </section>
//     </LayOut>
//   );
// }

// export default Results;