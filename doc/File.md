---
sidebar_label: 📄 File
---

# 📄 File (class)

:::note
https://know.dev/File
(`know:File`)
:::

## Properties

| Property          | Label (en)     | Range                    |
| :---------------- | :------------- | :----------------------- |
| [`sizeInBytes`]   | Size in Bytes  | `xsd:nonNegativeInteger` |

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

know:File a owl:Class;
  rdfs:label "File"@en,
    "Tiedosto"@fi;
  rdfs:subClassOf know:Thing;
  know:glyph "📄" .

```

</TabItem>
</Tabs>

[`File`]: /File
[`sizeInBytes`]: /sizeInBytes
