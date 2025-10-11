/**
 * 🏆 PLATFORM ADAPTERS
 *
 * Each platform (Opal, Make.com, etc.) is just an input adapter
 * The pattern is ALWAYS the same: interrogation → extraction → filtering → generation
 * The output is ALWAYS .faf
 *
 * FOUNDATIONAL FIRST, UNIVERSAL BY DEFAULT
 */

import {
  UniversalIntelligenceGenerator,
  RawIntelligence,
  StructuredIntelligence,
} from './universal-intelligence-generator';

/**
 * Google Opal Mini-App Generator
 *
 * Opal format: Visual node-based mini-apps
 * Architecture: User inputs → prompts → AI model calls → outputs
 */
export class OpalMiniAppGenerator extends UniversalIntelligenceGenerator {

  async detect(filePath: string): Promise<boolean> {
    // Detect Opal mini-app config
    const fs = await import('fs/promises');
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const json = JSON.parse(content);

      // Opal configs have 'steps' and 'model' fields (hypothetical structure)
      return !!(json.steps && json.model);
    } catch {
      return false;
    }
  }

  async extract(filePath: string): Promise<RawIntelligence> {
    const fs = await import('fs/promises');
    const content = await fs.readFile(filePath, 'utf-8');
    const opalConfig = JSON.parse(content);

    return {
      data: {
        config: opalConfig,
        pattern: this.detectOpalPattern(opalConfig),
        steps: opalConfig.steps || [],
        model: opalConfig.model,
        inputs: this.extractInputs(opalConfig),
        outputs: this.extractOutputs(opalConfig),
      },
      confidence: 85,
      metadata: {
        source_type: 'opal-miniapp',
        source_file: filePath,
        extracted_at: new Date().toISOString(),
      },
    };
  }

  async filter(raw: RawIntelligence): Promise<StructuredIntelligence> {
    const { config, pattern, steps, model } = raw.data;

    const structured: StructuredIntelligence = {
      project: {
        name: config.name || 'Opal Mini-App',
        type: 'opal-miniapp',
        goal: config.description || 'AI-powered mini-application',
      },
      architecture: {
        pattern,
        components: steps.map((s: any) => s.type || s.action),
      },
      tech_stack: {
        platform: 'Google Opal',
        ai_model: model || 'Gemini',
      },
      human_context: {
        who: 'Opal Mini-App Creator',
        what: config.name || 'Opal Mini-App',
        why: config.description || 'AI-powered task automation',
        where: 'Google Opal Platform',
        when: 'Development',
        how: `Visual workflow with ${steps.length} steps using ${model}`,
      },
      source_data: raw.data,
      scores: this.calculateScores({
        project: {
          name: config.name,
          type: 'opal-miniapp',
          goal: config.description,
        },
        human_context: {
          who: 'Opal Mini-App Creator',
          what: config.name,
          why: config.description,
          where: 'Google Opal Platform',
          when: 'Development',
          how: `Visual workflow with ${steps.length} steps`,
        },
      }),
      generated: new Date().toISOString(),
      faf_version: '3.0.1',
    };

    return structured;
  }

  private detectOpalPattern(config: any): string {
    // Pattern detection based on steps
    const stepTypes = (config.steps || []).map((s: any) => s.type || s.action);

    if (stepTypes.includes('research') || stepTypes.includes('search')) {
      return 'Research Assistant';
    }
    if (stepTypes.includes('image')) {
      return 'Image Generation';
    }
    if (stepTypes.includes('text')) {
      return 'Text Processing';
    }

    return 'Generic Mini-App';
  }

  private extractInputs(config: any): string[] {
    return (config.inputs || []).map((i: any) => i.name || i.label);
  }

  private extractOutputs(config: any): string[] {
    return (config.outputs || []).map((o: any) => o.type || o.format);
  }
}

