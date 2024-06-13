---
sidebar_label: XML
sidebar_position: 2
---

# Getting Started with XML

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## The XML Schema

The [XML Schema] (XSD) for the ontology is available at
[know.dev/know.xsd](https://know.dev/know.xsd).

## Downloading the Schema

<Tabs>
<TabItem value="curl" label="curl">

```curl
$ curl -O https://know.dev/know.xsd
```

</TabItem>
<TabItem value="wget" label="wget">

```wget
$ wget https://know.dev/know.xsd
```

</TabItem>
</Tabs>

## Using the Namespace

```xml title="my_data.xml"
<?xml version="1.0" encoding="UTF-8"?>
<people xmlns="https://know.dev/">
  ...
</people>
```

## Using the Ontology

```xml title="my_data.xml"
<?xml version="1.0" encoding="UTF-8"?>
<people xmlns="https://know.dev/">
  <person>
    <name>J. Random Hacker</name>
  </person>
</people>
```

## Using the Schema

```xml title="my_data.xml"
<?xml version="1.0" encoding="UTF-8"?>
<people xmlns="https://know.dev/"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="https://know.dev/ https://know.dev/know.xsd">
  ...
</people>
```

## Validating XML Data

<Tabs>
<TabItem value="xmllint-curl" label="xmllint + curl">

```console
$ curl -s https://know.dev/know.xsd | xmllint --noout --schema - my_data.xml
```

</TabItem>
<TabItem value="xmllint" label="xmllint">

```console
$ xmllint --noout --schema know.xsd my_data.xml
```

</TabItem>
</Tabs>

## Importing the Schema

https://www.w3.org/TR/xmlschema-1/#compound-schema

```xml
<xs:include schemaLocation="know.xsd"/>
```

https://www.w3.org/TR/xmlschema-1/#composition-schemaImport

```xml
<xs:import namespace="https://know.dev/"
           schemaLocation="https://know.dev/know.xsd">
```

## Extending the Schema

https://www.w3.org/TR/xmlschema-1/#modify-schema

```xml title="my_schema.xsd"
<xs:redefine schemaLocation="https://know.dev/know.xsd">
  <xs:complexType name="Person">
    <xs:complexContent>
      <xs:extension base="Person">
        <xs:sequence>
          <xs:element name="memberID" type="xs:string"/>
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
</xs:redefine>

<xs:element name="member" type="Person"/>
```

<!--
For use in [XML] documents, all the ontology [classes](/classes) and
[properties](/properties) have corresponding XML elements defined for them.
-->

[XML]: https://en.wikipedia.org/wiki/XML
[XML Schema]: https://www.w3.org/TR/xmlschema-0/
