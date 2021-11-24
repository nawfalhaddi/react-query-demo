import { accountSdk } from '@lib/sdk/account-sdk';
import { QueryKey, UseQueryOptions } from 'react-query';
import { useApiHeaders } from './use-api-headers';
import { useQueryWrapper } from './use-api-wrapper-v2';

type Input = Components.Schemas.V1ListAddressAction;
type Output = Components.Schemas.V1ListAddressResponse;
type OutputError = Components.Schemas.ErrorResponse;

export const useGetListAddresses = (
	mutationKey: string,
	params?: Input,
	options: Omit<
		UseQueryOptions<Output, OutputError, Output, QueryKey>,
		'queryKey' | 'queryFn'
	> = {},
) => {
	const headers = useApiHeaders();

	return useQueryWrapper<Output, OutputError>(
		mutationKey,
		() =>
			//@ts-ignore
			accountSdk
				.V1ListAddressAction((params = {}), {
					headers,
				})
				.then(response => response?.data),

		options,
	);
};
