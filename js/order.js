// JavaScript Document
function validate() {
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var delivery = document.getElementById('delivery').checked;
    var pickup = document.getElementById('pickup').checked;
    var postcode = document.getElementById('postcode').value;
    var paypickup = document.getElementById('paypickup').checked;
    var payonline = document.getElementById('payonline').checked;
    var creditnumber = document.getElementById('creditnumber').value;
    var errMsg = '';
    var result = true;
    // All required inputs have value
    if (delivery == '' && pickup == '') {
        errMsg += 'An order type must be selected.\n';
    }
    if (contact == '') {
        errMsg += 'Contact number cannot be empty.\n';
    }
    if (email == '') {
        errMsg += 'Email cannot be empty.\n';
    }
    if (paypickup == '' && payonline == '') {
        errMsg += 'A payment method must be selected.\n';
    }
    if (!postcode.match(/^(?=.*\d).{4}$/)) {
        errMsg += 'Postcode has to be 4-digit.\n';
    }
    if (document.getElementById('visa').checked && creditnumber.length != 16) {
        errMsg += 'Visa card number has to be 16-digit.\n';
    }
    if (
        document.getElementById('master').checked &&
        creditnumber.length != 16
    ) {
        errMsg += 'Mastercard number has to be 16-digit.\n';
    }
    if (
        document.getElementById('american').checked &&
        creditnumber.length != 15
    ) {
        errMsg += 'American Express card number has to be 15-digit.\n';
    }
    if (errMsg != '') {
        alert(errMsg);
        result = false;
    }
    return result;
}

function init() {
    var regForm = document.getElementById('regform');
    regForm.onsubmit = validate;
}
window.onload = init;

function option(event) {
    // Order Option
    var pickupAddressEl = document.getElementById('pickup_address');
    if (event && event.checked && event.id === 'delivery') {
        pickupAddressEl.classList.remove('hidden');
    } else {
        pickupAddressEl.classList.add('hidden');
    }

    // Payment Option
    if (event && event.checked && event.id === 'payonline') {
        document.getElementById('online_payment').classList.remove('hidden');
    } else {
        document.getElementById('online_payment').classList.add('hidden');
    }
}

function copy(event) {
    var delivery_address = document.getElementById('delivery_address');
    var billing_address = document.getElementById('billing_address');
    var checked = document.getElementById('same').checked;
    if (checked) {
        if (delivery_address.value) {
            billing_address.value = delivery_address.value;
        } else {
            alert('Please enter your delivery address first.');
            event.preventDefault();
        }
    }
}

window.onchange = option;
window.onchange = copy;
