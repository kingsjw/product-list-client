import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export function createApolloClient() {
	return new ApolloClient({
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						productData: {
							keyArgs: false,
							merge(existing: any, incoming: any) {
								if (!incoming) return existing;
								if (!existing) return incoming;
								const { products, ...rest } = incoming;
								let result = rest;
								result.products = [...existing.products, ...products];
								return result;
							}
						}
					}
				}
			}
		}),
		link: new HttpLink({
			uri: "http://localhost:4000",
		}),
	});
}
