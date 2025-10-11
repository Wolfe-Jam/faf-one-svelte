/**
 * 🏆 UNIVERSAL INTELLIGENCE GENERATOR
 *
 * THE foundational pattern that applies to EVERYTHING:
 * - Code projects (package.json, tsconfig, etc.)
 * - Automation workflows (n8n, Make, Opal, OpenAI)
 * - Documentation centers (markdown, wikis)
 * - API specifications (OpenAPI, GraphQL)
 * - ANY project that needs AI context
 *
 * Pattern: interrogation → extraction → filtering → generation
 * Output: ALWAYS .faf (universal container for structured intelligence)
 *
 * FOUNDATIONAL FIRST, UNIVERSAL BY DEFAULT
 */

import yaml from 'yaml';

export interface IntelligenceSource {
  type: SourceType;
  filePath: string;
  metadata?: Record<string, any>;
}

export type SourceType =
  | 'code-project'      // package.json, requirements.txt, Cargo.toml
  | 'n8n-workflow'      // n8n workflow.json
  | 'make-scenario'     // Make.com scenario export
  | 'opal-miniapp'      // Google Opal mini-app
  | 'openai-assistant'  // OpenAI Assistant config
  | 'documentation'     // Markdown/docs folder
  | 'api-spec'          // OpenAPI, GraphQL schema
  | 'custom';           // User-defined input

export interface RawIntelligence {
  // Raw extracted data (platform-specific)
  data: any;
  confidence: number;
  metadata: {
    source_type: SourceType;
    source_file: string;
    extracted_at: string;
  };
}

export interface StructuredIntelligence {
  // Universal .faf schema (platform-agnostic)
  project: {
    name: string;
    type: string;
    goal: string;
    main_language?: string;
  };

  architecture?: {
    pattern: string;
    components: string[];
  };

  tech_stack?: Record<string, string>;

  human_context: {
    who: string;
    what: string;
    why: string;
    where: string;
    when: string;
    how: string;
  };

  // Platform-specific details preserved
  source_data?: any;

  scores: {
    faf_score: number;
    ai_compatibility_score: number;
    completeness_score: number;
  };

  generated: string;
  faf_version: string;
}

/**
 * Base class implementing the universal pattern
 *
 * All input adapters (n8n, Make, Opal, etc.) extend this
 */
export abstract class UniversalIntelligenceGenerator {

  /**
   * PHASE 1: INTERROGATION
   *
   * "What is this? What type of intelligence source?"
   *
   * Detects the input type and determines if we can process it
   */
  abstract detect(filePath: string): Promise<boolean>;

  /**
   * PHASE 2: EXTRACTION
   *
   * "Pull the raw intelligence from the source"
   *
   * Platform-specific parsing happens here
   * Output is raw, unstructured data
   */
  abstract extract(filePath: string): Promise<RawIntelligence>;

  /**
   * PHASE 3: FILTERING
   *
   * "Transform raw data → structured intelligence"
   * "Validate, score, enrich"
   *
   * This is where POOR → RICH transformation happens:
   * - Auto-correct typos
   * - Fill missing context (6 W's)
   * - Ask clarifying questions (minimal friction)
   * - Calculate quality scores
   */
  abstract filter(raw: RawIntelligence): Promise<StructuredIntelligence>;

  /**
   * PHASE 4: GENERATION
   *
   * "Output championship .faf"
   *
   * Converts structured intelligence → YAML .faf file
   * Target: 85%+ score (🥉 Bronze or better)
   */
  generate(intelligence: StructuredIntelligence): string {
    // Universal YAML generation
    return this.toYAML(intelligence);
  }

  /**
   * THE COMPLETE FLOW
   *
   * Orchestrates all 4 phases
   */
  async process(filePath: string): Promise<string> {
    // 1. INTERROGATION
    const canProcess = await this.detect(filePath);
    if (!canProcess) {
      throw new Error(`Cannot process file: ${filePath}`);
    }

    // 2. EXTRACTION
    const raw = await this.extract(filePath);

    // 3. FILTERING
    const structured = await this.filter(raw);

    // 4. GENERATION
    const fafContent = this.generate(structured);

    return fafContent;
  }

