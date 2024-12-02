// PRODUCTS API
const products = [
    {
        id: 1,
        images: "./images/products/p1.webp",
        brand: "adidas",
        name: "Cartoon Astronaut Shirts",
        price: "$78",
        quantity: 1,
        subtotal: "$78",
        category: "Upper Wear",
    },
    {
        id: 2,
        images: "./images/products/p2.webp",
        brand: "H&M",
        name: "Half-Sleeves Designed Shirts",
        price: "$70",
        quantity: 1,
        subtotal: "$70",
        category: "Upper Wear",
    },
    {
        id: 3,
        images: "./images/products/p3.webp",
        brand: "Gucci",
        name: "Cartoon Astronaut Shirts",
        price: "$80",
        quantity: 1,
        subtotal: "$80",
        category: "Upper Wear",
    },
    {
        id: 4,
        images: "./images/products/p4.webp",
        brand: "Fabindia",
        name: "Cartoon Astronaut Printed Shirts",
        price: "$75",
        quantity: 1,
        subtotal: "$75",
        category: "Upper Wear",
    },
    {
        id: 5,
        images: "./images/products/p5.webp",
        brand: "Zara",
        name: "Half-Sleeve Shirts",
        price: "$82",
        quantity: 1,
        subtotal: "$82",
        category: "Upper Wear",
    },
    {
        id: 6,
        images: "./images/products/p6.webp",
        brand: "Nike",
        name: "Full-Sleeve Shirts",
        price: "$84",
        quantity: 1,
        subtotal: "$84",
        category: "Upper Wear",
    },
    {
        id: 7,
        images: "./images/products/p7.webp",
        brand: "Chanel",
        name: "Printed Bell-Bottoms",
        price: "$90",
        quantity: 1,
        subtotal: "$90",
        category: "Bottom Wear",
    },
    {
        id: 8,
        images: "./images/products/p8.webp",
        brand: "Allen Solly",
        name: "Full-Sleeve Top",
        price: "$86",
        quantity: 1,
        subtotal: "$86",
        category: "Upper Wear",
    },
    {
        id: 9,
        images: "./images/products/p9.webp",
        brand: "adidas",
        name: "Plain Light Blue Shirts",
        price: "$30",
        quantity: 1,
        subtotal: "$30",
        category: "Upper Wear",
    },
    {
        id: 10,
        images: "./images/products/p10.webp",
        brand: "H&M",
        name: "Full-Sleeve Line Design Shirts",
        price: "$32",
        quantity: 1,
        subtotal: "$32",
        category: "Upper Wear",
    },
    {
        id: 11,
        images: "./images/products/p11.webp",
        brand: "Gucci",
        name: "Half-Sleeve Shirts",
        price: "$35",
        quantity: 1,
        subtotal: "$35",
        category: "Upper Wear",
    },
    {
        id: 12,
        images: "./images/products/p12.webp",
        brand: "Fabindia",
        name: "Plain White Shirts",
        price: "$36",
        quantity: 1,
        subtotal: "$36",
        category: "Upper Wear",
    },
    {
        id: 13,
        images: "./images/products/p13.webp",
        brand: "Zara",
        name: "Full-Sleeve Shirts",
        price: "$38",
        quantity: 1,
        subtotal: "$38",
        category: "Upper Wear",
    },
    {
        id: 14,
        images: "./images/products/p14.webp",
        brand: "Nike",
        name: "Comfortable Shorts",
        price: "$32",
        quantity: 1,
        subtotal: "$32",
        category: "Bottom Wear",
    },
    {
        id: 15,
        images: "./images/products/p15.webp",
        brand: "Chanel",
        name: "Double Pocket Shirts",
        price: "$40",
        quantity: 1,
        subtotal: "$40",
        category: "Upper Wear",
    },
    {
        id: 16,
        images: "./images/products/p16.webp",
        brand: "Allen Solly",
        name: "Half-Sleeve Black Shirts",
        price: "$45",
        quantity: 1,
        subtotal: "$45",
        category: "Upper Wear",
    },
];

const commonDisplay = (curEle) => {
    return `
        <div class="pro" data-aos="flip-left" data-aos-delay="200" data-aos-duration="500">
            <img src=${curEle.images} alt="products">
            <div class="description">
                <span>${curEle.brand}</span>
                <h5>${curEle.name}</h5>
                <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h4>${curEle.price}</h4>
            </div>
            <a class="addToCart" data-id="${curEle.id}"><i class="fa-solid fa-cart-plus"></i></a>
        </div>`;
};

