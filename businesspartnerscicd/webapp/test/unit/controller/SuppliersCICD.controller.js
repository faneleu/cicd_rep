/*global QUnit*/

sap.ui.define([
	"nscicd/businesspartnerscicd/controller/SuppliersCICD.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SuppliersCICD Controller");

	QUnit.test("I should test the SuppliersCICD controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
