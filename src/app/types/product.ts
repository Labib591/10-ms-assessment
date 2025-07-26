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

interface GroupJoinEngagementValue {
  id: string;
  title: string;
  title_color: string;
  description: string;
  description_color: string;
  thumbnail: string;
  top_left_icon_img: string;
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    text: string;
    color: string;
    clicked_url: string;
  };
}

export interface Section{
  type: string,
  name: string;
  values: unknown[];
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