const filterProducts = (category) => {
    const productContainer = document.querySelector(".pro-container");
    let productHTML = "";

    if (category === "All") {
        products.forEach((curEle) => {
            productHTML += commonDisplay(curEle);
        });
    } else {
        const filteredProducts = products.filter(
            (product) => product.category === category
        );
        filteredProducts.forEach((curEle) => {
            productHTML += commonDisplay(curEle);
        });
    }

    productContainer.innerHTML = productHTML;

    const addToCartBtns = document.querySelectorAll(".addToCart");
    const popup = document.querySelector(".pop-up");

    addToCartBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const productId = btn.getAttribute("data-id");
            const clickedProduct = products.find(
                (product) => product.id == productId
            );

            // Retrieve existing products from localStorage
            let existingProducts = JSON.parse(localStorage.getItem("Products")) || [];

            // Check if the product is already in the cart
            if (
                !existingProducts.some((product) => product.id === clickedProduct.id)
            ) {
                // Add the clicked product to the existing products array
                existingProducts.push(clickedProduct);

                // Store the updated array in localStorage
                localStorage.setItem("Products", JSON.stringify(existingProducts));

                // Update the popup content and display
                popup.innerText = `Product with id ${clickedProduct.id} has been added successfully`;
                popup.style.display = "block";
                popup.classList.add("show-pop-up");

                // Hide the popup after 2.5 seconds
                setTimeout(() => {
                    popup.style.display = "none";
                    popup.classList.remove("show-pop-up");
                }, 2000);

                // Re-render the table and bill table
                updateBagCount();
                renderTable();
                renderBillTable();
            } else {
                // If the product is already in the cart, show a different message
                popup.innerText = `Product with id ${clickedProduct.id} is already added`;
                popup.style.display = "block";
                popup.classList.add("show-pop-up");

                // Hide the popup after 2.5 seconds
                setTimeout(() => {
                    popup.style.display = "none";
                    popup.classList.remove("show-pop-up");
                }, 2000);
            }
        });
    });
};

const updateBagCount = () => {
    const bag = document.getElementById("bag");
    const storedProducts = JSON.parse(localStorage.getItem("Products")) || [];
    bag.innerHTML = ` <a href="./cart.html" class="active"><i class="fa-solid fa-bag-shopping"></i></a> ${storedProducts.length}`;
};

window.onload = () => {
    const tableData = document.querySelector(".product-details");
    let storedProducts = JSON.parse(localStorage.getItem("Products")) || [];

    bag.innerHTML = ` <a href="./cart.html"><i class="fa-solid fa-bag-shopping"></i></a> ${storedProducts.length}`;

    const renderTable = () => {
        let tableHTML = "";

        if (storedProducts.length === 0) {
            tableHTML =
                "<tr><td colspan='6'>No products added to cart yet.</td></tr>";
        } else {
            storedProducts.forEach((curEle, index) => {
                tableHTML += `
                    <tr>
                        <td><i class="fa-solid fa-circle-xmark delete-icon"></i></td>
                        <td><img src="${curEle.images}" alt="product_img" srcset=""></td>
                        <td>${curEle.name}</td>
                        <td>${curEle.price}</td>
                        <td><input type="number" value="${curEle.quantity}" min="1" class="number" max="50" data-index="${index}"></td>
                        <td>${curEle.subtotal}</td>
                    </tr>`;
            });
        }

        tableData.innerHTML = tableHTML;

        // Attach event listeners to delete buttons
        const deleteBtns = document.querySelectorAll(".delete-icon");
        const popup = document.querySelector(".pop-up");
        deleteBtns.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                const deletedProduct = storedProducts[index];

                // Remove the product from the array
                storedProducts.splice(index, 1);

                // Update localStorage
                localStorage.setItem("Products", JSON.stringify(storedProducts));

                // Show deletion message
                popup.innerText = `Product with id ${deletedProduct.id} has been deleted`;
                popup.style.display = "block";
                popup.classList.add("show-pop-up");

                setTimeout(() => {
                    popup.style.display = "none";
                    popup.classList.remove("show-pop-up");
                }, 2000);

                // Re-render the table and bill table
                renderTable();
                renderBillTable();
            });
        });

        // Attach event listeners to number inputs
        const numberInputs = document.querySelectorAll(".number");
        numberInputs.forEach((input, index) => {
            input.addEventListener("input", () => {
                const quantity = parseInt(input.value);
                const price = parseFloat(storedProducts[index].price.replace("$", ""));
                const subtotal = (quantity * price).toFixed(2);
                storedProducts[index].quantity = quantity;
                storedProducts[index].subtotal = `$${subtotal}`;
                localStorage.setItem("Products", JSON.stringify(storedProducts));
                const subtotalElement = input.parentElement.nextElementSibling;
                subtotalElement.innerText = `$${subtotal}`;

                // Update the bill table
                renderBillTable();
            });
        });
        updateBagCount();
    };

    const renderBillTable = () => {
        const subTotalTable = document.querySelector(".subtotal");
        let subtotal = storedProducts.reduce(
            (acc, cur) => acc + parseFloat(cur.subtotal.replace("$", "")),
            0
        );
        let billHTML = `
            <h3>Cart Total</h3>
            <table>
                <tr>
                    <td>Cart Subtotal:</td>
                    <td>$${subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Shipping:</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td>Tax:</td>
                    <td>$0</td>
                </tr>
                <tr>
                    <td><strong>Total:</strong></td>
                    <td><strong>$${subtotal.toFixed(2)}</strong></td>
                </tr>
            </table>`;
        if (storedProducts.length > 0) {
            billHTML += `<button class="normal bill-download">Show Invoice</button>`;
        }

        subTotalTable.innerHTML = billHTML;

        // Attach event listener for the "Generate Bill" button
        const generateBillBtn = document.querySelector(".bill-download");
        generateBillBtn.addEventListener("click", () => {
            window.location.href = "./invoice.html";
        });
    };

    renderTable();
    renderBillTable();

    const quantityItems = document.querySelector(".quantity-item");
    quantityItems.innerText = storedProducts.length;
};

const optionValue = document.querySelector(".products");
optionValue.addEventListener("change", (e) => {
    filterProducts(e.target.value);
});
filterProducts("All");

