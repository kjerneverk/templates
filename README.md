# @riotprompt/riotplan-templates

Starter templates for RiotPlan. Provides ready-to-use templates for common project planning scenarios.

## Installation

```bash
npm install @riotprompt/riotplan-templates
```

## Available Templates

- **basic** - Simple plan for quick tasks
- **feature** - Feature development with phases
- **refactoring** - Code refactoring with safety focus
- **migration** - Data/system migration with rollback planning
- **sprint** - Agile sprint planning

## Usage

```typescript
import { applyTemplate, listTemplates, getTemplate } from "@riotprompt/riotplan-templates";

// List all templates
const templates = listTemplates();

// Get a specific template
const featureTemplate = getTemplate("feature");

// Apply a template to create a new plan
const result = await applyTemplate({
    templateId: "feature",
    code: "my-feature",
    name: "My Feature",
    basePath: "./plans",
});
```

## License

MIT

