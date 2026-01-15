# RiotPlan Templates Guide

## Overview

The `@riotprompt/riotplan-templates` package provides starter templates for creating new plans. These templates cover common use cases and can be customized for your specific needs.

## Installation

```bash
npm install @riotprompt/riotplan-templates
```

## Available Templates

### Basic Plan
- **ID**: `basic`
- **Category**: general
- **Best for**: Quick tasks, custom workflows, or when other templates don't fit

### Feature Development
- **ID**: `feature`
- **Category**: development
- **Best for**: Developing new software features
- **Phases**: Discovery, Design, Implementation, Delivery

### Code Refactoring
- **ID**: `refactoring`
- **Category**: development
- **Best for**: Code cleanup, technical debt reduction
- **Focus**: Safety, incremental changes, thorough testing

### Migration Plan
- **ID**: `migration`
- **Category**: operations
- **Best for**: Data migrations, platform upgrades, system migrations
- **Focus**: Safety, rollback capability, validation

### Sprint Plan
- **ID**: `sprint`
- **Category**: general
- **Best for**: Agile sprints or iterations
- **Steps**: Planning, Execution, Review, Retrospective

## Usage

### List Available Templates

```typescript
import { listTemplates } from "@riotprompt/riotplan-templates";

const templates = listTemplates();
for (const template of templates) {
    console.log(`${template.id}: ${template.name}`);
}
```

### Get a Specific Template

```typescript
import { getTemplate } from "@riotprompt/riotplan-templates";

const template = getTemplate("feature");
if (template) {
    console.log(template.name);
    console.log(template.description);
}
```

### Apply a Template

```typescript
import { applyTemplate } from "@riotprompt/riotplan-templates";

const result = await applyTemplate({
    templateId: "feature",
    code: "my-new-feature",
    name: "My New Feature",
    basePath: "./plans",
    description: "Custom description for my feature",
    tags: ["custom", "tags"],
});

if (result.success) {
    console.log(`Plan created at: ${result.path}`);
} else {
    console.error(`Failed: ${result.error}`);
}
```

## Template Structure

Each template defines:

- **id**: Unique identifier
- **name**: Display name
- **description**: What the template is for
- **category**: general, development, operations, or documentation
- **tags**: Keywords for searching
- **steps**: Default steps with titles, descriptions, tasks, and acceptance criteria
- **phases** (optional): Groupings of steps

## Customization

Templates provide a starting point. After applying a template, you can:

1. Edit step files to customize content
2. Add or remove steps as needed
3. Modify the SUMMARY.md for your specific context
4. Update STATUS.md as work progresses

