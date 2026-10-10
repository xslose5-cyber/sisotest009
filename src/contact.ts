export const PHONE = '010-7135-8901';
export const PHONE_HREF = `tel:${PHONE}`;
export const EMAIL = 'mariv_siso@naver.com';

export function mailto(subject?: string) {
  return `mailto:${EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
}
