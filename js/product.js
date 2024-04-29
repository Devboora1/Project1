let arrowKeys = document.getElementsByClassName("arrowKey");
function sliderEventHandler( element) {
    
    element.addEventListener('click', function(e){
        
    let slideValue = this.getAttribute('slidevalue');
    let productNo = parseInt(this.getAttribute('productNo'));
    
    if (slideValue>2 || slideValue<1){
        slideValue=1;

    }
    e.stopPropagation();

  showSlides(slideIndex += parseInt(slideValue),productNo);
    });
  }
Array.from(arrowKeys).forEach(sliderEventHandler);

let slideIndex = 1;
showSlides(slideIndex,2);
showSlides(slideIndex,3);


// Thumbnail image controls
function currentSlide(n) {
    let dataArr = n?.split('-');
    if(!dataArr || dataArr.length<1) return;
    let productNo = parseInt(dataArr[0]);
    n = parseInt(dataArr[1])
  showSlides(slideIndex = n,productNo);
}

function showSlides(n,productNo) {

  let i;
  let slides = document.getElementsByClassName(`mySlides-${productNo}`);
  
  let dots = document.getElementsByClassName(`dot-${productNo}`);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


let dataMap = {
    "1":{
        name: "<h3><b>Name: </b> Bioferganic ®  Liquid - (PGP) Plant Growth Promoter </h3>",
        introduction: `<p><b> Product Information: </b> Bioferganic ® – is a modern organic liquid manure for 
        environment friendly and traditional farming, based on HUMAT – potassium salts of humic and fulvic acids. This is 
        an extract of BDC which uses natural Bio and animals waste. The use of Bioferganic ® allows not only to increase the 
        yield of various agricultural crops by 15-55% (and higher), but also to improve the quality, to shorten the 
        maturation period, to increase the shelf life. In addition, it is also possible to reduce the rates of application 
        of mineral fertilizers and pesticides by 10-30%. It is also very important that Bioferganic® significantly increases 
        the resistance of plants to various types of diseases, especially fungal ones. <br><br>
        <b>INGREDIENTS:</b> Humic, fulvic acids and other organic acids (oxalic, formic and others). Organic Nitrogen, 
        Phosphorus, Potassium.
        </p>`,

        // introduction: `<p><b> Product Information: </b> BioFerganicTM Plant Booster – is a modern organic liquid manure for environment friendly and traditional 
        // farming, based on HUMAT – potassium salts of humic and fulvic acids. This is an extract of BDC which uses natural Bio and animals waste. 
        // The use of BioFerganicTM allows not only to increase the yield of various agricultural crops by 15-55% (and higher), but also to improve the quality, to 
        // shorten the maturation period, to increase the shelf life. In addition, it is also possible to reduce the rates of application of mineral fertilizers and 
        // pesticides by 10-30%. It is also very important that BioFerganicTM significantly increases the resistance of plants to various types of diseases, 
        // especially fungal ones.
        // </p>`,
        advantages: `<b> Advantages: </b>
        <li> Reduce fruit and flower shedding. </li>
        <li> Increase in production. </li>
        <li> Increase in Greenery. </li>
        <li> Helps plants grow by strengthening their stems. </li>
        <li> Brighten the colors of flowers and leaves. </li>
        <li> Increases plant's interim ability to fight diseases. </li>
        <li> Increases ability to tolerate extreme cold (frost). </li>
        <li> Strengthen the crop branch. </li>
        <li> Maintain the quality of the plant in high heat. </li>`,
        imageUrl:"./images/bottle.png",
        generalInstructions: `<b>GRNERAL INSTRUCTION FOR USE. </b> <br> <br>
        PRE-TREATMENT OF SEEDS: <br>
        <li> <u>For cereals, rice, corn, etc: </u> <br>
        &nbsp;&nbsp;&nbsp; 1) Preparation of the Spray Material: 100 ml per 10 L of water. <br>
        &nbsp;&nbsp;&nbsp; 2) Spray Material Discharge: 10 L per 1 ton of the seeds </li>
        <li> <u> For apple, pear, cherry, plum: </u> <br>
        &nbsp;&nbsp;&nbsp; 1) Preparation of the Spray Material: 200 ml per 20 L of water. <br>
        &nbsp;&nbsp;&nbsp; 2) Spray Material Discharge: 20 L per 1000 stalks. </li> <br>
        CULTIVATION OF CROPS DURING VEGETATION: <br>
        <li> <u>For cereals, rice, corn, etc: </u> <br>
        &nbsp;&nbsp;&nbsp; 1) Preparation of the Spray Material: 100-150 ml per 150 L of water. <br>
        &nbsp;&nbsp;&nbsp; 2) Spray Material Discharge: 100 L per 1 acre. Use three times.</li>
        <li> <u>For apple, pear, cherry, plum:</u> <br>
        &nbsp;&nbsp;&nbsp; 1) Preparation of the Spray Material: 500 ml per 350-400L of water <br>
        &nbsp;&nbsp;&nbsp; 2) Spray Material Discharge: 400 L per 1 acre. Use three times.</li>
        
        `,
        //price:`<b> Price: </b>  Rs 1600/ltr, Rs 1700/500ml, Rs 2000/250ml, Rs 2400/100ml `,
        price: `<b> Price: </b>  
        <table>
        <thead>
            <tr>
                <th>Standard Packing</th>
                <th>MRP</th>
                <th>Sales Promotion Incentive</th>
                <th>Selling Price</th>
            </tr>
            </thead>
            <tbody>


            <tr>
                <td>1 Liter</td>
                <td>Rs 1600</td>
                <td>50%</td>
                <td>Rs 800</td>
            </tr>
            <tr>
                <td>500 ML</td>
                <td>Rs 850</td>
                <td>50%</td>
                <td>Rs 425</td>
            </tr>
            <tr>
                <td>250 ML</td>
                <td>Rs 500</td>
                <td>50%</td>
                <td>Rs 250</td>
            </tr>
            <tr>
                <td>100 ML</td>
                <td>Rs 240</td>
                <td>50%</td>
                <td>Rs 120</td>
            </tr>
            </tbody>

        </table>`,
        packagingAvailable: `<b> Packing Available: </b>  100ml, 250ml, 500ml, 1L.
    `,

    },
    "2":{
        name: "<h3><b>Name: </b> Kurdi® Manure (Powder)</h3>",
        //price: `5Kg Bag: Rs 110, 25Kg Bag: Rs 500 `,
        multipleImage: true,
        introduction: `<p><b> Product Information: </b> Kurdi® – is a complete, 100% organic manure 
        internationally designed and innovatively developed complete nutrition’s based on consortium of naturally 
        occurring Nitrogen, Phosphorus, Potassium, Carbon, Humic, Amino, 70+ micro nutrients and 15 minerals that 
        naturally fosters plant growth and empowers the crop to deliver quality produce & increased yields. This unique 
        organic Manure uses a proprietary technology “BIO Dynamic Converter” (pesticide free, chemical free) and can 
        replace the use of chemical fertilizers in any form. Our product uses cattle/farm dung and poultry droppings as a 
        raw material. Application of Kurdi is a natural way of improving soil health, soil structure and soil fertility.
        </p>`,
        advantages: `<b> Advantages: </b>
        <li> It preserves all the micro-organisms effective in the soil, due to which plants get nutrients in available form for longer period of time. </li>
        <li> Prevents all kinds of toxic chemicals, heavy elements pesticide and insecticide from entering the plants. </li>
        <li> With the use of Kurdi Manure the Soil pH value remain balanced. </li>
        <li> This improves the development of the roots of the plants. Due to which the growth and production of plants increases. </li>
        <li> In comparison to chemical fertilizers, with the use of Kurdi manure, the products are brighter, healthier, & disease free. </li>
        <li> The capacity of the soil to hold water increases. </li>
        <li> It also inhibits nitrate dispersion so that DE nitrification of nitrate does not take place. </li>
        <li> Improves soil structure, soil fertility and soil health. </li>`,
        recommendedCrop:`<p><b>Recommended Crops:</b> Kurdi can be used on all crops like cereals, millets, pulses, oil seeds, fiber crops, sugar crops, plantation crops, 
        horticulture crops, tea plantations, all vegetables, fruits and flowers. </p>
        `,
        application: `<p><b> Application: </b>400kg – 500kg / Acre Kurdi to be mixed once into the soil before sowing. Quantity depending upon the crop types <br> EXAMPLE – Fruits, Dry Fruits 500kg/ Acre, Vegetables, Root Vegetables – 400 kg/ Acre, Grains – 400kg/ Acre, Fiber Crops – 500kg/ Acre, 
        Or apply near root zone of the crops in 1 acre after sowing or transplanting.</p>`,
        price:`<b> Price: </b>  1Kg Bag: Rs 30, 2Kg Bag: Rs 50, 5Kg Bag: Rs 110, 25Kg Bag: Rs 500, 50Kg Bag: Rs 995 `,
        packagingAvailable: `<b> Packing Available: </b> 1Kg, 2Kg, 5kg, 25kg, 50Kg`,
        imageUrl1:"./images/kurdi1.png",
        imageUrl2:"./images/kurdi2.png",
        variationList: [{ 
                name:"Vegetables Special Kurdi Manure" , 
                quantity:"500 Kg/ Acre"
            },{ 
                name:"Fruits Special Kurdi Manure " , 
                quantity:"500 Kg/ Acre"
            },{ 
                name:"Grains Special Kurdi Manure" , 
                quantity:"400 Kg/ Acre"
            },{ 
                name:"Dry Fruits Special Kurdi Manure" , 
                quantity:"500 Kg/ Acre"
            },{ 
                name:"Flower Special Kurdi Manure " , 
                quantity:"400 Kg/ Acre"
            },{ 
                name:"Berries Special Kurdi Manure " , 
                quantity:"500 Kg/ Acre"
            },{ 
                name:"Root Vegetables Special Kurdi Manure " , 
                quantity:"500 Kg/ Acre"
            },{ 
                name:"Kitchen Garden & Lawn Special Kurdi Manure " , 
                quantity:"400 Kg/ Acre"
            },

        ]
    },
    "3":{
        // name: "<h3><b>Name: </b> Bio Geo Manure </h3>",
        name: "<h3><b>Name: </b> Bioferganic ® Manure (Granulated) </h3>",
        multipleImage: true,
        price: `<b> Price: </b> 1Kg Bag: Rs 100, 2Kg Bag: Rs 190, 5Kg Bag: Rs 450, 25Kg Bag: Rs 2100, 50Kg Bag: Rs 4000 `,
        // introduction: `<p><b> Product Information: </b> BioFerganic™ Kurdi – is a complete, 100% organic manure internationally designed and 
        // innovatively developed complete nutrition’s based on consortium of naturally occurring Nitrogen, Phosphorus, 
        // Potassium, Carbon, Humic, Amino, 70+ micro nutrients and 15 minerals that naturally fosters plant growth and 
        // empowers the crop to deliver quality produce & increased yields. This unique organic Manure uses a proprietary 
        // technology “BIO Dynamic Converter” (pesticide free, chemical free) and can replace the use of chemical fertilizers 
        // in any form. Our product uses cattle/farm dung and poultry droppings as a raw material. Application of Kurdi is 
        // a natural way of improving soil health, soil structure and soil fertility.</p>`,
        introduction: `<p><b> Product Information: </b> BioFerganic® Manure (Granulated) – is a complete, 100% organic manure internationally designed and 
        innovatively developed complete nutrition’s based on consortium of naturally occurring Nitrogen, Phosphorus, 
        Potassium, Carbon, Humic, Amino, 70+ micro nutrients and 15 minerals that naturally fosters plant growth and 
        empowers the crop to deliver quality produce & increased yields. This unique organic Manure uses a proprietary 
        technology “BIO Dynamic Converter” (pesticide free, chemical free) and can replace the use of chemical fertilizers 
        in any form. Our product uses cattle/farm dung and poultry droppings as a raw material. Application of Bioferganic is 
        a natural way of improving soil health, soil structure and soil fertility.</p>`,
        
        advantages: `<b> Advantages: </b>
        <li> It preserves all the micro-organisms effective in the soil, due to which plants get nutrients in available form for longer period of time. </li> 
        <li> Prevents all kinds of toxic chemicals, heavy elements pesticide and insecticide from entering the plants. </li> 
        <li> With the use of Bioferganic Manure the Soil pH value remain balanced. </li> 
        <li> This improves the development of the roots of the plants. Due to which the growth and production of plants increases. </li> 
        <li> In comparison to chemical fertilizers, with the use of Bioferganic manure, the products are brighter, healthier, & disease free. </li> 
        <li> The capacity of the soil to hold water increases. </li> 
        <li> It also inhibits nitrate dispersion so that DE nitrification of nitrate does not take place. </li> 
        <li> Improves soil structure, soil fertility and soil health. </li> 
        `,
        recommendedCrop:`<p><b>Recommended Crops:</b> Bioferganic can be used on all crops like cereals, millets, pulses, oil seeds, fiber 
        crops, sugar crops, plantation crops, horticulture crops, tea plantations, all vegetables, fruits and flowers. </p>
        `,
        application: `<p><b> Application: </b>100 kg – 200kg / Acre Bioferganic Granules to be mixed once into the soil before sowing. Quantity depending upon the crop types <br>EXAMPLE – Fruits 175kg/Acre, Dry Fruits 200kg/ Acre, Vegetables – 125kg/ Acre, Root Vegetables – 150 kg/ Acre, Grains – 100kg/ Acre, Fiber Crops – 150kg/ Acre,
        Or apply near root zone of the crops in 1 acre after sowing or transplanting. </p>
        `,
        packagingAvailable: `<b> Packing Available: </b> 1Kg, 2Kg, 5kg, 25kg, 50kg.
        `,
        imageUrl1:"./images/GranulatedManure1.png",
        imageUrl2:"./images/GranulatedManure2.png",
        variationList: [{ 
            name:"Vegetables Special Kurdi Manure" , 
            quantity:"125 Kg/ Acre"
        },{ 
            name:"Fruits Special Kurdi Manure " , 
            quantity:"175 Kg/ Acre"
        },{ 
            name:"Grains Special Kurdi Manure" , 
            quantity:"100 Kg/ Acre"
        },{ 
            name:"Dry Fruits Special Kurdi Manure" , 
            quantity:"200 Kg/ Acre"
        },
        //{ 
        //     name:"Flower Special Kurdi Manure " , 
        //     quantity:"400 Kg/ Acre"
        // },{ 
        //     name:"Berries Special Kurdi Manure " , 
        //     quantity:"500 Kg/ Acre"
        // },
        { 
            name:"Root Vegetables Special Kurdi Manure " , 
            quantity:"150 Kg/ Acre"
        },
        // { 
        //     name:"Kitchen Garden & Lawn Special Kurdi Manure " , 
        //     quantity:"400 Kg/ Acre"
        // },

    ]
    },

}

let products = document.getElementsByClassName("productTab");
Array.from(products).forEach(function(element) {
    element.addEventListener('click', openModal);
  });

function openModal(product){
    let data = dataMap[(this.getAttribute('productNo'))];
    
    let modal = document.getElementById("myModal");
    let productDetail = document.getElementById("productDetail");
    //modal.style.display = "block";
    modal.classList.add("showModal");
    
    productDetail.innerHTML = `${data.name?data.name:''} <br>
    ${data?.introduction?data?.introduction:''} <br>
    ${data?.advantages?data?.advantages:''} <br>
    ${data?.recommendedCrop?data?.recommendedCrop:''} <br>
    ${data?.application?data?.application:''} <br>
    ${data?.packagingAvailable?data?.packagingAvailable:''} <br>
    ${data?.generalInstructions?data?.generalInstructions:''} <br>
    ${data?.price?data?.price:''} <br>

    `;

    if (data?.multipleImage){
        
        let crousalModal = document.getElementById("crousalModal");
        
        crousalModal.innerHTML = `
                        <div class="slideshow-container">

                            <!-- Full-width images with number and caption text -->
                            <div class="mySlides-0 fade" style="display:block;">
                              <img src="${data.imageUrl1}" >
                              <div class="text">1/2</div>
                            </div>
                          
                            <div class="mySlides-0 fade" style="display:none;">
                              <img src="${data.imageUrl2}" >
                              <div class="text">2/2</div>
                            </div>
                          
                            <!-- Next and previous buttons -->
                            <a class="prev arrowKey" productNo="${0}" slidevalue = "-1" >&#10094;</a>
                            <a class="next arrowKey" productNo="${0}" slidevalue = "1" >&#10095;</a> 
                        </div>
                          <br>
                          <div style="text-align:center">
                            <span class="dot" onclick="currentSlide('0-1')"></span>
                            <span class="dot" onclick="currentSlide('0-2')"></span>
                          </div>

        `;

        let arrowKeys = document.getElementsByClassName("arrowKey");
        Array.from(arrowKeys).forEach(sliderEventHandler);


    }else{
        let crousalModal = document.getElementById("crousalModal");
        crousalModal.innerHTML = `
        <img id="modalImageLink" src="${data?.imageUrl}" alt="product">
        `;
        

    }
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    let modal = document.getElementById("myModal");
    // modal.style.display = "none";
    modal.classList.remove("showModal");
}