---
sidebar_label: 🧑 Person
---

# 🧑 Person (class)

:::note
https://know.dev/Person
(`know:Person`)
:::

## Properties

| Property          | Label (en)     | Range                    |
| :---------------- | :------------- | :----------------------- |
| [`account`]       | Account        | `xsd:anyURI`             |
| [`age`]           | Age            | `xsd:nonNegativeInteger` |
| [`alias`]         | Alias          | `xsd:string`             |
| [`ancestor`]      | Ancestor       | [`Person`]               |
| [`aunt`]          | Aunt           | [`Person`]               |
| [`birth`]         | Birth          | [`Birth`]                |
| [`brother`]       | Brother        | [`Person`]               |
| [`child`]         | Child          | [`Person`]               |
| [`colleague`]     | Colleague      | [`Person`]               |
| [`cousin`]        | Cousin         | [`Person`]               |
| [`daughter`]      | Daughter       | [`Person`]               |
| [`death`]         | Death          | [`Death`]                |
| [`descendant`]    | Descendant     | [`Person`]               |
| [`email`]         | Email          | `xsd:string`             |
| [`father`]        | Father         | [`Person`]               |
| [`grandchild`]    | Grandchild     | [`Person`]               |
| [`granddaughter`] | Granddaughter  | [`Person`]               |
| [`grandfather`]   | Grandfather    | [`Person`]               |
| [`grandmother`]   | Grandmother    | [`Person`]               |
| [`grandparent`]   | Grandparent    | [`Person`]               |
| [`grandson`]      | Grandson       | [`Person`]               |
| [`honorific`]     | Honorific      | `xsd:string`             |
| [`husband`]       | Husband        | [`Person`]               |
| [`knows`]         | Knows          | [`Person`]               |
| [`memberOf`]      | Member Of      | [`Group`]                |
| [`mother`]        | Mother         | [`Person`]               |
| [`nationality`]   | Nationality    | `xsd:string`             |
| [`nephew`]        | Nephew         | [`Person`]               |
| [`nibling`]       | Nibling        | [`Person`]               |
| [`niece`]         | Niece          | [`Person`]               |
| [`parent`]        | Parent         | [`Person`]               |
| [`partner`]       | Partner        | [`Person`]               |
| [`phone`]         | Phone          | `xsd:string`             |
| [`pibling`]       | Pibling        | [`Person`]               |
| [`relative`]      | Relative       | [`Person`]               |
| [`sex`]           | Sex            | `xsd:string`             |
| [`sibling`]       | Sibling        | [`Person`]               |
| [`sister`]        | Sister         | [`Person`]               |
| [`son`]           | Son            | [`Person`]               |
| [`speaks`]        | Speaks         | `xsd:language`           |
| [`spouse`]        | Spouse         | [`Person`]               |
| [`stepchild`]     | Stepchild      | [`Person`]               |
| [`stepdaughter`]  | Stepdaughter   | [`Person`]               |
| [`stepfather`]    | Stepfather     | [`Person`]               |
| [`stepmother`]    | Stepmother     | [`Person`]               |
| [`stepparent`]    | Stepparent     | [`Person`]               |
| [`stepson`]       | Stepson        | [`Person`]               |
| [`uncle`]         | Uncle          | [`Person`]               |
| [`wife`]          | Wife           | [`Person`]               |

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

know:Person a owl:Class;
  rdfs:label "Henkilö"@fi,
    "Kişi"@tr,
    "Person"@de,
    "Person"@en,
    "Person"@sv,
    "Persona"@es,
    "Persono"@eo,
    "Pessoa"@pt,
    "Особа"@uk,
    "شخص"@ar;
  rdfs:subClassOf know:Thing;
  owl:equivalentClass schema:Person;
  know:glyph "🧑" .

```

</TabItem>
</Tabs>

[`Birth`]: /Birth
[`Death`]: /Death
[`Group`]: /Group
[`Person`]: /Person
[`account`]: /account
[`age`]: /age
[`alias`]: /alias
[`ancestor`]: /ancestor
[`aunt`]: /aunt
[`birth`]: /birth
[`brother`]: /brother
[`child`]: /child
[`colleague`]: /colleague
[`cousin`]: /cousin
[`daughter`]: /daughter
[`death`]: /death
[`descendant`]: /descendant
[`email`]: /email
[`father`]: /father
[`grandchild`]: /grandchild
[`granddaughter`]: /granddaughter
[`grandfather`]: /grandfather
[`grandmother`]: /grandmother
[`grandparent`]: /grandparent
[`grandson`]: /grandson
[`honorific`]: /honorific
[`husband`]: /husband
[`knows`]: /knows
[`memberOf`]: /memberOf
[`mother`]: /mother
[`nationality`]: /nationality
[`nephew`]: /nephew
[`nibling`]: /nibling
[`niece`]: /niece
[`parent`]: /parent
[`partner`]: /partner
[`phone`]: /phone
[`pibling`]: /pibling
[`relative`]: /relative
[`sex`]: /sex
[`sibling`]: /sibling
[`sister`]: /sister
[`son`]: /son
[`speaks`]: /speaks
[`spouse`]: /spouse
[`stepchild`]: /stepchild
[`stepdaughter`]: /stepdaughter
[`stepfather`]: /stepfather
[`stepmother`]: /stepmother
[`stepparent`]: /stepparent
[`stepson`]: /stepson
[`uncle`]: /uncle
[`wife`]: /wife
