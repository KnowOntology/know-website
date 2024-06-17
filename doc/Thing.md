---
sidebar_label: ∃ Thing
---

# ∃ Thing (class)

:::note
https://know.dev/Thing
(`know:Thing`)
:::

## Properties

| Property          | Label (en)     | Range                    |
| :---------------- | :------------- | :----------------------- |
| [`glyph`]         | Glyph          | `xsd:string`             |
| [`id`]            | Identifier     | `xsd:string`             |
| [`link`]          | Link           | [`Link`]                 |
| [`name`]          | Name           | `xsd:string`             |
| [`note`]          | Note           | `xsd:string`             |
| [`photo`]         | Photo          | `xsd:anyURI`             |
| [`size`]          | Size           | `xsd:string`             |

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
@prefix schema: <https://schema.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

know:Thing a owl:Class;
  rdfs:label "Afero"@eo,
    "Asia"@fi,
    "Coisa"@pt,
    "Cosa"@es,
    "Ding"@de,
    "Sak"@sv,
    "Thing"@en,
    "Şey"@tr,
    "Річ"@uk,
    "شيء"@ar;
  rdfs:subClassOf owl:Thing;
  owl:equivalentClass schema:Thing;
  know:glyph "∃" .

```

</TabItem>
</Tabs>

[`Link`]: /Link
[`Thing`]: /Thing
[`glyph`]: /glyph
[`id`]: /id
[`link`]: /link
[`name`]: /name
[`note`]: /note
[`photo`]: /photo
[`size`]: /size
