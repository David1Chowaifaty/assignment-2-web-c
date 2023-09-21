# ir-sidebar



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                | Default     |
| -------- | --------- | ----------- | ------------------- | ----------- |
| `name`   | `name`    |             | `string`            | `undefined` |
| `open`   | `open`    |             | `boolean`           | `false`     |
| `side`   | `side`    |             | `"left" \| "right"` | `'right'`   |


## Events

| Event             | Description | Type               |
| ----------------- | ----------- | ------------------ |
| `irSidebarToggle` |             | `CustomEvent<any>` |


## Methods

### `toggleSidebar() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [ir-login](../ir-login)

### Graph
```mermaid
graph TD;
  ir-login --> ir-sidebar
  style ir-sidebar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
