---
sidebar_label: 🔗 URL
---

# 🔗 URL (property)

:::note
https://know.dev/url
(`know:url`)
:::

## Specification

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="turtle" label="Turtle">

```turtle
@prefix know: <https://know.dev/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

know:url a owl:DatatypeProperty,
    owl:FunctionalProperty;
  rdfs:label "LRU"@es,
    "URL"@de,
    "URL"@en,
    "URL"@eo,
    "URL"@pt,
    "URL"@sv,
    "URL"@tr,
    "URL-osoite"@fi,
    "URL-адреси"@uk,
    "محدد موقع الموارد الموحد"@ar;
  rdfs:domain know:Link;
  rdfs:range xsd:anyURI;
  rdfs:subPropertyOf owl:topDataProperty;
  know:glyph "🔗" .

```

</TabItem>
</Tabs>
