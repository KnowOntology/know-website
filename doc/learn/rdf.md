---
sidebar_label: RDF & OWL
sidebar_position: 3
---

# Getting Started with RDF and OWL

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Base URI & Prefix

When working with [RDF] serializations, the ontology's base URI and recommended
prefix to use are the following:

<Tabs>
<TabItem value="jsonld" label="JSON-LD">

```json
{
  "@context": {
    "know": "https://know.dev/"
  },
  ...
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:know="https://know.dev/">
  ...
</rdf:RDF>
```

</TabItem>
<TabItem value="trig" label="TriG">

```turtle
@prefix know: <https://know.dev/> .
```

</TabItem>
<TabItem value="turtle" label="Turtle">

```turtle
@prefix know: <https://know.dev/> .
```

</TabItem>
</Tabs>

## Downloading the Ontology

<Tabs>
<TabItem value="jsonld" label="JSON-LD">

```console
$ curl -O https://know.dev/know.jsonld
```

</TabItem>
<TabItem value="nquads" label="N-Quads">

```console
$ curl -O https://know.dev/know.nq
```

</TabItem>
<TabItem value="ntriples" label="N-Triples">

```console
$ curl -O https://know.dev/know.nt
```

</TabItem>
<TabItem value="rdfjson" label="RDF/JSON">

```console
$ curl -O https://know.dev/know.rj
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```console
$ curl -O https://know.dev/know.rdf
```

</TabItem>
<TabItem value="trig" label="TriG">

```console
$ curl -O https://know.dev/know.trig
```

</TabItem>
<TabItem value="trix" label="TriX">

```console
$ curl -O https://know.dev/know.trix
```

</TabItem>
<TabItem value="turtle" label="Turtle">

```console
$ curl -O https://know.dev/know.ttl
```

</TabItem>
</Tabs>

[RDF]: https://en.wikipedia.org/wiki/Resource_Description_Framework
