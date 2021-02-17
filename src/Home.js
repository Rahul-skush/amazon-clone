import React from 'react'
import Product from './Product.js'
import './Home.css'
function Home() {
    return (
        <div className = 'home'>
            <div className="home_container">
                <img
                className = "home_image" 
                src = "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/09/amazon-2-1536071106.jpg"
                alt = "amazon headerimage"/>
            
            <div
            className = "home_row">
                <Product 
                id = "2312454543"
                title = "the lean startup" 
                price = "21.09"
                rating = {4}
                image = "https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg" />
                <Product 
                id = "2312124543"
                title = "Denim is a sturdy cotton warp-faced textile in which the weft passes under two or more warp threads.
                         This twill weaving produces a diagonal ribbing that distinguishes it from cotton duck." 
                price = "21.09"
                rating = {3}
                image = "https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg" />
            </div>
            <div
            className = "home_row">
                <Product 
                id = "2312452443"
                title = "Denim is a sturdy cotton warp-faced textile in which the weft passes under two or more warp threads.
                         This twill weaving produces a diagonal ribbing that distinguishes it from cotton duck." 
                price = "21.09"
                rating = {2}
                image = "https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg" />
               <Product 
                id = "2132454543"
                title = "the lean startup" 
                price = "21.09"
                rating = {4}
                image = "https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg" />
               <Product 
                id = "2312454233"
                title = "the lean startup" 
                price = "21.09"
                rating = {5}
                image = "https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg" />
             </div>
            <div
            className = "home_row">
                 <Product 
                id = "2314354543"
                title = "the lean startup" 
                price = "21.09"
                rating = {3}
                image = "https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg" />
            </div>
            </div>
        </div>
    )
}

export default Home