/**
 * Make.com Scenario Generator
 *
 * Make format: Blueprint JSON with 'name', 'flow', and 'metadata'
 * Architecture: Triggers → modules (in flow array) → actions
 *
 * Actual Make.com Blueprint Structure (validated 2025-10-10):
 * {
 *   "name": "Scenario Name",
 *   "flow": [ // Array of module objects
 *     {
 *       "id": 1,
 *       "module": "gateway:CustomWebHook",
 *       "version": 1,
 *       "metadata": { "designer": { "x": 0, "y": 0 } }
 *     }
 *   ],
 *   "metadata": {
 *     "version": 1,
 *     "scenario": { "roundtrips": 1, "maxErrors": 3, ... },
 *     "designer": { "orphans": [] }
 *   },
 *   "scheduling": { "type": "indefinitely", "interval": 15 },
 *   "created": "ISO timestamp",
 *   "last_edit": "ISO timestamp"
 * }
 */
export class MakeScenarioGenerator extends UniversalIntelligenceGenerator {

  async detect(filePath: string): Promise<boolean> {
    // Detect Make.com scenario blueprint export
    const fs = await import('fs/promises');
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const json = JSON.parse(content);

      // Make blueprints have 'name' and 'flow' (array of modules)
      return !!(json.name && Array.isArray(json.flow) && json.metadata);
    } catch {
      return false;
    }
  }

  async extract(filePath: string): Promise<RawIntelligence> {
    const fs = await import('fs/promises');
    const content = await fs.readFile(filePath, 'utf-8');
    const blueprint = JSON.parse(content);

    // Extract modules from flow array
    const modules = blueprint.flow || [];

    return {
      data: {
        blueprint,
        pattern: this.detectMakePattern(blueprint),
        modules,
        triggers: this.extractTriggers(modules),
        actions: this.extractActions(modules),
        integrations: this.extractIntegrations(modules),
        scheduling: blueprint.scheduling,
      },
      confidence: 90,
      metadata: {
        source_type: 'make-scenario',
        source_file: filePath,
        extracted_at: new Date().toISOString(),
      },
    };
  }

  async filter(raw: RawIntelligence): Promise<StructuredIntelligence> {
    const { blueprint, pattern, modules, triggers, actions, integrations, scheduling } = raw.data;

    const structured: StructuredIntelligence = {
      project: {
        name: blueprint.name || 'Make.com Scenario',
        type: 'make-scenario',
        goal: `${pattern} connecting ${integrations.length} services`,
      },
      architecture: {
        pattern,
        components: modules.map((m: any) => m.module || m.type),
      },
      tech_stack: {
        platform: 'Make.com',
        integrations: integrations.join(', '),
        scheduling: scheduling?.type || 'Manual',
      },
      human_context: {
        who: 'Make.com User',
        what: blueprint.name || 'Make.com Scenario',
        why: `Automate ${pattern.toLowerCase()} workflow`,
        where: 'Make.com Cloud Platform',
        when: scheduling?.type === 'indefinitely' ? `Every ${scheduling.interval} minutes` : 'Manual trigger',
        how: `${modules.length} modules connecting ${integrations.length} services`,
      },
      source_data: raw.data,
      scores: this.calculateScores({
        project: {
          name: blueprint.name,
          type: 'make-scenario',
          goal: `${pattern} connecting ${integrations.length} services`,
        },
        human_context: {
          who: 'Make.com User',
          what: blueprint.name,
          why: `Automate ${pattern.toLowerCase()} workflow`,
          where: 'Make.com Cloud Platform',
          when: scheduling?.type || 'Manual',
          how: `${modules.length} modules`,
        },
      }),
      generated: new Date().toISOString(),
      faf_version: '3.0.1',
    };

    return structured;
  }

  private detectMakePattern(blueprint: any): string {
    const modules = blueprint.flow || [];
    const moduleTypes = modules.map((m: any) => m.module || '');

    if (moduleTypes.some((t: string) => t.includes('WebHook'))) {
      return 'Webhook-triggered Automation';
    }
    if (blueprint.scheduling?.type === 'indefinitely') {
      return 'Scheduled Automation';
    }
    if (moduleTypes.some((t: string) => t.toLowerCase().includes('openai') || t.toLowerCase().includes('anthropic'))) {
      return 'AI-powered Automation';
    }
    if (moduleTypes.some((t: string) => t.includes('HTTP'))) {
      return 'API Integration';
    }

    return 'General Automation';
  }

  private extractTriggers(modules: any[]): any[] {
    // First module is typically the trigger in Make.com
    return modules.length > 0 ? [modules[0]] : [];
  }

  private extractActions(modules: any[]): any[] {
    // All modules except the first (trigger)
    return modules.slice(1);
  }

  private extractIntegrations(modules: any[]): string[] {
    const services = new Set<string>();

    modules.forEach((m: any) => {
      // Module format: "app:ModuleName" (e.g., "gateway:CustomWebHook")
      const moduleName = m.module || '';
      const app = moduleName.split(':')[0];
      if (app && app !== 'builtin') {
        services.add(app);
      }
    });

    return Array.from(services);
  }
}

