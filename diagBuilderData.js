var builder =

{

    // These create menus within the Dialog Menu
    /**
     * name: "Title of the Menu"
     */

    menus:
    [
        {name: "Project"},
        {name: "Ore"}
    ],

    // These map to Text Fields in the Stamp
    /**
     * field: "Field Name Directly to text field name in Bluebeam"
     * description: "Dialog label"
     * menu: Menu Mapped to the above labeled menus
     * default: function to return the default value
     */

    textBoxes:

        [

            { field: "Project", description: "Project:", menu: "Project", default: function () { return "";}},
            { field: "PlanRelease", description: "Plan release:", menu: "Project", default: function () { return "";}}

        ],        

    // These create Drop Down Fields in the Stamp
    /**
     * field: "Field Name Directly to text field name in Bluebeam"
     * description: "Dialog label"
     * menu: Menu Mapped to the above labeled menus
     * values: Object of values with Value and -1
     */

    dropDowns:

        [
            {
                field: "Estimator",
                description: "Estimator:",
                menu: "Ore",
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
                menu: "Ore",
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