import type { DB } from '@repo/db';
import type { i18n } from 'i18next';

import type { I18nPage } from '~/i18n/types';

declare global {
  namespace Vike {
    interface PageContext {
      random?: string;
    }
  }
}

export {};