  /**
   * Helper: Convert structured intelligence → YAML
   */
  protected toYAML(intelligence: StructuredIntelligence): string {
    return yaml.stringify(intelligence);
  }

  /**
   * Helper: Calculate quality scores
   *
   * Used in FILTERING phase
   */
  protected calculateScores(data: Partial<StructuredIntelligence>): {
    faf_score: number;
    ai_compatibility_score: number;
    completeness_score: number;
  } {
    // Count filled fields
    let totalSlots = 0;
    let filledSlots = 0;

    // Project slots (required)
    totalSlots += 3; // name, type, goal
    if (data.project?.name) filledSlots++;
    if (data.project?.type) filledSlots++;
    if (data.project?.goal) filledSlots++;

    // Human context slots (6 W's - critical)
    totalSlots += 6;
    if (data.human_context?.who) filledSlots++;
    if (data.human_context?.what) filledSlots++;
    if (data.human_context?.why) filledSlots++;
    if (data.human_context?.where) filledSlots++;
    if (data.human_context?.when) filledSlots++;
    if (data.human_context?.how) filledSlots++;

    // Architecture slots (if applicable)
    if (data.architecture) {
      totalSlots += 2;
      if (data.architecture.pattern) filledSlots++;
      if (data.architecture.components?.length) filledSlots++;
    }

    // Tech stack slots (if applicable)
    if (data.tech_stack && Object.keys(data.tech_stack).length > 0) {
      totalSlots += Object.keys(data.tech_stack).length;
      filledSlots += Object.values(data.tech_stack).filter(v => v).length;
    }

    const faf_score = Math.round((filledSlots / totalSlots) * 100);

    return {
      faf_score,
      ai_compatibility_score: faf_score, // Aligned for now
      completeness_score: faf_score,     // Aligned for now
    };
  }
}

/**
 * Example: n8n Workflow Intelligence Generator
 *
 * Extends the universal pattern for n8n-specific processing
 */
export class N8nIntelligenceGenerator extends UniversalIntelligenceGenerator {

  async detect(filePath: string): Promise<boolean> {
    // Check if file is n8n workflow JSON
    const fs = await import('fs/promises');
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const json = JSON.parse(content);
      return !!(json.nodes && json.connections);
    } catch {
      return false;
    }
  }

  async extract(filePath: string): Promise<RawIntelligence> {
    // Use existing n8n analyzer from faf-cli package
    const { N8nWorkflowAnalyzer } = await import('faf-cli/dist/enrichment/n8n-analyzer');
    const workflow = await N8nWorkflowAnalyzer.parse(filePath);
    const pattern = N8nWorkflowAnalyzer.detectPattern(workflow);

    return {
      data: {
        workflow,
        pattern,
        aiModels: N8nWorkflowAnalyzer.extractAIModels(workflow),
        infrastructure: N8nWorkflowAnalyzer.extractInfrastructure(workflow),
        triggers: N8nWorkflowAnalyzer.extractTriggers(workflow),
        nodes: N8nWorkflowAnalyzer.groupNodes(workflow),
        tools: N8nWorkflowAnalyzer.extractToolCapabilities(workflow),
        decisionPoints: N8nWorkflowAnalyzer.extractDecisionPoints(workflow),
        memory: N8nWorkflowAnalyzer.extractMemoryRequirements(workflow),
      },
      confidence: 95,
      metadata: {
        source_type: 'n8n-workflow',
        source_file: filePath,
        extracted_at: new Date().toISOString(),
      },
    };
  }

  async filter(raw: RawIntelligence): Promise<StructuredIntelligence> {
    const { workflow, pattern, aiModels, infrastructure } = raw.data;

    // Use existing n8n-faf-generator from faf-cli package for RICH transformation
    // This already does: questions → auto-correct → 6 W's filling
    const { N8nFafGenerator } = await import('faf-cli/dist/enrichment/n8n-faf-generator');
    const generator = new N8nFafGenerator();

    // Generate full .faf (includes human context enrichment)
    // NOTE: N8nFafGenerator.generate() returns FILE PATH, not content
    const outputPath = await generator.generate({
      workflowFile: raw.metadata.source_file,
      quiet: true, // Quiet mode for tests
    });

    // Read the generated file
    const fs = await import('fs/promises');
    const fafYAML = await fs.readFile(outputPath, 'utf-8');

    // Parse back to structured format
    const structured = yaml.parse(fafYAML);

    return structured;
  }
}

