import { PlanTemplate } from './registry.js';
/**
 * Options for applying a template
 */
export interface ApplyTemplateOptions {
    /** Template ID to apply */
    templateId: string;
    /** Plan code (directory name) */
    code: string;
    /** Plan display name */
    name: string;
    /** Base path to create the plan in */
    basePath: string;
    /** Custom description (overrides template) */
    description?: string;
    /** Variable substitutions for template content */
    variables?: Record<string, string>;
    /** Additional tags to add */
    tags?: string[];
}
/**
 * Result of applying a template
 */
export interface ApplyTemplateResult {
    /** Whether application succeeded */
    success: boolean;
    /** Path to created plan */
    path?: string;
    /** Template that was applied */
    template?: PlanTemplate;
    /** Error message if failed */
    error?: string;
}
/**
 * Apply a template to create a new plan
 */
export declare function applyTemplate(options: ApplyTemplateOptions): Promise<ApplyTemplateResult>;
//# sourceMappingURL=apply.d.ts.map