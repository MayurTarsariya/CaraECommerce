window.onload = () => {
    let storedProducts = JSON.parse(localStorage.getItem("Products")) || [];

    const renderInvoiceTable = () => {
        const invoiceData = document.querySelector(".invoice-data");
        let invoiceDataHTML = "";
        storedProducts.forEach((curEle) => {
            invoiceDataHTML += `
                <tr>
                    <td>${curEle.name}</td>
                    <td>${curEle.quantity}</td>
                    <td>${curEle.price}</td>
                    <td>${curEle.subtotal}</td>
                </tr>`;
        });
        invoiceData.innerHTML = invoiceDataHTML;
    };

    const renderFinalInvoice = () => {
        const FinalInvoiceTable = document.querySelector(".final-invoice");
        let subtotal = storedProducts.reduce(
            (acc, cur) => acc + parseFloat(cur.subtotal.replace("$", "")),
            0
        );
        let billHTML = `
            <h3>Item Total</h3>
            <table>
                <tr>
                    <td>Subtotal:</td>
                    <td>$${subtotal.toFixed(2)}</td>
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
        FinalInvoiceTable.innerHTML = billHTML;
    };
    const dateNumber = () => {
        const todayDate = document.querySelector(".date");
        const billNumber = document.querySelector(".bill-number");
        const date = new Date();
        todayDate.innerText = `Date: ${date.toLocaleDateString()}`;
        billNumber.innerText = `invoice number: 37398816`
    }
    renderInvoiceTable();
    renderFinalInvoice();
    dateNumber();
};
const backToCart = document.querySelector(".back").addEventListener("click", () => {
    window.location.href = "./cart.html";
})
const opt = {
    margin: 0,
    filename: 'invoice.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
        scale: 4, // Higher scale for better quality
        useCORS: true,
        scrollX: 0, // Ensure it captures the entire scroll area
        scrollY: 0
    },
    jsPDF: {
        unit: 'px',
        format: [1024, 1024], // Fixed width and height both set to 768 pixels
        orientation: 'portrait',
        compressPDF: true // Optional - compresses the PDF for faster download
    }
};
const main = document.querySelector(".main");
const download = document.querySelector(".download").addEventListener("click", () => {
    window.html2pdf().set(opt).from(main).save();
})