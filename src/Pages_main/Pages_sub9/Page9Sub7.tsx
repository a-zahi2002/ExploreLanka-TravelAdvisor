import React from "react";
<<<<<<< HEAD
import "../Pages_Sub1.css"; 
=======
import "../Pages_Sub1.css"; // Assuming your updated styles are in this file
>>>>>>> d6550059c74a2d763d1a75a04f1149e6325f25e6
import alfarmosque01 from "/src/assets/western_img/alfar_mosque01.jpeg";
import alfarmosque02 from  "/src/assets/western_img/alfar_mosque02.jpg";
import alfarmosque03 from "/src/assets/western_img/alfar_mosque03.jpeg";



const Page9Sub7: React.FC = () => {
  const handleClose = () => {
<<<<<<< HEAD
   
    console.log("Page closed");
    window.history.back();
=======
    // Logic to close the page (e.g., navigate back or hide the component)
    console.log("Page closed");
    window.history.back(); // This will take the user back to the previous page.
>>>>>>> d6550059c74a2d763d1a75a04f1149e6325f25e6
  };

  return (
    <div className="subpage-container">
      {" "}
<<<<<<< HEAD
      
      <div className="content-container">
       
=======
      {/* Use scoped class name */}
      <div className="content-container">
        {/* Close Button */}
>>>>>>> d6550059c74a2d763d1a75a04f1149e6325f25e6
        <button className="close-button" onClick={handleClose}>
          ✕
        </button>

<<<<<<< HEAD
        
        <h1>Jami Ul-Alfar Mosque</h1>

       
=======
        {/* Title */}
        <h1>Jami Ul-Alfar Mosque</h1>

        {/* Image Section - Upper Half */}
>>>>>>> d6550059c74a2d763d1a75a04f1149e6325f25e6
        <div className="image-section">
         <img src={alfarmosque01} alt="Jami Ul-Alfar Mosque View 01"/>
         <img src={alfarmosque02} alt="Jami Ul-Alfar Mosque View 02"/>
         <img src={alfarmosque03} alt="Jami Ul-Alfar Mosque View 03"/>
          
        </div>

<<<<<<< HEAD
        
        <div className="lower-section">
        
=======
        {/* Lower Section (60:40 Split) */}
        <div className="lower-section">
          {/* Left - 60% for Description */}
>>>>>>> d6550059c74a2d763d1a75a04f1149e6325f25e6
          <div className="description">
            <p>
            Jami Ul-Alfar Mosque, also known as the Red Mosque, is one of the most striking landmarks in Colombo. Located in the bustling Pettah area, this mosque is renowned for its distinctive red and white striped facade, a unique blend of Indo-Saracenic architecture. Built in 1909, the mosque has become a spiritual and architectural icon in the city, attracting both worshippers and visitors with its bold design and historical significance.<br />The mosque’s towering minarets and vibrant exterior are hard to miss amid the crowded streets of Pettah’s busy markets. It serves as an important place of worship for the local Muslim community, and though non-Muslims cannot enter the prayer halls, they are welcome to admire the building's intricate architecture from the exterior.<br />Its location in the heart of Colombo makes it easy to explore the surrounding area, where vibrant markets offer a variety of goods ranging from textiles to spices.
            </p>
          </div>

<<<<<<< HEAD
          
=======
          {/* Right - 40% for Additional Details */}
>>>>>>> d6550059c74a2d763d1a75a04f1149e6325f25e6
          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Pettah, Colombo, Sri Lanka</li>
              <li>Best Time to Visit: November to April</li>
              <li>
                <a
                  href="https://www.google.com/search?sca_esv=b8f7a68888e6939d&sxsrf=ADLYWIIT5M16F2IU7yQ9gi6BI8mXZxV48w:1729692251048&q=beira+lake+colombo&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J5fCQuDw5vrzPt_cVO2GgWUj9lYp6rkuKNKs7T0vX7Q8Lk7PDqB_d8U_Xw31dTwojDY7cqVsV6GpboX7KXB_SoxUQ1YD3A4nRZp1XtoYQXZ-2Nd4CommC3EfX_t35MfEMa0mC_w&sa=X&ved=2ahUKEwjP18bh1aSJAxV5hq8BHWACFHUQ0pQJegQIExAB&biw=1536&bih=730&dpr=1.25#eim=CAEQDhoRNi45MjQ3MjY0NTAwMDAwMjgiETc5Ljg1MzU4NDI5OTk5OTk3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Pettah Market</li>
              <li>Wolvendaal Church</li>
              <li>Colombo Dutch Museum</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9Sub7;
