export interface Media {
    name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url?: string;
}
export interface ChecklistItem {
  id: string;
  icon: string;
  text: string;
  list_page_visibility: boolean;
}
export interface CTA_TEXT {
  name: string;
}
export interface Section  {
  type: string,
  name: string;
  values: any[];
}
export interface Product {
  title: string;
  description: string;
  media: Media[];
  checklist: ChecklistItem[];
  cta_text: {
    name: string;
    value: string;
  };
  sections: Section[];
}