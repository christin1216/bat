function token_common(url) {
	this.url = url;
	this.token;
	this.requestData = {
		login: "com.bat.shop.token.user.login",
		sign: "com.bat.shop.token.utils.sign",
		buy: "com.bat.shop.token.pay.buy",
		aliH5: "com.bat.shop.token.pay.h5alipay",
		production: "com.bat.shop.token.pay.production"
	}

	this.sellerOk = function(money, orderId) {
		var sellerOkSend = this.getSendData("production", {
			money: money,
			orderId: orderId
		})
		$.post(this.url, sellerOkSend);

	}

	this.h5Page = function(orderId, money, subject, app_pay, call) {
		var h5Send = this.getSendData("aliH5", {
			orderId: orderId,
			money: money,
			subject: subject,
			app_pay: app_pay
		})
		$.post(this.url, h5Send, call);
	}

	this.buy = function(pwd, money, orderId, payType) {
		var buySend = this.getSendData("buy", {
			pwd: pwd,
			money: money,
			orderId: orderId,
			payType: payType
		});
		$.post(this.url, buySend);
	}

	this.login = function(mobile, pwd) {
		var _this = this;
		var loginSendData = this.getSendData("login", {
			mobile: mobile,
			password: $.md5(pwd)
		});
		$.post(this.url, loginSendData, function(loginReadData) {
			_this.token = loginReadData.content.token;

		})
	}

	this.getSendData = function(serivce, Sendcontext) {
		var ctx = JSON.stringify(Sendcontext);
		var send = {
			requestType: this.requestData[serivce],
			sign: $.md5(ctx),
			content: ctx,
			token: this.token
		}
		return send;
	}
}