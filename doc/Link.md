---
sidebar_label: 🔗 Link
---

# 🔗 Link (class)

:::note
https://know.dev/Link
(`know:Link`)
:::

## Properties

| Property          | Label (en)     | Range                    |
| :---------------- | :------------- | :----------------------- |
| [`url`]           | URL            | `xsd:anyURI`             |

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

know:Link a owl:Class;
  rdfs:label "Link"@en,
    "Linkki"@fi;
  rdfs:subClassOf know:Thing;
  know:glyph "🔗" .

```

</TabItem>
</Tabs>

[`Link`]: /Link
[`url`]: /url
