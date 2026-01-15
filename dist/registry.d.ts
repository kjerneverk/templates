/**
 * Template Registry
 *
 * Central registry for all available plan templates.
 */
/**
 * A step definition for a template
 */
export interface TemplateStep {
    /** Step title */
    title: string;
    /** Step description */
    description: string;
    /** Tasks in this step */
    tasks?: string[];
    /** Acceptance criteria */
    criteria?: string[];
}
/**
 * A plan template definition
 */
export interface PlanTemplate {
    /** Unique template ID */
    id: string;
    /** Display name */
    name: string;
    /** Description of the template */
    description: string;
    /** Category */
    category: "general" | "development" | "operations" | "documentation";
    /** Tags for searchability */
    tags: string[];
    /** Default steps for this template */
    steps: TemplateStep[];
    /** Default phases (optional grouping) */
    phases?: Array<{
        name: string;
        description: string;
        steps: number[];
    }>;
    /** Custom SUMMARY.md content template */
    summaryTemplate?: string;
    /** Custom EXECUTION_PLAN.md content template */
    executionPlanTemplate?: string;
    /** Additional files to create */
    additionalFiles?: Array<{
        path: string;
        content: string;
    }>;
}
/**
 * Central registry of all templates
 */
export declare const TEMPLATE_REGISTRY: Map<string, PlanTemplate>;
/**
 * Register a template
 */
export declare function registerTemplate(template: PlanTemplate): void;
/**
 * Get a template by ID
 */
export declare function getTemplate(id: string): PlanTemplate | undefined;
/**
 * List all available templates
 */
export declare function listTemplates(): PlanTemplate[];
/**
 * List templates by category
 */
export declare function listTemplatesByCategory(category: PlanTemplate["category"]): PlanTemplate[];
/**
 * Search templates by tag
 */
export declare function searchTemplatesByTag(tag: string): PlanTemplate[];
//# sourceMappingURL=registry.d.ts.map