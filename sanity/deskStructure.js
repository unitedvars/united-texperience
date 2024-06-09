export const myStructure = (S) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Home")
        .child(S.document().schemaType("home").documentId("home")),
      ...S.documentTypeListItems().filter(
        (listItem) => !["home"].includes(listItem.getId())
      ),
    ]);
