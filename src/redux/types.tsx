export const EDITINGPAGE_CHANGE_FILEBROWSER_WIDTH =
  "EDITINGPAGE_CHANGE_FILEBROWSER_WIDTH";
export const EDITINGPAGE_CHANGE_PREVIEW_WIDTH =
  "EDITINGPAGE_CHANGE_PREVIEW_WIDTH";
interface ChangeFileBrowserWidth {
  type: typeof EDITINGPAGE_CHANGE_FILEBROWSER_WIDTH;
  payload: number;
}

interface ChangePreviewWidth {
  type: typeof EDITINGPAGE_CHANGE_PREVIEW_WIDTH;
  payload: number;
}

export type EditingPageTypes = ChangeFileBrowserWidth | ChangePreviewWidth;
