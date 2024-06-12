import React, { useEffect, useRef, useState } from "react";
import "./Item.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Item = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const imgShowcaseRef = useRef(null);
  const images = [
    "/img/iphone4.png",
    "/img/iphone1.png",
    "/img/iphone5.png",
    "/img/iphone3.png",
    "/img/iphone2.png",
  ];

  useEffect(() => {
    const slideImage = () => {
      const displayWidth =
        imgShowcaseRef.current.querySelector("img").clientWidth;
      imgShowcaseRef.current.style.transform = `translateX(${
        -selectedImage * displayWidth
      }px)`;
    };

    slideImage();
    window.addEventListener("resize", slideImage);

    return () => {
      window.removeEventListener("resize", slideImage);
    };
  }, [selectedImage]);

  return (
    <div className="card-wrapper mt-5 sm:mt-0">
      <div className="card">
        {/* card left */}
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase" ref={imgShowcaseRef}>
              {images.map((img, index) => (
                <img key={index} src={img} alt="shoe image" />
              ))}
            </div>
          </div>
          <div className="img-select">
            {images.map((img, index) => (
              <div className="img-item" key={index}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedImage(index);
                  }}
                  data-id={index + 1}
                >
                  <img src={img} alt="shoe image" />
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* card right */}
        <div className="product-content">
          <h2 className="product-title">iPhone 15 Pro Max Blue Titanium</h2>
          <a
            href="https://www.apple.com/shop/buy-iphone/iphone-15-pro"
            target="_blank"
            className="product-link"
          >
            Visit Apple Store
          </a>
          <div className="product-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span> 4.7 (21)</span>
          </div>

          <div className="product-price">
            <p className="last-price">
              Old Participation Fee: <span>$7.00</span>
            </p>
            <p className="new-price">
              New Participation Fee: <span>$1.00 </span>
            </p>
          </div>

          <div className="product-detail">
            <h2>About this item: </h2>
            <p>
              Your new iPhone 15 Pro Max. Just the way you want it. We encourage
              you to use any compatible USB‑C power adapter. If you need a new
              Apple power adapter or headphones, they are available for
              purchase.
            </p>
            <p>
              <span className="for-more"> Warning: </span>
              By purchasing this product, you will be entered into the lottery
              only 1 time. All our draws are made with state assurance. Do you
              have any questions?{" "}
              <a
                href="https://wa.me/9005394274607"
                target="_blank"
                className="border-b border-[#DB5655]"
              >
                Contact us on WhatsApp
              </a>
            </p>
            <ul>
              <li>
                Color: <span>Blue</span>
              </li>
              <li>
                Storage: <span>512 GB</span>
              </li>
              <li>
                Available: <span>in stock</span>
              </li>
              <li>
                Category: <span>Mobile Phone</span>
              </li>
              <li>
                Shipping Area: <span>All over the world</span>
              </li>
              <li>
                Shipping Fee: <span>Free</span>
              </li>
              <li>
                Maximum Participants: <span>999</span>
              </li>
            </ul>
          </div>

          <div className="purchase-info">
            <input type="hidden" min="0" defaultValue="1" />
            <a type="button" href="cart-detail" className="btn">
              Add to Cart <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
