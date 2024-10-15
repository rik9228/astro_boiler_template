---
name: 'component'
description: 'Generate standard Astro component.'
root: 'src'
output: '**/*'
ignore: []
questions:
  module: 'enter directory name（Ex: Button, Drawer ..）'
  name: 'enter component name'
  script:
    confirm: 'Do you need a script files?'
    initial: false
---

# `{{ inputs.module | pascal }}/{{ inputs.name | pascal }}.astro`

```astro
---

---

<style>
  @import './{{ inputs.module | pascal }}.scss';
</style>

<></>
```

# `{{ inputs.module | pascal }}/{{ inputs.name | pascal }}.scss`

```scss
// ------------------------------------------- SASS Information
//  Name:      {{ inputs.name | pascal }}.scss
//  Description:
//  Author:    Riku Morishita
// -----------------------------------------------------------

@use '../../../styles/setting/' as *;
```

# `{{ inputs.script || "!" }}{{ inputs.module | pascal }}/{{ inputs.name | pascal }}.ts`

```typescript
// ...
```
