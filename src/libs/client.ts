import type { Schemas } from '@/types';
import { createClient } from 'microcms-js-sdk';
import type { MicroCMSClient } from 'microcms-ts-sdk';

/**
 * 型名を小文字のキーに変換するユーティリティ型
 */
type LowercaseKeys<T> = {
	[K in keyof T as `${Lowercase<string & K>}s`]: T[K];
};

interface Endpoints {
	// API in list format.
	list: LowercaseKeys<Schemas>;
	// API in object format
	object: LowercaseKeys<Schemas>;
}

/**
 * Cloud flare などで runtime を使用する際に必要になる
 * @param runtime
 * @returns {MicroCMSClient<Endpoints>}
 */
export const client = (runtime?: any): MicroCMSClient<Endpoints> => {
	const serviceDomain =
		runtime?.env?.MICROCMS_SERVICE_DOMAIN ??
		import.meta.env.MICROCMS_SERVICE_DOMAIN;
	const apiKey =
		runtime?.env?.MICROCMS_API_KEY ?? import.meta.env.MICROCMS_API_KEY;

	return createClient({
		serviceDomain,
		apiKey,
	});
};

// Schema type inference
// type Schema = MicroCMSSchemaInfer<typeof client>;
