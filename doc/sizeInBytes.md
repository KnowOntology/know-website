---
sidebar_label: 💾 Size in Bytes
---

# 💾 Size in Bytes (property)

:::note
https://know.dev/sizeInBytes
(`know:sizeInBytes`)
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

know:sizeInBytes a owl:DatatypeProperty,
    owl:FunctionalProperty;
  rdfs:label "Koko tavuina"@fi,
    "Size in Bytes"@en,
    "Storlek i byte"@sv;
  rdfs:domain know:File;
  rdfs:range xsd:nonNegativeInteger;
  rdfs:subPropertyOf know:size;
  know:glyph "💾" .

```

</TabItem>
</Tabs>
