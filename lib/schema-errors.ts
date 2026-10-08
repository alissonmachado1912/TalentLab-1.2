export function missingSchema(error: unknown) {
  return !!error && typeof error === 'object' && 'code' in error &&
    ['42703', '42P01', '42883', 'PGRST202', 'PGRST204', 'PGRST205'].includes(String(error.code));
}
