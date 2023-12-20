function startEscrow() {
    var receiverAddress = document.getElementById('receiverAddress').value;
    var amount = document.getElementById('amount').value;
    var buyer = document.getElementById ('buyer').value;
    var seller = document.getElementById('seller').value;
    var transactionId = document.getElementById('transactionId').value;

    var resultElement = document.getElementById('result');
    var transactionOptions = document.getElementById('transactionOptions');
    var completeTransactionButton = document.getElementById('completeTransactionButton');

    if (receiverAddress.length < 28) {
        resultElement.innerHTML = "Invalid receiver's USDT address.";
        return;

    }

    if (!receiverAddress || !amount || !buyer || !seller || !transactionId) {
        resultElement.innerHTML = "Please fill in all fields before starting the escrow.";
        return;
    }

    resultElement.innerHTML = `
        <strong>Transaction initiated!</strong><br>
        The funds are now being held under escrow.<br>
        Receiver's USDT Address: ${receiverAddress}<br>
        Amount: $${amount}<br>
        Buyer: ${buyer}<br>
        Seller: ${seller}<br>
        Binance Transaction ID: ${transactionId}<br>
        <em>MKATELO says:</em> Deposit the funds to the default address. In case of any disagreement, the funds will be securely sent back to you.
    `;

    // Show transaction options
    transactionOptions.style.display = 'block';

    // Enable Complete Transaction button
    completeTransactionButton.disabled = false;
}

function completeTransaction() {
    var resultElement = document.getElementById('result');
    var releaseFunds = document.getElementById('releaseFunds').checked;
    var refund = document.getElementById('refund').checked;

    if (releaseFunds && refund) {
        resultElement.innerHTML = "Please select only one option: Release Funds or Refund.";
    } else if (releaseFunds) {
        resultElement.innerHTML = "Funds released successfully!";
    } else if (refund) {
        resultElement.innerHTML = "Refund processed. Your funds are on the way!";
    } else {
        resultElement.innerHTML = "Please select an option: Release Funds or Refund.";
    }
}

window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    var scrollBtn =  document.querySelector(".scroll-up-btn");
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

// Smooth scroll to top
function scrollToTop() {
    var scrollStep = -window.scrollY / (500 / 15);
    var scrollInterval = setInterval(function(){
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}

