import { accountSdk } from '@lib/sdk/account-sdk';
import { UseMutationOptions } from 'react-query';
import { useApiHeaders } from './use-api-headers';
import { useMutationWrapper } from './use-api-wrapper-v2';

type Input = Paths.V1DeleteAddressAction.RequestBody;
type Output = Paths.V1DeleteAddressAction.Responses.$200;

type OutputError = Components.Schemas.ErrorResponse;

export const useDeleteAddress = (
	options: UseMutationOptions<Output, OutputError, Input> = {},
) => {
	const headers = useApiHeaders();

	return useMutationWrapper<Output, OutputError, Input>(
		params =>
			accountSdk
				.V1DeleteAddressAction(params, {
					headers,
				})
				.then(response => response?.data)
				.catch(error => error),
		options,
	);
};
