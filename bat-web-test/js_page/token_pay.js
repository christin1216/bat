var token_common = new token_common();
var mobile = "15083809587 ";
var loginPwd = "123456";
var payPwd = "123456";
var orderId = "20160803_116"
var money = "0.02";
var subject = "test1";

function buy() {
	token_common.buy(payPwd, money, orderId);
}

function h5page() {
	token_common.h5Page(orderId, money, subject, "N", function(data) {
		$("#div_test").append(data.content);
	})
}

function sellerOk() {
	token_common.sellerOk(money, orderId);
}

function buyOk() {
	token_common.buyOk(orderId);
}

function refund() {
	token_common.refund(money, orderId);
}