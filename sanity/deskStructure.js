import { HomeIcon, LockIcon } from "@sanity/icons";

export const myStructure = (S) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Home")
        .icon(HomeIcon)
        .child(S.document().schemaType("home").documentId("home")),
      S.listItem()
        .title("Copyright")
        .icon(LockIcon)
        .child(S.document().schemaType("copyright").documentId("copyright")),
      S.listItem()
        .title("Data Protection")
        .icon(LockIcon)
        .child(
          S.document().schemaType("dataProtection").documentId("dataProtection")
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["home", "copyright", "dataProtection"].includes(listItem.getId())
      ),
    ]);
