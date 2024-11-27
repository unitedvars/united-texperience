'use client'

import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/sanity/lib/portableText";

const ClientPortableText = (props : any) => {
  return <PortableText {...props} components={portableTextComponents}/>
}

export default ClientPortableText;