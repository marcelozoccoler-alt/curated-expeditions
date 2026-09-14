/**
 * Dados institucionais da Create Travel.
 *
 * A empresa foi fundada em 12 de setembro de 2014. Todas as menções a
 * "X anos" no site devem usar `companyYears()` — o número vira sozinho
 * a cada 12 de setembro, sem precisar editar texto nenhum.
 */

/** Data de fundação: 12/09/2014 (mês 8 = setembro, zero-indexed). */
export const COMPANY_FOUNDING_DATE = new Date(2014, 8, 12);

/** Aniversário da empresa: dia 12 de setembro de cada ano. */
export const COMPANY_ANNIVERSARY = { month: 8, day: 12 } as const;

/**
 * Anos completos de empresa na data de referência.
 * Ex.: em 10/09/2026 retorna 11; a partir de 12/09/2026 retorna 12.
 */
export const companyYears = (ref: Date = new Date()): number => {
  let years = ref.getFullYear() - COMPANY_FOUNDING_DATE.getFullYear();
  const anniversaryThisYear = new Date(
    ref.getFullYear(),
    COMPANY_ANNIVERSARY.month,
    COMPANY_ANNIVERSARY.day,
  );
  if (ref < anniversaryThisYear) years -= 1;
  return years;
};

/** True durante todo o mês de setembro — mês de aniversário da empresa. */
export const isCompanyAnniversary = (ref: Date = new Date()): boolean =>
  ref.getMonth() === COMPANY_ANNIVERSARY.month;

/**
 * Anos celebrados no mês de aniversário (setembro) da data de referência.
 * Diferente de `companyYears()`, vale o mês inteiro, inclusive antes do dia 12.
 */
export const companyAnniversaryYears = (ref: Date = new Date()): number =>
  ref.getFullYear() - COMPANY_FOUNDING_DATE.getFullYear();
