document.getElementById("mainscreen").style.display = "none";

function cont() {
    document.getElementById("signin").style.display = "none";
    document.getElementById("mainscreen").style.display = "block";
}

let cart = [
    {
        "id": 0,
        "item": "Hass Avocados",
        "image": "https://i5.walmartimages.com/asr/098962b7-7d67-4ff5-a3c9-047c430f8fea_1.5847cdd72fa776356460d77b0b3c9301.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        "price": 2.58,
        "qty": 3
    },
    {
        "id": 1,
        "item": "Cheerios Whole Grain Oats, Gluten Free, 21.7 oz",
        "image": "https://i5.walmartimages.com/asr/98215c9c-4d29-409e-b488-f49803cae741.c137b83e5d420ea96c54602fe7534f92.png?odnWidth=612&odnHeight=612&odnBg=ffffff",
        "price": 4.98,
        "qty": 1
    },
    {
        "id": 2,
        "item": "Eggland's Best Farm Fresh Large, White, Grade A Eggs, 12ct.",
        "image": "https://i5.walmartimages.com/asr/1c21f85d-2ed1-4196-bde8-62a8573b6191.20c5c5fda1aca2f7d7e197970eaebb88.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
        "price": 2.77,
        "qty": 1
    },
    {
        "id": 3,
        "item": "Angel Soft Toilet Paper, 18 Mega Rolls",
        "image": "https://i5.walmartimages.com/asr/40f13cd8-4fa8-4c51-88a9-3de4253cd4b4.d5a48d6fa25f4d9273400ef01a18fe9a.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
        "price": 13.98,
        "qty": 1
    }
];

let total = 0;
calculateTotal();

let produce = ["Gala Apples", "Hass Avocados", "Fresh Blackberries, 6 oz", "Fresh Blueberries, 11 oz", "Lemons", "Limes", "Mangos", "Navel Oranges, 3 lb bag", "Fresh Organic Raspberries, 6 oz", "Fresh USDA Organic Strawberries, 16 oz", "Asparagus", "Broccoli Crowns", "Green Cabbage", "Whole Carrots, 1 lb bag", "Cauliflower", "Cucumbers", "Iceberg Lettuce", "Yellow Onions, 3 lb bag", "Russet Baking Potatoes", "Organic Zucchini"];
let images = ["https://i5.walmartimages.com/asr/f46d4fa7-6108-4450-a610-cc95a1ca28c5_3.38c2c5b2f003a0aafa618f3b4dc3cbbd.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff", "https://i5.walmartimages.com/asr/098962b7-7d67-4ff5-a3c9-047c430f8fea_1.5847cdd72fa776356460d77b0b3c9301.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff", "https://i5.walmartimages.com/asr/cb53bc27-f467-4569-a6aa-f37a398f1d05_1.de0ff806baa995d2c33fa3f2cf893f7e.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff", "https://i5.walmartimages.com/asr/36580809-eec3-4788-b5b5-cb4557777a25_1.c0f98da1df424b0e5a2d9e9f115b97d4.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff", "https://i5.walmartimages.com/asr/b34574b9-0476-40d6-95b8-a54d0dd92bfb_1.5c2cf0cddcc03ee5aa1e181afe8be355.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff", "https://i5.walmartimages.com/asr/12314833-2e54-4739-94a2-7db45b63109d.16ff07e3c111df9be4158853c2e505ef.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff", "https://i5.walmartimages.com/asr/3d15ee0d-110f-4043-8ad1-738a9a32859e_3.f00a50c3a83d24ea44407bc0d18e4a62.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff", "https://i5.walmartimages.com/asr/5fa99ca0-ae7b-4030-ae4e-8ac4e1621eb3_1.d784bf085b7b2b98c065fded42d727f1.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff", "https://i5.walmartimages.com/asr/f06bed7e-c7f2-49e4-8886-6f3f0a3396ff_1.30a3636e6f83d199d33631766c1c790d.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff", "https://i5.walmartimages.com/asr/fb148fa5-193e-479c-8e89-dca9d61e2ff7_1.0d26c201e069d9940a4d0cb0c85d776d.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff", "https://i5.walmartimages.com/asr/fa41578e-f8be-4e38-9eed-65e119ad74f4_1.a275a50d8f6cf85fb6c0b130260f6ca6.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff", "https://i5.walmartimages.com/asr/c721459d-3826-4461-9e79-c077d5cf191e_3.ca214f10bb3c042f473588af8b240eca.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff", "https://i5.walmartimages.com/asr/8856d6af-c1b7-4561-9e3d-dd0263fbb09a_1.1ecdda0a8faa0ed27be3f4a87153a0a5.png?odnWidth=612&odnHeight=612&odnBg=ffffff", "https://i5.walmartimages.com/asr/5920bc6b-1db0-4af3-9f23-dddc46c0095f_1.e20c8ba41055db1ac42dfbc1e08d2fe0.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff", "https://i5.walmartimages.com/asr/3a5c8c12-4743-477d-894f-bec416048e55_1.5d63fc6518c9cfe44cb50c0048481915.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff", "https://i5.walmartimages.com/asr/67cc1502-5ba4-4a94-8e1b-5122d621f2d0_1.6dec76298b02fd3c0cdb815d0174360b.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff", "https://i5.walmartimages.com/asr/58a2caaf-02de-468c-a1fe-e302bb5cbda4_1.5848bcf880f19d670a31ee8cd533f108.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff", "https://i5.walmartimages.com/asr/7591f63b-b709-4256-b54a-ce271957da33_1.6ba08bcc08bc66d5e400088956812122.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff", "https://i5.walmartimages.com/asr/fc7e12f7-08f9-4604-9822-69ca5e87a0f4_1.92a28272bc66b3cdf9aa461254bc9013.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff", "https://i5.walmartimages.com/asr/4c487bc4-83f4-43c6-ad33-da094986ad9e_1.75dfe24691d7fcea4b712883a53aee1b.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"];
let prices = [0.67, 2.58, 2.68, 2.90, 0.54, 0.43, 0.65, 3.60, 3.94, 2.92, 2.98, 1.11, 2.04, 0.82, 2.44, 0.68, 1.28, 2.44, 0.62, 2.96];