/**
 * Example: OpenAI Assistant Intelligence Generator
 *
 * Same universal pattern, different input adapter
 */
export class OpenAIAssistantGenerator extends UniversalIntelligenceGenerator {

  async detect(filePath: string): Promise<boolean> {
    // Detect OpenAI Assistant config (OpenAPI 3.1.0 schema)
    const fs = await import('fs/promises');
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const json = JSON.parse(content);
      return !!(json.openapi && json.paths);
    } catch {
      return false;
    }
  }

  async extract(filePath: string): Promise<RawIntelligence> {
    // Parse OpenAPI schema
    const fs = await import('fs/promises');
    const content = await fs.readFile(filePath, 'utf-8');
    const schema = JSON.parse(content);

    return {
      data: {
        schema,
        actions: this.extractActions(schema),
        tools: this.extractTools(schema),
      },
      confidence: 90,
      metadata: {
        source_type: 'openai-assistant',
        source_file: filePath,
        extracted_at: new Date().toISOString(),
      },
    };
  }

  async filter(raw: RawIntelligence): Promise<StructuredIntelligence> {
    const { schema, actions, tools } = raw.data;

    // Transform to universal .faf structure
    const structured: StructuredIntelligence = {
      project: {
        name: schema.info?.title || 'OpenAI Assistant',
        type: 'openai-assistant',
        goal: schema.info?.description || 'AI assistant with custom actions',
      },
      architecture: {
        pattern: 'AI Assistant',
        components: actions.map((a: any) => a.name),
      },
      tech_stack: {
        platform: 'OpenAI Assistants API',
        schema_version: schema.openapi,
      },
      human_context: {
        who: 'AI Assistant Developer',
        what: schema.info?.title || 'OpenAI Assistant',
        why: schema.info?.description || 'Custom AI assistant functionality',
        where: 'OpenAI Platform',
        when: 'Production',
        how: `OpenAPI schema with ${actions.length} custom actions`,
      },
      source_data: raw.data,
      scores: this.calculateScores({
        project: {
          name: schema.info?.title,
          type: 'openai-assistant',
          goal: schema.info?.description,
        },
        human_context: {
          who: 'AI Assistant Developer',
          what: schema.info?.title,
          why: schema.info?.description,
          where: 'OpenAI Platform',
          when: 'Production',
          how: `OpenAPI schema with ${actions.length} custom actions`,
        },
      }),
      generated: new Date().toISOString(),
      faf_version: '3.0.1',
    };

    return structured;
  }

  private extractActions(schema: any): any[] {
    const actions: any[] = [];
    for (const [path, methods] of Object.entries(schema.paths || {})) {
      for (const [method, details] of Object.entries(methods as any)) {
        actions.push({
          name: (details as any).operationId || `${method.toUpperCase()} ${path}`,
          path,
          method,
          description: (details as any).description,
        });
      }
    }
    return actions;
  }

  private extractTools(schema: any): string[] {
    // Extract tool names from action IDs
    return this.extractActions(schema).map(a => a.name);
  }
}

/**
 * Factory: Auto-detect and return appropriate generator
 */
export async function createGenerator(filePath: string): Promise<UniversalIntelligenceGenerator | null> {
  // Import all platform adapters
  const {
    OpalMiniAppGenerator,
    MakeScenarioGenerator,
    CodeProjectGenerator,
  } = await import('./platform-adapters');

  const generators: UniversalIntelligenceGenerator[] = [
    // Automation platforms
    new N8nIntelligenceGenerator(),
    new OpalMiniAppGenerator(),
    new MakeScenarioGenerator(),

    // AI assistants
    new OpenAIAssistantGenerator(),

    // Code projects (fallback)
    new CodeProjectGenerator(),
  ];

  for (const generator of generators) {
    if (await generator.detect(filePath)) {
      return generator;
    }
  }

  return null;
}

/**
 * Main entry point: Process any file → .faf
 */
export async function generateFafFromAny(filePath: string): Promise<string> {
  const generator = await createGenerator(filePath);

  if (!generator) {
    throw new Error(`No generator found for file: ${filePath}`);
  }

  return generator.process(filePath);
}
