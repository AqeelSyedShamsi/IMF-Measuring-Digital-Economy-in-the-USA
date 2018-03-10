sap.ui.controller("content.Result_Triple_Smoothing_GDP", {
// controller logic goes here
onInit: function() {
// this function is called when the view is instantiated.
// Used to modify the view before displaying
// first, we have to define the odata model
var dataModel = new sap.ui.model.odata.ODataModel(
"models/international_monetary_fund_project.xsodata"
);
// now we can bind the odata model to the SalesOrders
// view, so controls within the view can use it
this.getView().setModel(dataModel);
},
onExit: function() {
// this function is called when the view is destroyed.
// Used for clean-up activities
},
onAfterRendering: function() {
// this function is called when the view has been rendered.
// Used for post-rendering manipulation of the HTML code
},
onBeforeRendering: function() {
// this function is called before the view is re-rendered
// (not before first rendering)
}
});
