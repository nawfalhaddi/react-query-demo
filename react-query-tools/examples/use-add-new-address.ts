import { accountSdk } from '@lib/sdk/account-sdk';
import { UseMutationOptions } from 'react-query';
import { useApiHeaders } from './use-api-headers';
import { useMutationWrapper } from './use-api-wrapper-v2';

type Input = Components.Schemas.V1CreateAddressAction;
type Output = Components.Schemas.Address;
type OutputError = Components.Schemas.ErrorResponse;

export const useAddNewAddress = (
	options: UseMutationOptions<Output, OutputError, Input> = {},
) => {
	const headers = useApiHeaders();

	return useMutationWrapper<Output, OutputError, Input>(
		params =>
			accountSdk
				.V1CreateAddressAction(params, {
					headers,
				})
				.then(response => response?.data)
				.catch(error => error),
		options,
	);
};
