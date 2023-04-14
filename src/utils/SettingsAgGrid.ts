export const sideBar = {
  toolPanels: [
    {
      id: "columns",
      labelDefault: "Столбцы",
      labelKey: "columns",
      iconKey: "columns",
      toolPanel: "agColumnsToolPanel",
      minWidth: 225,
      maxWidth: 225,
      width: 225,
    },
    {
      id: "filters",
      labelDefault: "Фильтры",
      labelKey: "filters",
      iconKey: "filter",
      toolPanel: "agFiltersToolPanel",
      minWidth: 180,
      maxWidth: 400,
      width: 250,
    },
  ],
};

export const defaultColDef = {
  flex: 1,
  minWidth: 100,
  sortable: true,
};

export const autoGroupColumnDef = {
  minWidth: 200,
};

export const rowHeight = 70;