import React from "react";

export type SiteSlug =
  | "kwejk"
  | "jbzd"
  | "9gag"
  | "9gagnsfw"
  | "ifunnyco"
  | "mistrzowie"
  | "demotywatory"
  | "anonimowe";

export interface SiteProps {
  slug: SiteSlug;
  page?: string;
}

const Site = ({ slug }: SiteProps) => {
  return <div>Site {slug}</div>;
};

export default Site;