/**
 * Code Project Generator
 *
 * Handles traditional code projects (package.json, requirements.txt, etc.)
 * This is what FAF already does well - just formalizing it in the universal pattern
 */
export class CodeProjectGenerator extends UniversalIntelligenceGenerator {

  async detect(filePath: string): Promise<boolean> {
    // Detect if this is a project directory with package.json, requirements.txt, etc.
    const fs = await import('fs/promises');
    const path = await import('path');

    try {
      const stats = await fs.stat(filePath);
      if (!stats.isDirectory()) return false;

      // Check for common project files
      const files = await fs.readdir(filePath);
      return files.some(f =>
        f === 'package.json' ||
        f === 'requirements.txt' ||
        f === 'Cargo.toml' ||
        f === 'go.mod'
      );
    } catch {
      return false;
    }
  }

  async extract(filePath: string): Promise<RawIntelligence> {
    // Use existing framework detector
    const { detectFramework } = await import('faf-cli/dist/framework-detector');
    const detection = await detectFramework(filePath);

    // Use existing TURBO-CAT for format discovery
    const { getAllFormats } = await import('faf-cli/dist/utils/turbo-cat-pyramid');
    const formats = getAllFormats();

    return {
      data: {
        framework: detection.framework,
        language: detection.language,
        ecosystem: detection.ecosystem,
        formats: formats.slice(0, 10), // Sample
      },
      confidence: detection.confidence,
      metadata: {
        source_type: 'code-project',
        source_file: filePath,
        extracted_at: new Date().toISOString(),
      },
    };
  }

  async filter(raw: RawIntelligence): Promise<StructuredIntelligence> {
    const { framework, language, ecosystem } = raw.data;

    // This would integrate with existing `faf init` flow
    // For now, minimal structure:
    const structured: StructuredIntelligence = {
      project: {
        name: 'Code Project',
        type: 'code-project',
        goal: `${framework} application`,
        main_language: language,
      },
      tech_stack: {
        framework,
        language,
        ecosystem,
      },
      human_context: {
        who: 'Developer',
        what: `${framework} application`,
        why: 'Software development',
        where: 'Development',
        when: 'In progress',
        how: `Using ${framework} with ${language}`,
      },
      scores: this.calculateScores({
        project: {
          name: 'Code Project',
          type: 'code-project',
          goal: `${framework} application`,
        },
        human_context: {
          who: 'Developer',
          what: `${framework} application`,
          why: 'Software development',
          where: 'Development',
          when: 'In progress',
          how: `Using ${framework}`,
        },
      }),
      generated: new Date().toISOString(),
      faf_version: '3.0.1',
    };

    return structured;
  }
}

/**
 * Export all adapters for registration
 */
export const PLATFORM_ADAPTERS = [
  OpalMiniAppGenerator,
  MakeScenarioGenerator,
  CodeProjectGenerator,
] as const;
