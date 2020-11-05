/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import "./../assets/style/main.css"


export default function Nav() {
    return (
       <div>
         <nav className="navbar navbar-expand-lg navbar-dark  fixed-top">
         {/* Brand Name */}
            <a  href ="#" className="navbar-brand">FandeMart</a>
            <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            {/* NAvigation Item List */}
            <div id="my-nav" class="collapse navbar-collapse">
               <ul class="navbar-nav mr-auto ml-auto">
                  <li class="nav-item active">
                      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Pages</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Features</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">shop</a>
                  </li>
               </ul>
           </div>

           {/* Navigation List Selector */}

           <div className="container position-absolute nav-bucket-list d-none">
                <div className="nav-bucket-list-inner">
                     <div className="nav-bucket-item">
                        <div className="head">Heading</div>
                        <ul>
                           <li>Product Item</li>
                           <li>Product Item</li>
                           <li>Product Item</li>
                           <li>Product Item</li>
                           <li>Product Item</li>
                        </ul>
                     </div>
                     <div className="nav-bucket-item">
                     <div className="head">Heading</div>
                        <ul>
                           <li>Product Item</li>
                           <li>Product Item</li>
                           <li>Product Item</li>
                           <li>Product Item</li>
                           <li>Product Item</li>
                        </ul>
                     </div>
                     <div className="nav-bucket-item">
                     <div className="head">Heading</div>
                        <ul>
                           <li>Product Item</li>
                           <li>Product Item</li>
                           <li>Product Item</li>
                           <li>Product Item</li>
                           <li>Product Item</li>
                        </ul>
                     </div>
                     <div className="nav-bucket-item">
                     <div className="head">Heading</div>
                        <ul>
                           <li>Product Item</li>
                           <li>Product Item</li>
                           <li>Product Item</li>
                           <li>Product Item</li>
                           <li>Product Item</li>
                        </ul>
                     </div>
                </div>
           </div>
        </nav>
       </div>
    )
}
