var builder =

{

    // These create menus within the Dialog Menu
    /**
     * name: "Title of the Menu"
     */

    menus:
    [
        {id: "menu_1", name: "Project"},
        {id: "menu_2", name: "Ore"}
    ],

    // These map to Text Fields in the Stamp
    /**
     * field: "Field Name Directly to text field name in Bluebeam"
     * description: "Dialog label"
     * menu: Menu Mapped to the above labeled menu ID
     * default: function to return the default value
     */

    textBoxes:

        [

            { field: "Project", description: "Project:", menu: "menu_1", default: function () { return "";}},
            { field: "PlanRelease", description: "Plan release:", menu: "menu_1", default: function () { return "";}}

        ],        

    // These create Drop Down Fields in the Stamp
    /**
     * field: "Field Name Directly to text field name in Bluebeam"
     * description: "Dialog label"
     * menu: Menu Mapped to the above labeled menu ID
     * values: Object of values with Value and -1
     */

    dropDowns:

        [
            {
                field: "Estimator",
                description: "Estimator:",
                menu: "menu_2",
                values:
                {
                    "Matt Israel": -1,
                    "Parker Fowler": -1,
                    "Josh Johnson": -1,
                    "Danniel Herring": -1
                }
            },
            {
                field: "SalesRep",
                description: "Sales Rep:",
                menu: "menu_2",
                values:
                {
                    "Matt Ramsaur": -1,
                    "Olivia Hicks": -1,
                    "Geoff Conner": -1,
                    "Clint Watson": -1,
                    "Matt Israel": -1,
                    "Gordon Lundell": -1,
                    "Shane Larson": -1
                }
            }
        ]

}