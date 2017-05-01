// Use data types instead of custom formatters whenever possible

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.InvoiceList", {

		onInit : function () {
            // View models can hold any configuration options assigned to a control to bind properties such as the visibility
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		}

	});
});