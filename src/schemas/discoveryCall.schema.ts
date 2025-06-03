import { z } from 'zod';

/**
 * Schema for team size selection
 * Defines the valid team size options
 */
export const teamSizeSchema = z.enum(['1-3', '4-10', '11-25', '25+'], {
  errorMap: () => ({ message: 'Please select a valid team size' }),
});

/**
 * Base validation schemas for common field types
 */
export const baseSchemas = {
  name: z
    .string()
    .min(1, 'This field is required')
    .min(2, 'Must be at least 2 characters')
    .max(50, 'Must not exceed 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Only letters, spaces, hyphens, and apostrophes allowed'),

  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(254, 'Email address too long')
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please enter a valid email format'
    )
    .transform(email => email.toLowerCase().trim()),

  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(
      /^[\+]?[1-9][\d]{0,15}$/,
      'Please enter a valid phone number (10-16 digits, optionally starting with +)'
    )
    .min(10, 'Phone number must be at least 10 digits')
    .max(17, 'Phone number must not exceed 17 characters')
    .transform(phone => phone.replace(/\s/g, '')), // Remove spaces

  company: z
    .string()
    .min(1, 'Company name is required')
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must not exceed 100 characters')
    .transform(company => company.trim()),

  challenges: z
    .string()
    .max(1000, 'Please keep your message under 1000 characters')
    .transform(text => text.trim())
    .optional(),
} as const;

/**
 * Main discovery call form schema
 * Combines base schemas with specific validation rules
 */
export const discoveryCallFormSchema = z.object({
  firstName: baseSchemas.name,
  lastName: baseSchemas.name,
  email: baseSchemas.email,
  phone: baseSchemas.phone,
  company: baseSchemas.company,
  teamSize: teamSizeSchema,
  challenges: baseSchemas.challenges,
});

/**
 * Type inference for the form data
 */
export type DiscoveryCallFormData = z.infer<typeof discoveryCallFormSchema>;

/**
 * Schema for form submission with additional metadata
 */
export const discoveryCallSubmissionSchema = discoveryCallFormSchema.extend({
  submittedAt: z.date().default(() => new Date()),
  source: z.string().default('website'),
  userAgent: z.string().optional(),
});

export type DiscoveryCallSubmission = z.infer<typeof discoveryCallSubmissionSchema>;

/**
 * Validation helper functions
 */
export const validationHelpers = {
  /**
   * Validates a single field from the form
   */
  validateField: <K extends keyof DiscoveryCallFormData>(
    fieldName: K,
    value: DiscoveryCallFormData[K]
  ) => {
    try {
      const fieldSchema = discoveryCallFormSchema.shape[fieldName];
      return { success: true, data: fieldSchema.parse(value), error: null };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { 
          success: false, 
          data: null, 
          error: error.errors[0]?.message || 'Validation failed' 
        };
      }
      return { success: false, data: null, error: 'Unknown validation error' };
    }
  },

  /**
   * Safely parses the entire form data
   */
  parseFormData: (data: unknown) => {
    return discoveryCallFormSchema.safeParse(data);
  },

  /**
   * Prepares data for submission with metadata
   */
  prepareSubmissionData: (formData: DiscoveryCallFormData, metadata?: {
    userAgent?: string;
    source?: string;
  }) => {
    return discoveryCallSubmissionSchema.parse({
      ...formData,
      userAgent: metadata?.userAgent || navigator.userAgent,
      source: metadata?.source || 'website',
    });
  },
} as const;

/**
 * Default values for the form
 */
export const defaultFormValues: DiscoveryCallFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  teamSize: '' as any, // Will be validated by enum schema
  challenges: '',
};

/**
 * Team size options for UI rendering
 */
export const teamSizeOptions = [
  { value: '1-3', label: '1-3 developers' },
  { value: '4-10', label: '4-10 developers' },
  { value: '11-25', label: '11-25 developers' },
  { value: '25+', label: '25+ developers' },
] as const; 