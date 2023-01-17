// WARNING: DO NOT EDIT
// SEE GLOBAL JAVASCRIPT SECTION FOR CUSTOMIZATION

 

if (event.source.forReal)
{
var stampDialog = CreateDialog(builder);
app.execDialog(stampDialog); 

for (var i = 0; i < builder.dropDowns.length; ++i)
{
  var t = builder.dropDowns[i];
  this.getField(t.field).value = stampDialog.dropDownResults[i];
}

for (var i = 0; i < builder.textBoxes.length; ++i)
{
  var t = builder.textBoxes[i];
  this.getField(t.field).value = stampDialog.textBoxResults[i];
}
}

 

function CreateDialog(dialogBuilder)
{
var sd = {
  builder: dialogBuilder,
  textBoxResults: new Array(),
  dropDownResults: new Array()
};

var menuElements = new Array();

for(var i = 0; i < dialogBuilder.menus.length; ++i) {
  menuElements[i] = 
  {
    type: "cluster",
    id: dialogBuilder.menus[i].id,
    name: dialogBuilder.menus[i].name,
    elements: new Array()
  };
}

for(var i = 0; i < dialogBuilder.dropDowns.length; ++i) {
  var view = new Object();  
  view.type = "view";
  view.align_children = "align_row";
  view.elements = new Array();

  var t = dialogBuilder.dropDowns[i];

  var s = new Object();
  s.type = "static_text";
  s.item_id = "drp_lbl_" + i;
  s.name = t.description;
  s.width = 90;

  var e = new Object();
  e.type = "popup";
  e.item_id = "drp_fld_" + i;
  e.field = t.field;
  e.width = 150;

  view.elements[0] = s;
  view.elements[1] = e;
  
  for(var j = 0; j < menuElements.length; ++j) {
    var menu = menuElements[j];
    if(t.menu == menu.id) menuElements[j].elements.push(view);
  }
}

for (var i = 0; i < dialogBuilder.textBoxes.length; ++i)
{
  var view = new Object();  
  view.type = "view";
  view.align_children = "align_row";
  view.elements = new Array();

  var t = dialogBuilder.textBoxes[i];

  var s = new Object();
  s.type = "static_text";
  s.item_id = "sta" + i;
  s.name = t.description;
  s.width = 90;  

  var e = new Object();
  e.type = "edit_text";
  e.item_id = "edt" + i;
  e.width = 150;

  view.elements[0] = s;
  view.elements[1] = e;  

  for(var j = 0; j < menuElements.length; ++j) {
    var menu = menuElements[j];
    if(t.menu == menu.id) menuElements[j].elements.push(view);
  }
}

sd.initialize = function(dialog)
{
  var init = new Object();
  var drpDwn = new Object();

  for (var i = 0; i < this.builder.textBoxes.length; ++i)
  {
   var t = this.builder.textBoxes[i];
   var id = "edt" + i;   
   init[id] = t.default();
  }

  for(var i = 0; i < this.builder.dropDowns.length; ++i) {
    var t = this.builder.dropDowns[i];
    var id = "drp_fld_" + i;
    drpDwn[id] = t.values;
  }

  dialog.load(init);
  dialog.load(drpDwn);
};

sd.commit = function(dialog)
{
  var res = dialog.store();

  for (var i = 0; i < this.builder.textBoxes.length; ++i)
  {
   var id = "edt" + i;
   this.textBoxResults[i] = res[id];
  }

  for(var i = 0; i < this.builder.dropDowns.length; ++i) 
  {
    var id = "drp_fld_" + i;
    for(var j in res[id]) {
        if(res[id][j] > 0){
            this.dropDownResults[i] = j;
        }
    }
  }
};

sd.validate = function(dialog)
{
  return true;
};

sd.description = 
{
  name: "Stamp Dialog",
  elements:
  [
   {
    type: "view",
    align_children: "align_fill",
    elements: menuElements
   },
   {
    type: "ok"
   }
  ]
};

 

return sd;
}