function search() {
    let input = document.querySelector("#input").value;
    for (let i = 0; i < produce.length; i++) {
        if (produce[i].toLowerCase().includes(input)) {
            addToCart(i);
        }
    }
    document.querySelector("#input").value = "";
}

let index = 4;

function addToCart(n) {
    // if () {

    // } else {
        index++;
        document.getElementById("yourcart").innerHTML +=
            `<div class="row gx-5" id=${index}>
                <div class="col col-1">
                    <img src="${images[n]}"
                    id="productimg" /><br><br>
                    </div>
                    <div class="col col-6" style="margin-left: 75px;">
                        <h6 id="list-item-1">${produce[n]}</h6>
                    </div>
                    <div class="col col-2">
                        <p>
                            $${prices[n].toFixed(2)}<br>
                            Qty <input type="number" class="form-control" min=1 max=12 value=1>
                        </p>
                    </div>
                    <div class="col col-1">
                        <button type="button" class="btn" onclick="removeFromCart(${index})"><img src="https://image.flaticon.com/icons/png/512/1214/1214428.png" width=17.5px/></button>
                    </div>
                    <hr>
                </div>
            </div>`;

        cart.push({
            "id": index,
            "item": produce[n],
            "image": images[n],
            "price": prices[n],
            "qty": 1
        });
    // }

    calculateTotal();
}

function removeFromCart(id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i]["id"] == id) {
            cart.splice(i, 1);
            break;
        }
    }
    calculateTotal();
    document.getElementById(id).style.display = "none";
}

function calculateTotal() {
    total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i]["price"];
    }
    document.querySelector("#total").innerHTML = "$" + total.toFixed(2);
}

document.getElementById("mySidebar").style.display = "none";

let num = 0;

// x button closes sidebar shopping list in the touchscreen demo
function closeNav() {
    num++;
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("touchscreencontent").style.marginLeft = "0";
}

// menu button opens or closes sidebar shopping list in the touchscreen demo
function openCloseNav() {
    num++;
    if (num % 2 == 1) {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("mySidebar").style.width = "20%";
    } else {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("touchscreencontent").style.marginLeft = "0";
    }
}
