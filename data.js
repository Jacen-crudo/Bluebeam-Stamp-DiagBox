var builder =

{

    /** MENUS PROPERTY textBoxes
     * TYPE: Obj Arr[]
     * 
     * Properties:
	 * “id” (STRING): ID of the Menu to be referenced by input fields.
     * “name” (STRING): Display name of the Menu
    */

    menus:
    [
        {id: "menu_1", name: "Project"},
        {id: "menu_2", name: "Rep"}
    ],

    /** TEXT BOXES PROPERTY textBoxes
     * TYPE: Obj Arr[]
     * 
     * Properties:
	 * “field” (STRING): Field name referencing the Bluebeam Text Field Name
	 * “description” (STRING): Display name in the Dialog Window
	 * “menu” (STRING): ID of the Menu labeled above
	 * “default” (FUNCTION): Function to return the default value
    */

    textBoxes:

        [

            { field: "Project", description: "Project:", menu: "menu_1", default: function () { return "";}},
            { field: "PlanRelease", description: "Plan release:", menu: "menu_1", default: function () { return "";}}

        ],        

    /** DROP DOWN PROPERTY textBoxes
     * TYPE: Obj Arr[]
     * 
     * Properties:
	 * “field” (STRING): Field name referencing the Bluebeam Text Field Name
	 * “description” (STRING): Display name in the Dialog Window
	 * “menu” (STRING): ID of the Menu labeled above
	 * “values” (OBJECT): Values as text to be displayed on the stamp with ‘:-1’ following
     */

    dropDowns:

        [
            {
                field: "Estimator",
                description: "Estimator:",
                menu: "menu_2",
                values:
                {
                    "Matt": -1,
                    "Parker": -1,
                    "Josh": -1,
                    "Danniel": -1
                }
            },
            {
                field: "SalesRep",
                description: "Sales Rep:",
                menu: "menu_2",
                values:
                {
                    "Matt": -1,
                    "Olivia": -1,
                    "Geoff": -1,
                    "Clint": -1,
                    "Matt": -1,
                    "Gordon": -1,
                    "Shane": -1
                }
            }
        ]

}