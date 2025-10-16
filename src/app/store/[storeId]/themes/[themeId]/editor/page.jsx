import EditorClientPage from "./EditorClientPage";

export async function generateStaticParams() {
  const stores = [
    { storeId: "deempay123", themeId: "12345678" },
    { storeId: "eftrjjej", themeId: "839200192311" },
  ];

  return stores.map(({ storeId, themeId }) => ({
    storeId,
    themeId,
  }));
}

export default async function EditorPage({ params }) {
  const { storeId, themeId } = await params;

  return <EditorClientPage storeId={storeId} themeId={themeId} />;
}
