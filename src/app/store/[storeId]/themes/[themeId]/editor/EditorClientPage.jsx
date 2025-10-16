"use client";

import PageBuilder from "@/pages/PageBuilder";

export default function EditorClientPage({ storeId, themeId }) {
  // console.log("EditorClientPage", storeId, themeId);
  return <PageBuilder storeId={storeId} themeId={themeId} />;
}
