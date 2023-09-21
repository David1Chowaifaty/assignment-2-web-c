# ir-login



<!-- Auto Generated Below -->


## Events

| Event                  | Description | Type                     |
| ---------------------- | ----------- | ------------------------ |
| `loginClicked`         |             | `CustomEvent<ILogin>`    |
| `loginRegisterClicked` |             | `CustomEvent<IRegister>` |


## Dependencies

### Depends on

- [ir-card-header](../ir-card-header)
- [ir-input](../ir-input)
- [ir-checkbox](../ir-checkbox)
- [ir-link](../ir-link)
- [ir-button](../ir-button)
- [ir-sidebar](../ir-sidebar)
- [ir-register](../ir-register)

### Graph
```mermaid
graph TD;
  ir-login --> ir-card-header
  ir-login --> ir-input
  ir-login --> ir-checkbox
  ir-login --> ir-link
  ir-login --> ir-button
  ir-login --> ir-sidebar
  ir-login --> ir-register
  ir-register --> ir-card-header
  ir-register --> ir-input
  ir-register --> ir-button
  ir-register --> ir-link
  style ir-login fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
