import { accountSdk } from '@lib/sdk/account-sdk';
import { UseMutationOptions } from 'react-query';
import { useApiHeaders } from './use-api-headers';
import { useMutationWrapper } from './use-api-wrapper-v2';

type Input = Components.Schemas.V1UpdateAddressAction;
type Output = Components.Schemas.Address;
type OutputError = Components.Schemas.ErrorResponse;

export const useUpdateAddress = (
	options: UseMutationOptions<
		Output,
		OutputError,
		Input,
		{ previousAddresses: Components.Schemas.V1ListAddressResponse }
	> = {},
) => {
	const headers = useApiHeaders();

	return useMutationWrapper<
		Output,
		OutputError,
		Input,
		{ previousAddresses: Components.Schemas.V1ListAddressResponse }
	>(
		params =>
			accountSdk
				.V1UpdateAddressAction(params, {
					headers,
				})
				.then(response => response?.data)
				.catch(error => error),
		options,
	);
};
