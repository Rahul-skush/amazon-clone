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
                id = {2312454543}
                title = "the lean startup" 
                price = {45.29}
                rating = {4}
                image = "https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg" />
                <Product 
                id = {2312454233}
                title = "Denim is a sturdy cotton warp-faced textile in which the weft passes under two or more warp threads.This twill weaving produces a diagonal ribbing that distinguishes it from cotton duck." 
                price = {213.56}
                rating = {3}
                image = "https://static01.nyt.com/images/2019/12/20/business/00amazonsqueeze6/merlin_165505728_920ec054-16a2-4c1d-9a73-069bfaf682ad-articleLarge.jpg?quality=75&auto=webp&disable=upscale" />
            </div>
            <div
            className = "home_row">
                <Product 
                id = {2312454123}
                title = "Denim is a sturdy cotton warp-faced textile in which the weft passes under two or more warp threads.This twill weaving produces a diagonal ribbing that distinguishes it from cotton duck." 
                price = {34.78}
                rating = {2}
                image = "https://www.junglescout.com/wp-content/uploads/2020/06/homepage-laptop-floating-mockup.png" />
               <Product 
                id = {2312454983}
                title = "the lean startup" 
                price = {67.47}
                rating = {4}
                image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_05_3362887_440x440_en_US.jpg" />
               <Product 
                id = {2312452303}
                title = "the lean startup" 
                price = {34.09}
                rating = {5}
                image = "https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg" />
             </div>
            <div
            className = "home_row">
                 <Product 
                id = "2314354543"
                title = "the lean startup" 
                price = {21.98}
                rating = {3}
                image = "https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_UL320_SR320,320_.jpg" />
            </div>
            </div>
        </div>
    )
}

export default Home
